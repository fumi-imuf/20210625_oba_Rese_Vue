<template>
<div class="main">
  <HeaderMenu />
    <div class="register-container">
      <div class="register-head">
        <h2>会員登録</h2>
      </div>
      <div class="input-container">
        <div class="username">
          <img src="../assets/img/user.png" />
          <input placeholder="Username" type="text" v-model="name" />
        </div>
        <br>
        <div class="email">
          <img src="../assets/img/Email.png"/>
          <input placeholder="Email" type="email" v-model="email"/>
        </div>
        <br>
        <div class="password">
          <img src="../assets/img/password.png"/>
          <input placeholder="Password" type="password" v-model="password">
       </div>
      </div>
      <div class="signup">
        <button @click="register">登録</button><!--@click="login"を"auth"にしなきゃ動かないかも-->
      </div>
    </div>
</div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  components: {
    HeaderMenu
  },
  methods: {
    register() {
      axios.post("http://127.0.0.1:8000/api/register",{
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response);
        this.$router.replace("/") //ログインページへ遷移
      })
      .catch(error => {
        alert(error);
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

.register-container {
  height: 250px;
  width: 300px;
  margin: 20% auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
}

.register-head {
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
  padding: 25px 30px;
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

.signup {

  text-align: right;
  margin: 0 20px 20px auto;
}

button {
  width: 50px;
  height: 25px;
  color: #fff;
  background-color: #5c73b7;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
</style>