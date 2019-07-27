<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // コンポーネント名を用意
  name: "Hello",
  // propsで、HelloWorldのタグを用意するとき、titleとmessageというタグを用意できるようになる。
  // export defaultの内容は、こんな具合にコンポーネントの設定情報オブジェクトとほぼ同じ。
  // ただ、「name」というもので、コンポーネント名を用意してある点が違う。

  // App.vueから、titleとmessageの値がpropsに渡され、{{title}}と{{message}}に表示している
  props: {
    title: String,
    message: String
  }
};
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
