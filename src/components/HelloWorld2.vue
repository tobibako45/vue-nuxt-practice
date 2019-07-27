<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>

    <hr />
    <div>
      <input type="text" v-model="input" />
      <button v-on:click="doAction">click</button>
    </div>
  </div>
</template>

<script>
export default {
  // コンポーネント名を用意
  name: "HelloWorld2",
  // propsで、HelloWorldのタグを用意するとき、titleとmessageというタグを用意できるようになる。
  // export defaultの内容は、こんな具合にコンポーネントの設定情報オブジェクトとほぼ同じ。
  // ただ、「name」というもので、コンポーネント名を用意してある点が違う。

  // App.vueから、titleとmessageの値がpropsに渡され、{{title}}と{{message}}に表示している
  props: {
    title: String
    // message: String
  },
  data: function() {
    return {
      message: "名前は？",
      input: "no name"
    };
  },
  methods: {
    doAction: function() {
      this.message = "こんにちは" + this.input + "さん";
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
