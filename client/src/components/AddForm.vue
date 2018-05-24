<template>
    <div class="addform">

      <!-- <div v-if="authStatus == 'true'"> -->
        <div class="fixed-action-btn">
          <a class="btn-floating btn-large" style="background-color:#03a9f4;border:2px solid white;" @click="checkToken">
            <i class="large material-icons modal-trigger" href="#modal4">book</i>
          </a>
        </div>

        <!-- Modal Structure -->
        <div id="modal4" class="modal">
          <div class="modal-content">
            <h4>Post New Book</h4>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="title" type="text" class="validate" v-model="title">
                    <label for="">Book Title</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="author" type="text" class="validate" v-model="author">
                    <label for="">Author</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="publisher" type="text" class="validate" v-model="publisher">
                    <label for="">Publisher</label>
                  </div>
                  <label>Book Cover</label>
                  <div class="file-field input-field">
                    <div class="btn">
                      <span>File</span>
                      <input type="file" id="image">
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn #eceff1 blue-grey lighten-5 logo">Cancel</a>
            <a class="modal-close waves-effect waves-green btn #03a9f4 light-blue" @click="addBook">Post !</a>
          </div>
        </div>
      </div>
      <!-- <div v-else>
        <div class="fixed-action-btn">
          <a class="btn-floating btn-large" style="background-color:black;border:2px solid white;" @click="checkToken">
            <i class="large material-icons" href="#modal4">question_answer</i>
          </a>
        </div>
      </div>
    </div> -->

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddForm',
  props: {
  },
  data () {
    return {
      title: '',
      author: '',
      publisher: ''
    }
  },
  components: {
  },
  created () {
    $(document).ready(function(){
      $('.modal').modal('');
      $('.fixed-action-btn').floatingActionButton();
      $('select').formSelect();
    });
    this.$store.commit('checkAuth')
  },
  computed: {
    ...mapState([
      'authStatus'
    ])
  },
  methods: {
    checkToken () {
      if (this.authStatus == 'false') {
        swal('ERROR', 'Prior adding new question, please sign in :D', 'error')
      }
    },
    addBook () {
      let fileInput = document.querySelector('#image');
      let formData = new FormData()
      formData.append('title', this.title);
      formData.append('author', this.author);
      formData.append('publisher', this.publisher);
      formData.append('image', fileInput.files[0]);
      this.$store.dispatch('addBook', formData)
      this.title = ''
      this.author = ''
      this.publisher = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Monoton|Pacifico');

.logo {
  color: black;
}

.logo-bg {
  background-color: black;
}

.row {
  margin-bottom: 10px;
}

.modal-content {
  padding-bottom: 0px;
}

.back-button {
  margin-top: 20px;
  font-weight: bold;
  width: 100px;
}

.btn { margin-left: 10px !important; margin-right: 10px !important; }

</style>
