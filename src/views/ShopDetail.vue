<template>
 <div class="shopdetail-page">
   <div class="left">
     <div class="left-header">
       <HeaderMenu />
     </div>
     <div class="shop-detail">
      <div class="shop-header">
        <a class="return" href="#">＜</a>
        <h2>仙人</h2>
      </div>
      <img class="shop-img" :src="image"/>
      <div class="shop-info">
        <div class="shop-tag">
          <p class="area">#{{area}}</p>
          <p class="genre">#{{genre}}</p>
        </div>
        <div class="shop-comment">
          <p class="detail">{{detail}}</p>
        </div>
      </div>
     </div>
   </div>
   <div class="rigtht">
     <div class="reservatiion">
       <h3>予約</h3>
       <div class="input-container">
         <input class="date">
         <input type="text">
         <input type="text">
       </div>
       <div class="reservation-detali">
         <Reservation />
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import Reservation from "../components/Reservation";

export default {
  data() {
    return {
      image: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
      area: "東京都",
      genre: "寿司",
      detail: "料理長厳選の食材から作る寿司を用いたコースをぜひお楽しみください。食材・味・価格、お客様の満足度を徹底的に追及したお店です。特別な日のお食事、ビジネス接待まで気軽に使用することができます。"
    }
  },
    components: {
      HeaderMenu,
      Reservation
    }
};
</script>
