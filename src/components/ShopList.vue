<template>
  <div class="shop-list">
    <div class="list" v-for="(value, index) in shops" :key="index">
        <img class="shop-img" :src="value.image" /><!--imgタグはv-vindを使う{{}}使わない-->
        <div class="content">
          <p class="shop-name">{{value.shop_name}}</p>
          <p class="area">#{{value.area}}</p>
          <p class="ganrue">#{{value.ganre}}</p>
          <div class="bottom-container">
            <button class="detail" 
            @click="
            $router.push({
              path: '/shopdetail/' + value.item.id,
              params: { id: value.item.id }//shop_idを渡す
              })">詳しく見る</button>
            <img class="favorite" src="../assets/img/favorite.png" @click="fav(index)"/><!--{{favorite}}assets/img/favoriteをバックエンドのDBに入れる-->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
//全店表示したい
//apiから出すデータ・・・img, shop_name, area, genre(shop_idで繋がっている)  
//全店表示するには全てのshop_idを出す
import axios from "axios"
export default {
  props: ["id"],
  data() {
    return {
     shops:[]
    };  
  },
    methods: {
    fav(index) {
      const result = this.shops[index].like.some((value) => {
        return value.user_id == this.$store.state.user.id;
      });
      if (result) {
        this.shops[index].like.forEach((element) => {
          if (element.user_id == this.$store.state.user.id) {
            axios({
              method: "delete",
              url: "http://127.0.0.1:8000/api/like",
              data: {
                shop_id: this.shops[index].item.id,
                user_id: this.$store.state.user.id,
              },
            }).then((response) => {
              console.log(response);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      } else {
        axios
          .post("http://127.0.0.1:8000/api/like", {
            shop_id: this.shops[index].item.id,
            user_id: this.$store.state.user.id,
          })
          .then((response) => {
            console.log(response);
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
    del(index) {
      axios
        .delete(
          "http://127.0.0.1:8000/api/shops/" +
            this.shops[index].item.id
        )
        .then((response) => {
          console.log(response);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
    async getShops() {
      let data = [];
      const shops = await axios.get(
        "http://127.0.0.1:8000/api/shops"
      );
      for (let i = 0; i < shops.data.data.length; i++) {
        await axios
          .get(
            "http://127.0.0.1:8000/api/shops/" +
            shops.data.data[i].id
          )
          //.then((response) => {
            //if (this.$route.name == "profile") {
              //if (response.data.item.user_id == this.$store.state.user.id) {
                //data.push(response.data);
              //}
            //} else if (this.$route.name == "detail") {
              //if (response.data.item.id == this.id) {
                //data.push(response.data);
              //}
            //} else {
              //data.push(response.data);
            //}
          //});
      }
      this.shops = data;
      console.log(this.shops);
    },
  },
  created() {
    this.getShops();
  },
};

</script>

<style scoped>
.shop-list {
  width: 100%;
  display: flex;
}

.list {
  width: 250px;
  margin: 5px;
    box-shadow: 2px 2px 2px 1px rgba(128, 128, 128, 0.6);
  border-radius: 5px;
  margin-right: 15px;
}

.shop-img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

.content {
  margin: 15px;
}

.shop-name {
  margin: 5px 0;
  font-weight: bold;
}

.area, .ganrue {
  display: inline;
  font-size: 10px;
  font-weight: lighter;
  margin-right: 5px;
  color: #666;
}

.bottom-container {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.detail {
  width: 90px;
  height: 25px;
  color: #fff;
  background-color: #5c73b7;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}

.favorite {
  width: 20px;
  padding: 5px;
}


</style>