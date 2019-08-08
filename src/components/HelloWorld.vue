<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr />
    <button v-on:click="doAction">Show/Hide</button>
    <br />
    <br />
    <transition name="transit">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  data: function() {
    return {
      message: "Transition Sample!",
      flg: true,
      btn: "Hide"
    };
  },
  methods: {
    doAction: function() {
      this.flg = !this.flg;
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trans {
  width: 150px;
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}

.transit-enter-active {
  transition: 1s;
}
.transit-leave-active {
  transition: 1s;
}

/* Enterの設定 */
.transit-enter,
.transit-leave-to {
  /* 並行移動 */
  /* transform: translateX(200px) translateY(-200px); */

  /* 拡大縮小 */
  /* transform: scale(5); */

  /* 回転 */
  transform: rotateZ(360deg);

  opacity: 0.1;
}

.transit-enter-to {
  opacity: 1;
}

/* Leaveの設定 */
.transit-leave {
  opacity: 1;
}

div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}

h1 {
  font-size: 72pt;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}

p {
  margin: 0px;
  color: #666;
  font-size: 16pt;
}

pre {
  font-size: 14pt;
  line-height: 1.25;
}

div.out {
  padding: 5px 0;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0;
  background-color: #ddd;
  width: 200px;
  height: 150px;
}
div.in {
  padding: 5px 0;
  background-color: #ccc;
  width: 100;
  height: 100px;
}

.inner {
  color: red;
  font-size: 14pt;
}
</style>
