<template>
  <div class="shop-list">
    <div class="list" v-for="(value, index) in shops" :key="index">
        <img class="shop-img" :src="value.image" /><!--imgタグはv-vindを使う{{}}使わない-->
        <div class="content">
          <p class="shop-name">{{value.shop_name}}</p>
          <p class="area">#{{value.area}}</p>
          <p class="ganrue">#{{value.ganrue}}</p>
          <div class="bottom-container">
            <button class="detail">詳しく見る</button><!--@button="detail"-->
            <img class="favorite" src="../assets/img/favorite.png" /><!--{{favorite}}assets/img/favoriteをバックエンドのDBに入れる-->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [{image: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg", shop_name: "仙人", area: "東京都", ganrue: "寿司"},
      {image: "https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/yakiniku.jpg", shop_name: "牛助", area: "大阪府", ganrue: "焼肉"}]
    };
  }
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