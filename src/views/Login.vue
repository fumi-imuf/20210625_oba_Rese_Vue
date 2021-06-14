<template>
<div class="main">
  <HeaderMenu />
    <div class="login-container">
      <div class="login-head">
        <h2>Login</h2>
      </div>
      <div class="input-container">
        <div class="email">
          <img src="../assets/img/Email.png"/>
          <input placeholder="Email" type="email" v-model="email" />
        </div>
        <br>
        <div class="password">
          <img src="../assets/img/password.png"/>
          <input placeholder="Password" type="password" v-model="password">
       </div>
      </div>
      <div class="login-button">
        <button @click="login">ログイン</button><!--@click="login"を"auth"にしなきゃ動かないかも-->
      </div>
    </div>
</div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    HeaderMenu
  },
  methods: {
    ligin() {
      this.$store.commit("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
/* やる事
1.ボタンhover,色反転
*/
.main {
  height: 100%;
}

.login-container {
  height: 200px;
  width: 300px;
  margin: 20% auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
}

.login-head {
  height: 25%;
  width: 100%;
  background-color: #5c73b7;
  border-radius: 5px 5px 0 0;
  display:table;

}

h2 {
  font-size: 1rem;
  color: #fff;
  display:table-cell;
  vertical-align:middle;
  padding-left: 10%;
}

.input-container {
  padding: 20px 30px;
}

input {
  width: 80%;
  border-bottom: 1px solid #ccc;
  border-right:none;
  border-left:none;
  border-top:none;
  border-radius:0px;
} 

img {
  width: 1rem;
  height: 1rem; 
  margin-right: 5px;
}

input, img {
  vertical-align: bottom;
}

.login-button {
  width: 100px;
  height: 25px;
  text-align: center;
  margin: 0 20px 20px auto;
}

button {
  color: #fff;
  background-color: #5c73b7;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
</style>