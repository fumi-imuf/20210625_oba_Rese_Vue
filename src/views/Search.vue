<template>
<div class="search-page">
  <div class="header">
    <HeaderMenu />
    <div class="search container">
      <div class="search row">
        <div class="search category">
          <p class="area head" @click="area">All area</p>
          <ul class="list-box" v-show="areaList">
            <li><a href="#">東京</a></li>
            <li><a href="#">大阪</a></li>
            <li><a href="#">福岡</a></li>
          </ul>
        </div>
        <div class="search category">
          <p class="genre head" @click="genre">All genre</p>
          <ul class="list-box" v-show="genreList">
            <li><a href="#">寿司</a></li>
            <li><a href="#">焼肉</a></li>
            <li><a href="#">居酒屋</a></li>
            <li><a href="#">イタリアン</a></li>
            <li><a href="#">ラーメン</a></li>
          </ul>
        </div>
        <div class="search category">
          <input placeholder="店名" type="text" v-model="shopList">
        </div>
      </div>
    </div>
  </div>
  <div class="shop-list">
    <ShopList />
  </div>
</div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import ShopList from "../components/ShopList";

export default {
  data() {
    return {
      areaList: false,
      genreList: false,//最初は閉じてるためfalse
      //shopList: "",

      };
  },
  methods: {
    area() {
      this.areaList = !this.areaList;//trueとfalseの切り替え
    },
    genre() {
      this.genreList = !this.genreList;
    }
  },
  components: {
    HeaderMenu,
    ShopList
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
  font-size: 12px;
}

.row {
  display: flex;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(070, 070, 070, 0.5);
  margin-right: 30px;
  align-items: center;
  padding: 10px;
}

.head {
  margin-right: 30px;
}

</style>
