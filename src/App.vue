<template>
  <div id="app">
    <!-- Calcコンポーネント -->
    <!--
      v-bindで、messageという値にバインドしている。
      また、v-onでresult-eventイベントが発生したら(Calc.vueで実行してる)、appAction関数を呼び出すようにしています。
    -->
    <Calc v-bind:title="message" v-on:result-event="appAction" />
    <hr />
    <div>
      <!--
        また、計算の実行結果を表示するのに、tableタグを用意。
        v-htmlを使い、logの値を表示するようにしてる。
        このlogは、dataには用意されていない。
        computed(算出プロパティ)で用意している
      -->
      <table v-html="log"></table>
    </div>
  </div>
</template>

<script>
import Calc from "./components/Calc.vue";

export default {
  name: "app",
  components: {
    // Calcコンポーネントを組み込み
    Calc
  },
  data: function() {
    // dataには、messageとresultの２つの値を用意してあります。
    return {
      // messageは<Calc>タグのv-bind:titleに設定してある。
      message: "CALC",
      // resultはまだ実行した式と結果を配列にまとめて保管するもの。
      result: []
    };
  },
  computed: {
    log: function() {
      var table =
        '<tr><th class="head">Expression</th><th class="head">Value</th></tr>';
      // this.resultの配列から順位値を取り出して、その内容をテーブルのタグの形にまとめている。
      // resultは配列の配列になっている。
      // 実行した式とその結果の2つの値をまとめた配列を、更に配列にまとめて設定している。
      // forを使って配列の要素を取り出したら、その取り出した配列から更に値を取り出して利用することになる。
      // ここではthis.result[i][0]といいうように取り出している。
      for (var i in this.result) {
        table +=
          "<tr><td>" +
          this.result[i][0] +
          "</td><th>" +
          this.result[i][1] +
          "</th></tr>";
      }
      return table;
    }
  },
  // 初期化処理created
  // 初期化処理に関するもの。
  // コンポーネントのオブジェクトが作成された直後に実行されます。
  // このときは、もうpropsやdataによる値の設定は行われている
  // つまり、この　createdに処理を用意することで、propsなどの設定を上書きして変更できる。
  created: function() {
    // localStorageについて
    // localStrageのgetItemを呼び出している。
    // localStrageは、ローカルストレージというものを利用するためのオブジェクトです。

    // 変数 = localStrage.getItem(キー);

    // これで、指定した名前で保存しておいた値を取り出せる。
    // これはログ情報のテキストをlogという名前で保管しています。
    // これで前回保管したlogの値を取り出している。localStrageオブジェクトのgetItemメソッド
    var items = localStorage.getItem("log");
    // 取り出したテキストは、JSONオブジェクトの「parse」というメソッドでオブジェクトにしている。
    var logs = JSON.parse(items);
    // nullじゃなければ、this.resultに設定
    if (logs != null) {
      this.result = logs;
    }
  },
  methods: {
    // Calcコンポーネントでボタンをクリックして計算処理をしたときに呼び出されるイベント。
    // ①引数を配列にresultに追加する
    appAction: function(exp, res) {
      // unshift()で配列に追加
      this.result.unshift([exp, res]);
      // 配列resultの項目数が10を超えたら最後の項目をpop()で取り除く。this.resul.lengthで配列の数を数える
      if (this.result.length > 10) {
        this.result.pop();
      }
      // 配列resultをJSONテキストに変換する。
      // JSON.stringfy()で引数のオブジェクトえおJSON形式のテキストに変換する。これでthis.resultの配列がテキストに変換されます。
      var log = JSON.stringify(this.result);
      // ローカルストレージに保存する。
      // localStrageオブジェクトのsetItemメソッドで、作成されたテキストをlogというキーに保管する。
      // setItemは、値を指定の名前でローカルストレージに保管するメソッド。
      localStorage.setItem("log", log);

      // これで更新されたログ情報がローカルストレージに保管された。
      // 次回アクセスした際に取り出され、ログとして表示される
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
tr td {
  padding: 5px;
  border: 1px solid gray;
}
tr th {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color: white;
}
</style>
