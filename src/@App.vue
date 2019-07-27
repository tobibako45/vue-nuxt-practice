// 実質的に画面を表示するファイル

// templateタグについて
// コンポーネントのテンプレートの内容
// HelloWorldタグが、HelloWorldというコンポーネントを表示するタグ
// ここでは、更にその中からHelloWorld.vueというファイルを読み込んで利用するようになっている
<template>
  <div id="app">
    <Ore title="Hello" message="これはサンプル" />
    <hr />
    <HelloWorld2 title="oreore" message="これはサンプル2" />
    <hr />
    <!-- これで、titleの値にAppコンポーネントのdataに用意されているmessageがバインドされる。 -->
    <HelloWorld v-bind:title="message" />
    <button v-on:click="doAction">Change title</button>
    <hr />

    <!-- v-onでresult-eventイベントappActionメソッドをバインドしている。
    これで、「$emitでresult-eventを発火　→ result^eventが発生 → appActionメソッドを呼び出す」という流れができあがった。
    あとは、AppコンポーネントのappAction関数で必要な処理を行うだけ。
    -->
    <hello-world3 v-bind:title="message2" v-on:result-event="appAction" />
    <p>{{result}}</p>
    <hr />
  </div>
</template>

// scriputタグには、コンポーネントの処理が書かれている
<script>
// ①HelloWorld.vueというファイルを読み込み、Ore(任意)という名前を付ける
import Ore from "./components/Hello.vue";
//v-onで値を変える
import HelloWorld2 from "./components/HelloWorld2.vue";
// 親から子へと値を渡す
import HelloWorld from "./components/HelloWorld.vue";
// 子から親へと値を渡す
import HelloWorld3 from "./components/HelloWorld3.vue";

// export default{}は、スクリプトファイルをインポートした時、デフォルトで用意されるものを指定します。
// ここでは、このApp.vueをインポートすると、export defaultの{}の部分に記述された内容がコンポーネントとして用意されるようにしてあります。
export default {
  // ② ①をコンポーネントとして追加して、appコンポーネントを用意している。
  name: "app",
  components: {
    HelloWorld,
    Ore,
    HelloWorld2,
    HelloWorld3
  },
  data: function() {
    return {
      message: "12Hellooooooo",
      message2: "22222",
      result: "no event."
    };
  },
  methods: {
    // これで,this.messageが変更され、バインドされた<HelloWorld>のtitle属性が変更され、
    // HelloWorldのタイトルが変更された。
    // これで、親から子へと値が渡せている
    doAction: function() {
      var input = prompt("new ttile:");
      this.message = input;
    },

    //
    appAction: function(message) {
      this.result = '(*** you send:"' + message + '". ***)';
    }
  }
};
</script>








<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
