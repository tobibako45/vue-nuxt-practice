<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr />
    <button v-on:click="doAction">{{btn}}</button>

    <transition
      name="transit"
      @before-enter="startAction"
      @before-leave="startAction"
      @after-enter="endAction"
      @after-leave="endAction"
    >
      <!-- v-ifでflgを監視して、表示非表示 -->
      <p v-if="flg" class="trans">トランジション！！</p>
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
      message: "トランジションさんぷる",
      flg: true,
      btn: "Show/Hide"
    };
  },
  methods: {
    doAction: function() {
      this.flg = !this.flg;
    },
    startAction: function() {
      if (this.flg) {
        this.message = "現れる。。。";
      } else {
        this.message = "消えます！！";
      }
    },
    endAction: function() {
      if (this.flg) {
        this.btn = "Hide";
        this.message = "現れました！！！";
      } else {
        this.btn = "Show";
        this.message = "きえました。。。";
      }
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trans {
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}

/* アクティブ時の設定 */
.transit-enter-active {
  transition: opacity 0.5s;
}

.transit-leave-active {
  transition: opacity 5s;
}

/* Enterの設定 */
.transit-enter {
  opacity: 0;
}

.transit-enter-to {
  opacity: 1;
}

/* Leaveの設定 */
.transit-leave {
  opacity: 1;
}

.transit-leave-to {
  opacity: 0;
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
