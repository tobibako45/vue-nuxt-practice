<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <!-- <hr />
    <p>Number: {{ num }}</p>
    <hr />
    <p>val: {{ val }}</p>
    <div>
      * 2:
      <input type="number" v-model="a" />
    </div>
    <div>
      ^ 2:
      <input type="number" v-model="b" />
    </div>-->

    <div>
      <!-- v-modelでvalという値にバインド -->
      <input type="number" v-model="val" />
    </div>
    <div style="height: 10px;"></div>

    <table>
      <tr>
        <th>add:</th>
        <td>{{ add }}</td>
      </tr>
      <tr>
        <th>sub:</th>
        <td>{{ sub }}</td>
      </tr>
      <tr>
        <th>multiple:</th>
        <td>{{ mult }}</td>
      </tr>
      <tr>
        <th>divide:</th>
        <td>{{ div }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // コンポーネント名を用意
  name: "HelloWorld",
  // propsで、HelloWorldのタグを用意するとき、titleとmessageというタグを用意できるようになる。
  // export defaultの内容は、こんな具合にコンポーネントの設定情報オブジェクトとほぼ同じ。
  // ただ、「name」というもので、コンポーネント名を用意してある点が違う。

  // App.vueから、titleとmessageの値がpropsに渡され、{{title}}と{{message}}に表示している
  props: {
    title: String
    // message: String,
    // num: Number
    // num: {
    //   type: Number,
    //   default: 100,
    //   validator: function(value) {
    //     return value == parseInt(value) && value >= 0 && value <= 100;
    //   }
    // },
  },
  data: function() {
    return {
      // message: "バリデーションチェック",
      message: "値の監視",
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0
    };
  },
  watch: {
    val: function(value) {
      this.val = value;
      var val = parseInt(value);
      this.add = Math.floor(val + 2);
      this.sub = Math.floor(val - 2);
      this.mult = Math.floor(val * 2);
      this.div = Math.floor(val / 2);
    }
  },
  // computed: {
  //   a: {
  //     get: function() {
  //       return this.val * 2;
  //     },
  //     set: function(value) {
  //       this.val = math.floor(value / 2);
  //     }
  //   },
  //   b: {
  //     get: function() {
  //       return this.val * this.val;
  //     },
  //     set: function(value) {
  //       this.val = Math.floor(Math.sprt(value));
  //     }
  //   }
  // },
  created: function() {
    // ここでvalを設定、上書き
    this.val = 5;
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
</style>
