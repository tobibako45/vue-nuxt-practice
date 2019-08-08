<script>
// export default {
//   name: "HelloWorld",
//   render: function(h) {
//     return h("div", {}, [h("h1", "Render"), h("p", "this is render sample.")]);
//   }
// };

export default {
  name: "HelloWorld",
  data: function() {
    return {
      title: "JSX",
      message: "これは、dataに用意したメッサージ"
    };
  },
  render: function(h) {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
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

.inner {
  color: red;
  font-size: 14pt;
}
</style>
