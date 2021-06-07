<template>
  <div class="mypage">
    <div class="left">
      <HeaderMenu />
      <div class="reservation container">
        <h3>予約状況</h3>
          <div class="reservation ditail">
            <div class="reservation head">
            <img class="calender" src="../assets/img/reservation.png" />
            <p>予約１</p>
            
            <img class="delete" src="../assets/img/delete.png" />
            </div>
            <Reservation />
          </div>
      </div>
    </div>
    <div class="right">
      <h2>Username</h2><!--{{Username}}-->
      <h3>お気に入り店舗</h3>
      <div class="favorite-lists">
      <ShopList />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import ShopList from "../components/ShopList";
import Reservation from "../components/Reservation";

export default {
  components: {
    HeaderMenu,
    ShopList,
    Reservation
  }
};
</script>

<style scoped>
/* 全体 */
.mypage {
  display: flex;
  width: 100%
}

.left {
  width: 250px;
}
/*
.right {
  margin-left: 100px;
}
*/
/* 右側 */

.container {
   margin: 50px 30px 10px;
}

h3 {
  margin: 10px 0;
}

.ditail {
  width: 100%;
  background-color: #5c73b7;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
  color: #fff;
  padding: 5px;
}

.head {
  display: flex;
  align-items: center;
}

img {
  width: 1rem;
  height: 1rem;
}

.calender {
  padding: 10px;
}

p {
  color: #fff;
  font-size: 12px;
  font-weight: lighter;
  padding: 10px;
}

.delete {
  margin-left: auto; 
  padding: 10px;
}

/* 左側 */
.right {
  margin: 60px 10px;
}

h2 {
  font-size: 18px;
  margin: 20px 0;
}

h3 {
  font-size: 13px;
}
</style>