<template>
 <div class="shopdetail-page">
   <div class="left">
     <div class="left-header">
       <HeaderMenu />
     </div>
     <div class="shop-detail">
      <div class="shop-header">
        <div class="return-box" @click="$router.push('/search')">
          <p class="return">＜</p>
        </div><!--search.vueに戻る-->
        <h2>{{shop_name}}</h2><!--shops-tableからshop_name-->
      </div>
      <img class="shop-img" :src="image"/>
      <div class="shop-info">
        <div class="shop-tag">
          <p class="area">#{{area}}</p><!--areas-table-->
          <p class="genre">#{{genre}}</p><!--genre-table-->
        </div>
        <div class="shop-comment">
          <p class="detail">{{detail}}</p><!--shops-tableから-->
        </div>
      </div>
      <div class="like">
        <button class="like-button" v-if="like" @click="addFav">お気に入りに登録する
          <img class="like" src="../assets/img/favorite.png" />
        </button>
        <button class="dislike-button" v-else @click="delFav">お気に入りからはずす<img class="dislike" src="../assets/img/dislike.png"></button>
      </div>
     </div>
   </div>
   <div class="right">
     <div class="reservation">
       <h3>予約</h3>
       <div class="input-container">
         <input class="date" v-model="date" type="date">
         <br>
         <select v-model="time">
           <option disabled value="">来店時間</option>
           <option>17:00</option>
           <option>17:30</option>
           <option>18:00</option>
           <option>18:30</option>
           <option>19:00</option>
           <option>19:30</option>
           <option>20:00</option>
         </select>
         <br>
         <select v-model="number">
           <option disaled value="">人数</option>
           <option>1  人</option>
           <option>2  人</option>
           <option>3  人</option>
           <option>4  人</option>
           <option>5  人以上</option><!--5人以上の場合の対応要相談-->
         </select>
       </div>
       <div class="reservation-contents">
         <h3>予約内容</h3>
         <table>
           <tr>
             <th>Shop</th>
             <td>{{shops.shop_name}}</td><!--{{shop_name}}-->
           </tr>
           <tr>
             <th>Date</th>
             <td>{{date}}</td><!--{{date}}-->
           </tr>
           <tr>
             <th>Time</th>
             <td>{{time}}</td><!--{{time}}-->
           </tr>
           <tr>
             <th>Number</th>
             <td>{{number}}</td>
           </tr>
         </table>
        </div>
        <button>予約する</button>
     </div>
   </div>
 </div>
 
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import axios from "axios"
// 実装すること
// 店名、images、ジャンル、地域、店舗詳細表示
// お気に入り登録
// 予約登録
export default {
  data() {
    return {
      shops: [],
      timeList: false,
      numberList: false,
      time: "",
      number: ""
    }
  },
  methods: {
    addFav() { //favoriteにindex番号を与える
    axios
     .post("https:fierce-garden-10453.herokuapp.com/api/like", {
       shop_id: this.shops.shop_name.item.id,
       user_id: this.$store.state.user.id
     })
     .then((response)=> {
       console.log(response);
       this.$router.go({
         path: this.$router.ShopDetail,
         force: true
       });
     });
    },
    delFav() {
      axios
      .delete("https:fierce-garden-10453.herokuapp.com/api/like" + this.shops.item.id)
      .then((response) => {
        console.log(response);
        this.$router.go({
          path: this.$router.ShopDetail,
          force: true
        });
      });
    }
  },
  //async getShops() {
    //受け取りたいデータ{ 
    //shops:["shop_name", "datail"],
    //areas: area,
    //genres: genre
  //},
  // let data = [];
  // const shops = await axios.get("https:fierce-garden-10453.herokuapp.com/api/shop" + data.id)
  // .then((response) => {

   //})

  //},
    components: {
      HeaderMenu
    },

};
</script>

<style scoped>
/* --- */
/* 全体 */
/* --- */
.shopdetail-page {
  width: 100%;
  display: flex;
}
/* ---- */
/* left */
/* ---- */
.left {
  width: 50%;
}
.shop-header {
  display: flex;
  margin: 40px 30px 25px;;
  align-items: center;
}

.return-box {
  height: 25px;
  width: 25px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  margin-left: 15px;
  font-size: 25px;
} 

.shop-img {
  width: 90%;
  margin: 0 30px;
}

.shop-info {
  margin: 25px 30px;
}

.shop-tag {
  display: flex;
  font-size: 0.5rem;
}

.area {
  margin-right: 10px;
}

.shop-comment {
  margin-top: 20px;
  width: 100%;
  font-size: 0.8rem;
}

.detail {
  line-height: 1.6;
}

.like {
  margin-right: 30px;
}

.like-button {
  width: 200px;
  margin: 0 0 0 auto;
  color: #fff;
  background-color: #5c73b7;
  justify-content: center;
  align-items: center;
  display: flex;
}

img .like {
  width: 15px;
  margin: 0 1px 0 5px;
}
/* ----- */
/* right */
/* ----- */
.right {
  margin: 30px;
  width: 50%;
  background-color: #5c73b7;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0 rgba(128, 128, 128, 0.6);
  color: #fff;
}

.reservation {
  margin: 15px;
}

h3 {
  margin: 10px 0;
}

.date {
  border-radius: 4px;
  border: none;
  margin: 5px 0;
}

select {
  margin: 5px 0;
  border-radius: 4px;
  width: 80%;
}

.reservation-contents {
  background-color: #6f81b8;
  margin-top: 15px;
  padding: 10PX 20px;
  border-radius: 4px;
}

th {
  font-weight: lighter;
  text-align: left;
  padding: 10px 0;
  font-size: 1rem;
}

td {
  text-align: left;
  font-size: 1rem;
  padding-left: 15px;
}

button {
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
}

</style>