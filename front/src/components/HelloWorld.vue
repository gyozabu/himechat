<template>
  <div class="pb-5">
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-brand mx-auto">
        <p>himechat</p>
      </div>
    </nav>
    <div class="container">
      <div class="chat">
        <div class="balloon1-left">
          <p id="target" style="white-space:pre-wrap; word-wrap:break-word; text-align:left">{{chat}}</p>
        </div>

        <label class="sr-only" for="inlineFormInputName2">なまえ</label>
        <input
          v-model="name"
          type="text"
          class="form mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="なまえ"
        />

        <button type="submit" class="btn btn-outline-dark mb-2" v-on:click="himechat">生成</button>
        <br />
        <label for="emoji">
          絵文字レベル
          <select v-model="emoji">
            <option disabled value="選択"></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <br />

        <label for="manji">
          卍レベル
          <select v-model="manji">
            <option disabled value="選択"></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <br />

        <label for="kutouten">
          句読点レベル
          <select v-model="kutouten">
            <option disabled value="選択"></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <div class="sns mt-3">
          <a class="btn twitter mr-3" v-on:click="tweet" target="_blank">ツイートする</a>
          <a class="btn line mr-3" v-on:click="line" target="_brank">LINEで送る</a>
          <button class="btn btn-outline-dark copy" v-on:click="witeToClipboard">
            <v-icon>Copy</v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      chat:
        `【使い方】
        ・「なまえ」に名前を入力
        ・絵文字・卍・句読点のレベルを設定
        ・卍レベルを上げるとぴえん🥺とか出てきます
        ・「生成」をタップ！
        ・ツイートしたりLINEで共有したりしよう！`,
      name: "",
      emoji: 3,
      manji: 1,
      kutouten: 1,
      emoji_param: "",
      manji_param: "",
      kutouten_param: ""
    };
  },
  methods: {
    himechat: function() {
      this.emoji_param = "e=" + this.emoji;
      this.manji_param = "m=" + this.manji;
      this.kutouten_param = "p=" + this.kutouten;

      axios
        .get(
          "https://himechat-api.herokuapp.com/" +
            "?" +
            "name=" +
            this.name +
            "&" +
            this.emoji_param +
            "&" +
            this.manji_param +
            "&" +
            this.kutouten_param
        )
        .then(res => {
          this.chat = res.data.message;
        });
    },
    tweet: function() {
      window.open().location.href =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(this.chat) +
        "&hashtags=himechat"+"&url=https://himechat-gyoza.web.app";
    },
    line: function() {
      window.open().location.href = "https://line.me/R/msg/text/?" + this.chat;
    },
    witeToClipboard() {
      const copyText = this.$el.querySelector("#target").textContent;
      navigator.clipboard.writeText(copyText);
    }
  }
};
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
  background: #e6ecf0;
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
  background-color: #39a1f3;
  color: white;
}

.line {
  background-color: #00c300;
  color: white;
}

.form {
  display: inline-block;
  width: 70%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}
</style>

