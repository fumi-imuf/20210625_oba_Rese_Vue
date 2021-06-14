<template>
<div class="main">
  <HeaderMenu />
    <div class="message-container">
      <div class="message">
        <p>ご予約ありがとうございます</p>
      </div>
      <div class="return" @click="$router.push('/home')">
        <p>戻る</p>
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

.message-container {
  height: 50%;
  width: 50%;
  padding: 50px;
  margin: 20% auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
  position: relative;
}

.message {
  font-size: 1rem;
  text-align: center;
  color: #000;
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
  color: #fff;
  cursor: pointer;
}

</style>



