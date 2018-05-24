import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authStatus: 'false',
    books: [],
    book: {}
  },
  mutations: {
    checkAuth (state) {
      let token = localStorage.getItem('authStatus')
      state.authStatus = token || 'false'
    },
    getBooks (state, payload) {
      state.books = payload
    },
    addBook (state, payload) {
      state.books.push(payload)
    },
    getBook (state, payload) {
      state.book = payload[0]
    }
  },
  actions: {
    signup ({commit}, payload) {
      axios.post('http://localhost:3000/users/signup', payload)
        .then(result => {
          console.log(result)
          let token = result.data.token
          localStorage.setItem('authkey', token)
          localStorage.setItem('authStatus', true)
          swal('SUCCESS', `Sign up successful`, 'success')
          commit('checkAuth')
          setTimeout(function () { window.location.href = '/' }, 2000)
        })
        .catch(err => {
          console.log('ERROR from register', err)
        })
    },
    signin ({commit}, payload) {
      axios.post('http://localhost:3000/users/signin', payload)
        .then(result => {
          let token = result.data.token
          localStorage.setItem('authkey', token)
          localStorage.setItem('authStatus', true)
          commit('checkAuth')
          swal('SUCCESS', 'Sign in successful', 'success')
          setTimeout(function () { window.location.href = '/' }, 2000)
        })
        .catch(err => {
          console.log('ERROR from register', err)
          swal('ERROR', 'Incorrect email or password..', 'error')
        })
    },
    getBooks ({commit}) {
      axios.get('http://localhost:3000/books')
        .then(result => {
          commit('getBooks', result.data.result)
        })
        .catch(err => {
          console.log('ERROR from getBooks', err)
        })
    },
    addBook ({commit}, payload) {
      // console.log(payload)
      let token = localStorage.getItem('authkey')
      let config = {
        headers: {'authkey': token}
      }
      axios.post('http://localhost:3000/books/save', payload, config)
        .then(result => {
          commit('addBook', result.data.book)
        })
        .catch(err => {
          console.log('ERROR from save Book', err)
        })
    },
    getBook ({commit}, payload) {
      let url = 'http://localhost:3000/books/single?id=' + payload
      axios.get(url)
        .then(result => {
          // console.log(result.data.result)
          commit('getBook', result.data.result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
