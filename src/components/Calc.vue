<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <div>
      <div>
        <!-- v-model="fomula"として、foumlaという変数に値が同期される。初期値で0が表示される -->
        <textarea v-model="fomula" cols="40" rows="5"></textarea>
      </div>
      <div>
        <!-- ボタンでは、v-on:click="doAction"として、クリックしたらdoActionが実行される。v-onはイベントリスナー -->
        <button v-on:click="doAction">CALC</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    // titleは後で操作することまずないので、属性としてpropsで設定してある
    title: String
  },
  // messageとfoumlaは常に変更されるものであるためdataに用意してある
  data: function() {
    return {
      message: "式を入力してください！ Enter expression",
      fomula: "0"
    };
  },
  methods: {
    // ボタンでクリックした際に実行されるdoActionが用意されている。
    // テキストエリアで記述された値(v-modelでfomulaに値が保管される)をもとに、
    // 入力された式を実行し結果を取り出しています。
    doAction: function() {
      // fomulaのテキストを、trim()で前後の空白を取り除いて、split()で、改行コードで分割し配列にする
      var arr = this.fomula.trim().split("¥n");
      // pop()で配列の最後の項目を変数lastに取り出しておく(配列は後から消える)
      var last = arr.pop();
      var fn = "";

      // 配列の各要素について繰り返し処理する
      for (var n in arr) {
        // 繰り返しでは、取り出した項目のテキストが空でないなら、「var テキスト;」というテキストを作って変数fnに追加する
        if (arr[n].trim() != "") {
          fn += "var " + arr[n] + ";";
        }
      }
      // 繰り返しが終わったら「return 最後の項目;」とテキストを追加して完成。
      fn += "return " + last + ";";

      // 完成したテキストの前後に「function(){」「} f();」と付け足す。
      // これで、取り出した処理のテキストをfという関数にまとめて実行するスクリプトができあがる
      var exp = "function f(){" + fn + "} f();";
      // eval()を遣ってスクリプトのテキストを実行する。eval() は文字列として表された JavaScript コードを式として評価する関数です。
      var ans = eval(exp);
      // 実行結果をメっセージにまとめておく
      this.message = "答え answer: " + ans;
      // join(';')で、配列にセミコロン(;)記号でつなげて１つのテキストにする。trim()で前後の空白を削除
      var re = arr.join(";").trim();
      // 配列が空でなければセミコロンを付け、最後の項目に付け加える
      if (re != "") {
        re += ";";
      }
      re += last;
      // 作成したテキストを引数に指定し、$emitでresult-eventイベントを呼び出す
      this.$emit("result-event", re, ans);
    }
  }
};
</script>

