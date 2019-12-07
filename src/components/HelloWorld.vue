  
<template>
  <div class="container col-6">
    <div class="box">
      <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-brand">himechat</div>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p id="target">僕は、すごく心配だ、よ(T_T)💔😰(￣Д￣；；そんなときは、美味しいもの食べて、元気出さなきゃだね😚😘😄オイラは美陽チャン一筋ダヨ（￣▽￣）💤😪🙂</p>
        </div>

          <form class="form-inline justify-content-center">
            <label class="sr-only" for="inlineFormInputName2">名前</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name">
            <button type="submit" class="btn btn-primary mb-2">生成</button><br>
            <input type="range" id="manji_range" min="0" max="3" step="1" v-model="manji_slider"><p>卍レベル : {{ manji_slider }}</p>
            <input type="range" id="ten_range" min="0" max="3" step="1" v-model="kutouten_slider"><p>句読点レベル : {{kutouten_slider}}</p>
          </form>


        <div class="sns mt-3">
          <button class="btn twitter mr-3">Twitterで送信する</button>
          <button class="btn line">LINEで送信する</button>
        </div>
        <button class="btn btn-outline-dark mt-3" icon fab color="orange" v-on:click="witeToClipboard">
          <v-icon>copy</v-icon>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      manji_slider: 1,
      kutouten_slider: 1
    }
  },
  methods:{
    witeToClipboard() {
      const copyText = this.$el.querySelector('#target').textContent
      navigator.clipboard
        .writeText(copyText)
    }
  }
}

// function string(){
//   var string = document.getElementById('string');
//   return string.innerHTML;
// }


  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
.balloon1-left {
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #E6ECF0;
  border-radius: 10px;
}
/* .balloon1-left:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #e0edff;
} */
.balloon1-left p {
  margin: 0;
  padding: 0;
}
.twitter {
  background-color: #39A1F3;
  color: white;
}

.line {
  background-color: #00C300;
  color: white;
}
</style>