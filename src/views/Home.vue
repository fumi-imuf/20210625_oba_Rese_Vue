<template>
  <div class="mypage">
    <div class="left">
      <HeaderMenu />
      <div class="reservation container">
        <h3>予約状況</h3>
        <div v-for="(value, index) in reservations" :key="index">
          <div class="reservation ditail">
            <div class="reservation head">
            <img class="calender" src="../assets/img/reservation.png" />
            <p>予約{{index + 1}}</p>
            <img class="delete" src="../assets/img/delete.png" @click="del(index)"/><!--alt v-if="path && profile-->
            </div>
            <div class="reservation-container">
              <table>
                <tr>
                 <th>Shop</th>
                 <td>{{value.shop_name}}</td><!--valueいるか-->
                </tr>
                <tr>
                 <th>Date</th>
                 <td>{{value.reservation_date}}</td>
               </tr>
               <tr>
                 <th>Time</th>
                 <td>{{value.reservation_time}}</td>
               </tr>
               <tr>
                 <th>Number</th>
                 <td>{{value.reservation_number}}</td>
               </tr>
              </table>
            </div>
          </div>
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
import axios from 'axios';
import HeaderMenu from "../components/HeaderMenu";
import ShopList from "../components/ShopList";
// https://fierce-garden-10453.herokuapp.com/
// http://127.0.0.1:8000
export default {
  data() {
    return {
      reservations: []
    }
  },
  components: {
    HeaderMenu,
    ShopList,
  },
  methods: {
    del(index) {
      axios
      .delete( 
        "http://127.0.0.1:8000/api/reservations/" + this.reservations[index].item.id
      )
      .then((response) => { //処理後のリロード
      console.log(response);
       this.$router.go({
        path: this.$router.currentRoute.path,
        force: true,
       });
      });
    },
    async getReservations() {
      let data = [];
      const reservations = await axios.get(
        "http://127.0.0.1:8000/api/reservations"
      );
      for (let i = 0; i < reservations.data.data.length; i++) {
        await axios
        .get("http://127.0.0.1:8000/api/reservations" + reservations.data.data[i].id)
        this.reservations = data;
        console.log(this.reservations);
      }
    }
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
  width: 50%;
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

.reservation-container {
  width: 80%;
  background-color: #5c73b7;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
}

th {
  font-weight: lighter;
  text-align: left;
  padding: 10px;
  font-size: 0.5rem;
}

td {
  text-align: left;
  font-size: 0.5rem;
  padding-left: 5px;
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