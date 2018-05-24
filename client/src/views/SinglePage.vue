<template>
  <div class="single" >
  
    <div class="row">
      <div class="question-container col l8 offset-l2 s12">
        <div class="col s12">
          <h3>{{ book.title }}</h3>
          <p class="">posted by <span style="font-weight:bold;">{{ book.userId.name }}</span> on <span style="font-weight:bold;">{{ new Date(book.createdAt).getDate() }} {{ getMonthName(new Date(book.createdAt).getMonth()) }} {{ new Date(book.createdAt).getFullYear() }}</span></p>
        </div>
        <div class="col l3 s12 text-center">
          <img :src="book.image">
        </div>
        <div class="col l9 s12">
          <div class="details col s12">
            <p>{{ book.author }}</p>
            <p>{{ book.publisher }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'single',
  data () {
    return {
      id: this.$route.query.id,
      input: ''
    }
  },
  components: {
  },
  created () {
    this.$store.dispatch('getBook', this.id)
  },
  methods: {
    getMonthName (num) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      return monthNames[num]
    }
  },
  computed: {
    ...mapState([
      'book',
    ])
  }
}
</script>

<style scoped>

img {
  min-height: 400px;
  max-height: 400px;
}


.text-center {
  text-align: center
}

.arrow-size {
  font-size: 70px;
  padding: 0px;
}

.score-style {
  font-size: 30px
}

.pointer {
  cursor: pointer;
}

.details {
  /* border: 1px solid black; */
  background-color: lightgray;
  border-radius: 10px;
  min-height: 200px;
}

hr, .answers {
  margin-left: 300px;
  margin-right: 300px;
}

@media only screen and (max-width: 375px) {

  hr, .answers {
    margin-left: 20px;
    margin-right: 20px;
  }

}

.answer-container {
  margin-bottom: 50px;
}

</style>
