<template>
  <div class="container col-6 pb-5">
    <div class="box">
      <nav class="navbar navbar-dark bg-dark">
        <div class="navbar-brand">himechat</div>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p>{{chat}}</p>
        </div>

            <label class="sr-only" for="inlineFormInputName2">なまえ</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="なまえ">
            <button type="submit" class="btn btn-outline-dark mb-2" v-on:click="himechat">生成</button>
            <input type="range"  min="0" max="3" step="1" v-model="manji_slider"><p>卍レベル : {{ manji_slider }}</p>
            <input type="range"  min="0" max="3" step="1" v-model="kutouten_slider"><p>句読点レベル : {{kutouten_slider}}</p>



        <div class="sns mt-3">
          <a class="btn twitter mr-3" href="#" target="_blank">
            ツイートする
          </a>
          <button class="btn line mr-3">
            LINEで送る
          </button>
          <button class="btn btn-outline-dark copy" v-on:click="witeToClipboard">
            <v-icon>Copy</v-icon>>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      chat: 'いっけなーい🔪殺意殺意💦私、看護学生！🍳医療系の学科ばかりの大学で毎日勉強✨でもある日「看護師は皆医者狙うためになるんだろ」とかいうクソ男が現れてもう大変💦看護師の誇り高さ舐めてんじゃねぇぞ🔪連日実習行って毎日記録書いてみろ💥次回「お前へのトリアージは問答無用で黒」お楽しみに💖',
      emoji_slider: 3,
      kutouten_slider: 3
    }
  },
  methods: {
    himechat: function() {
      axios
        .get('https://himechat-api.herokuapp.com/')
        .then((res) => {
          console.log(res)
        })
    },
    witeToClipboard() {
      const copyText = this.$el.querySelector('#target').textContent
      navigator.clipboard
        .writeText(copyText)
    }
  }
}
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      emoji_slider: 3,
      kutouten_slider: 3
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

