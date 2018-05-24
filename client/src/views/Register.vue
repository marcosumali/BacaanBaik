<template>
  <div class="register">

    <div class="row">
      <div class="logres-container col l8 offset-l2 s10 offset-s1">
        <div class="signup col l6 s12">
          <h4>Sign Up</h4>

          <div class="row">
            <form class="form col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">email</i>
                  <input id="icon_email" type="text" class="validate" v-model="email_register">
                  <label for="icon_email">Email</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">android</i>
                  <input id="icon-password" type="password" class="validate" v-model="password_register">
                  <label for="icon-password">Password</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon-name" type="text" class="validate" v-model="name">
                  <label for="icon-name">Name</label>
                </div>
              </div>
            </form>
            <a class="waves-effect waves-green btn #03a9f4 light-blue col l10 offset-l1 s10 offset-s1" @click="signup">Join</a>
          </div>
        </div>

        <div class="signin col l6 s12">

          <h4 sty>Sign In</h4>

          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">email</i>
                  <input id="icon_email_reg" type="text" class="validate" v-model="email_login">
                  <label for="icon_email_reg">Email</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">android</i>
                  <input id="icon-password_reg" type="password" class="validate" v-model="password_login">
                  <label for="icon-password">Password</label>
                </div>
              </div>
            </form>
            <a class="waves-effect waves-green btn #03a9f4 light-blue col l10 offset-l1 s10 offset-s1" style="margin-top:84px;" @click="signin">Sign In</a>
          </div>

        </div>
      </div>
    </div>    

  </div>
</template>

<style scoped>

.logres-container {
  /* border: 1px solid black; */
  min-height: 100px;
}

.signup {
  /* border: 1px solid red; */
  min-height: 50px;
  padding: 20px 40px 20px 40px;
}

.signin {
  /* border: 1px solid blue; */
  min-height: 50px;
  padding: 20px 40px 20px 40px;
}


</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'register',
  data () {
    return {
      email_register: '',
      password_register: '',
      name: '',
      email_login: '',
      password_login: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    signup () {
      let obj = {
        email: this.email_register,
        password: this.password_register,
        name: this.name
      }
      this.$store.dispatch('signup', obj)
      this.email_register = ''
      this.password_register = ''
      this.name = ''
    },
    signin () {
      let obj = {
        email: this.email_login,
        password: this.password_login,
      }
      this.$store.dispatch('signin', obj)
      this.email_login = ''
      this.password_login = ''
    }

  }
}
</script>

