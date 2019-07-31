<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <pre v-on:click="clear">{{ message }}</pre>

    <hr />

    <!-- <div id="out" class="out" v-on:click="a_event"> A -->
    <!-- <div id="mid" class="mid" v-on:click="b_event"> -->
    <!-- <div id="mid" class="mid" v-on:click.stop="b_event"> -->
    <!-- <div id="mid" class="mid" v-on:click.self="b_event">
        B
        <div id="in" class="in" v-on:click="c_event">C</div>
      </div>
    </div>-->

    <!-- <div>
      <input type="text" v-on:keydown="type" />
    </div>-->

    <!-- <div>
      <input
        type="text"
        v-on:keypress="type"
        v-on:keydown.delete="clear"
        v-on:keydown.space="space"
        @keydown.enter="enter"
      />
    </div>-->

    <!-- <div
      class="area"
      @click="click"
      @click.exact="exact"
      @click.shift="shift"
      @click.ctrl="ctrl"
      @click.alt="alt"
    >click here!</div>-->

    <!-- preventはsubmit(送信イベント)のとき、ページのリロードを停止します。 -->
    <div
      class="area"
      @click.left.prevent="left"
      @click.middle.prevent="middle"
      @click.right.prevent="right"
    >click here!</div>
  </div>
</template>

<script>
export default {
  // コンポーネント名を用意
  name: "HelloWorld",
  props: {
    title: String
  },
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    // a_event: function(event) {
    //   this.message +=
    //     "A-Event [" + event.target.id + " → " + event.currentTarget.id + "]\n";
    // },
    // b_event: function(event) {
    //   this.message +=
    //     "B-Event [" + event.target.id + " → " + event.currentTarget.id + "]\n";
    // },
    // c_event: function(event) {
    //   this.message +=
    //     "C-Event [" + event.target.id + " → " + event.currentTarget.id + "]\n";
    // },
    // type: function(event) {
    //   this.message += event.key + " ";
    //   if (event.key == "Escape") {
    //     this.message = "";
    //   }
    //   event.target.value = "";
    // },
    // clear: function() {
    //   this.message = "";
    // }
    // type: function() {
    //   if (event.key == "Event") {
    //     return;
    //   }
    //   this.message += event.key + " ";
    //   event.target.value = "";
    // },
    // clear: function() {
    //   this.message = "";
    // },
    // space: function() {
    //   this.message += "_ ";
    // },
    // enter: function(event) {
    //   var res = this.message.split(" ").join();
    //   this.message = res.split(" ").join(" ");
    //   event.target.value = "";
    // }

    // click: function() {
    //   this.message = "click";
    // },
    // exact: function() {
    //   this.message = "no any key";
    // },
    // shift: function() {
    //   this.message = "[shift]";
    // },
    // ctrl: function() {
    //   this.message = "ctrl";
    // },
    // alt: function() {
    //   this.message = "alt";
    // },

    left: function() {
      this.message = "left";
    },
    right: function() {
      this.message = "right";
    },
    middle: function() {
      this.mesage = "middle";
    },
    clear: function() {
      this.message = "";
    }
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
</style>
