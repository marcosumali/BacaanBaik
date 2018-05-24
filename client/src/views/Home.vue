<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- {{books}} -->

    <AddForm />

    <div class="row">
      <div class="book-container col l10 offset-l1 s12">
        <div class="book col l3 s12" v-for="(book, index) in books" :key="index">
          <div class="book-card">
            <div class="row">
              <div class="col s12">
                <div class="card">
                  <div class="card-image">
                    <img :src="book.image">
                  </div>
                  <div class="card-content">
                    <router-link :to="{ path: 'single', query: { id: book._id }}"><p class="title">{{ book.title }}</p></router-link>
                    <p class="desc"><b>Author:</b> {{ book.author }}</p>
                    <p class="desc"><b>Publisher:</b> {{ book.publisher }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  </div>
</template>

<style scoped>

.book-container {
  /* border: 1px solid black; */
}

.book {
  /* border: 1px solid red; */
  min-height: 100px;
}

img {
  min-height: 400px;
  max-height: 400px;
}

.title {
  font-size: 17px;
  font-weight: bold;
}

.desc {
  padding-left: 10px;
}

.card-content {
  min-height: 200px;
  max-height: 200px;
  padding: 20px;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AddForm from '@/components/AddForm.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    AddForm
  },
  created () {
    this.$store.dispatch('getBooks')
  },
  computed: {
    ...mapState([
      'books'
    ])
  }
}
</script>
