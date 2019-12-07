<template>
  <div class="container col-6 pb-5">
    <div class="box">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#!">himechat</a>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p>{{chat}}</p>
        </div>

          <form class="form-inline justify-content-center">
            <label class="sr-only" for="inlineFormInputName2">なまえ</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="なまえ">
            <button v-on:click="himechat" type="submit" class="btn btn-outline-dark mb-2">生成</button>
          </form>


        <div class="sns mt-3">
          <a class="btn twitter mr-3" href="https://twitter.com/intent/tweet?text=僕は、すごく心配だ、よ(T_T)💔😰(￣Д￣；；そんなときは、美味しいもの食べて、元気出さなきゃだね😚😘😄オイラは美陽チャン一筋ダヨ（￣▽￣）💤😪🙂" target="_blank">
            ツイートする
          </a>
          <button class="btn line mr-3">
            LINEで送る
          </button>
          <button class="btn btn-outline-dark copy">
            Copy
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      chat: 'いっけなーい🔪殺意殺意💦私、看護学生！🍳医療系の学科ばかりの大学で毎日勉強✨でもある日「看護師は皆医者狙うためになるんだろ」とかいうクソ男が現れてもう大変💦看護師の誇り高さ舐めてんじゃねぇぞ🔪連日実習行って毎日記録書いてみろ💥次回「お前へのトリアージは問答無用で黒」お楽しみに💖'
    }
  },
  methods: {
    himechat: function() {
      this.chat = '僕は、すごく心配だ、よ(T_T)💔😰(￣Д￣；；そんなときは、美味しいもの食べて、元気出さなきゃだね😚😘😄オイラは美陽チャン一筋ダヨ（￣▽￣）💤😪🙂'
    }
  }
}
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

.container {
  background: white;
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
