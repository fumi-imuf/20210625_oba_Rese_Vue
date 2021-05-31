<template>
<div class="main">
  <HeaderMenu />
    <div class="login-container">
      <div class="login-head">
        <h2>Login</h2>
      </div>
      <div class="input">
        <!-- <img></img> -->
        <input placeholder="Email" type="email" />
        <!-- <img></img> -->
        <input placeholder="Password" type="password">
      </div>
      <div class="login-button">
        <a href="#">ログイン</a>
      </div>
    </div>
</div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
export default {
  components: {
    HeaderMenu
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
  height: 100px;
  width: 50%;
  margin: 20% auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
}

.login-head {
  height: 25%;
  background-color: #5c73b7;
  border-radius: 5px 5px 0 0;
}

.h2 {
  
  font-size: 1rem;
  color: #fff;
  margin: 20px;
}

.return {
  width: 50px;
  height: 25px;
  padding-top: 10px;
  background-color: #5c73b7;
  text-align: center;
  border-radius: 5px;
  margin: 20px auto;
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
</style>