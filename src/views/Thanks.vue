<template>
<div class="main">
  <HeaderMenu />
    <div class="message-container">
      <div class="message">
        <p>会員登録ありがとうございます</p>
      </div>
      <div class="return">
        <a href="#">ログインする</a>
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
/* やる事 */
/* 
1.ログインボタン色hover,
*/
.main {
  height: 100%;
}

.message-container {
  height: 50%;
  width: 50%;
  padding: 50px;
  margin: 20% auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
}

p {
  font-size: 1rem;
  text-align: center;
  color: #000;
  margin: 20px;
}

.return {
  width: 110px;
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


