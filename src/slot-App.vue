<template>
  <div id="app">
    <!-- <HelloWorld v-bind:title="message" v-bind:num="num" /> -->

    <!-- <HelloWorld>
      <p class="inner">これをslotで表示します</p>
    </HelloWorld>-->

    <!-- <HelloWorld title="slot">
      <p>begin!</p>
      <p slot="a">はじめー</p>
      <p>middle!</p>
      <p slot="b">まんなかー</p>
      <p>end!</p>
      <p slot="c">さいごー</p>
    </HelloWorld>-->

    <HelloWorld title="slot">
      <li v-for="obj in slotobjs" v-bind:key="obj.name">{{obj.name}} （{{obj.mail}}）</li>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      slotobjs: [
        { name: "taro", mail: "taro@test.com" },
        { name: "hanako", mail: "hanako@test.com" },
        { name: "ore", mail: "ore@test.com" }
      ]
    };
  }
};
</script>
