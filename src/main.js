import Vue from 'vue'
import App from './App.vue'

// Vue起動時に表示されるチップス情報をON/OFFするためのもの。falseを指定して表示されないようにしている。
Vue.config.productionTip = false

// vueオブジェクトを作成
new Vue({
  // renderで、引数で渡されたAppに内容をレンダリングして出力するようにしている。
  render: h => h(App),
}).$mount('#app')
// 手動でvueをマウントする(実際にHTMLに適用して動作するようにすること)ためのもの。
// elプロパティがない場合、$mountで手動でやる。
