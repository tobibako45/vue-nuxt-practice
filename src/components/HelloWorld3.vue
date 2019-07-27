<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message2 }}</p>

    <hr />
    <div>
      <input type="text" v-model="input2" />
      <button v-on:click="doAction">click</button>
    </div>
  </div>
</template>

<script>
export default {
  // コンポーネント名を用意
  name: "HelloWorld3",
  props: {
    title: String
  },
  data: function() {
    return {
      message2: "名前は？",
      input2: "no name"
    };
  },
  methods: {
    doAction: function() {
      this.message2 = "こんにちは" + this.input2 + "さん";

      // 子コンポーネントに用意されている処理から、親コンポーネントに値を渡す場合、「$emit」というメソッドを使う。
      // これは、そのコンポーネントが配置されているタグにイベントを送るもの。
      // ここだと、親コンポーネント(App.vue)側で<HelloWrold3 />といったタグをおいて配置するが、これに対して指定の名前でイベントを送る
      // this.$emit(イベント, 引数の値 ....);
      this.$emit("result-event", this.input2);
    }
  }
};
</script>


























<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>
