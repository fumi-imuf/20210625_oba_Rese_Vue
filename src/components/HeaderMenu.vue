<template>
    <div class="header">
        <div class="hamburger" @click="hamburger()" :class="{'active':isClass}">
            <!-- :class=v-bind 'active'でcss指定 -->
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="menu-content" :class="{'open':isClass}">
            <!-- :class=v-bind 'open'でcss指定 -->

            <ul class="menu-content-ditail">
                <li><a href="#">マイページ</a></li>
                <li><a href="#">飲食店一覧</a></li>
                <li><a href="#">会員登録</a></li>
                <li><a href="#">ログイン</a></li>
                <li><a href="#">ログアウト</a></li>
            </ul>
        </nav>
        <div class="header-logo">
            <h1>Rese</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isClass: false
        };
    },
    methods: {
        hamburger() {
            this.isClass = !this.isClass;//trueとfalseを切り替える
        }
    }
};
</script>

<style scoped>
.header {
    display: flex;
    height: 70px;
    background-color: #fff;
    align-items: center;
}

.header-logo {
    margin-left: 90px;
}

h1 {
    color: #5c73b7;
    font-weight: bold;
    font-size: 22px;
}

.hamburger {
    background-color: #5c73b7;
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    transition: 0.4s;
    margin: 30px;
    z-index: 100;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 0 rgba(070, 070, 070, 0.5);
}

.hamburger span {
    position: absolute;
    left: 7px;
    display: block;
    height: 1px;
    background-color: #fff;
    transition:0.4s;
}

.hamburger span:nth-of-type(1) {
    top: 10px;
    width: 15px;
}

.hamburger span:nth-of-type(2) {
    top: 20px;
    width: 25px;
}

.hamburger span:nth-of-type(3) {
    top: 30px;
    width: 10px;
}

/* active */
.hamburger.active span:nth-of-type(1){
    width: 30px;
    top: 20px;
    transform: rotate(45deg);
}

.hamburger.active span:nth-of-type(2){
    opacity: 0;
}

.hamburger.active span:nth-of-type(3){
    width: 30px;
    top: 20px;
    transform: rotate(-45deg);
}

.menu-content {
    display: block;
    width: calc(100% - 80px);
    height: 100%;
    text-align: center;
    transition: 0.5s;
    position: fixed;
    top: 0;
    left: calc(-100% - 80px);
    background: #fff;
    color: #333;
    box-shadow: 80px 0 rgba(38, 98, 213, 0.3);
    z-index: 999;
}

.menu-content li a {
    color: #333;
    margin: 15px;
    padding: 5px;
    border-bottom: 0.5px solid #2662d5;
    text-decoration: none;
    display: block;
}

.menu-content li {
    width: 100%;
    text-align: left;
}

.menu-content.open {
    left: 0;
}

 .menu-content {
    margin: 70px 20px;
    font-size: 1.5rem;
    color: #333;
    text-align: left;
    /*font-weight: bold;*/
  }
</style>
