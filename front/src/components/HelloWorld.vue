  
<template>
  <div class="container col-6">
    <div class="box">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#!">himechat</a>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p id="target">{{chat}}</p>
        </div>

          <form class="form-inline justify-content-center">
            <label class="sr-only" for="inlineFormInputName2">名前</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name">
            <button type="submit" class="btn btn-primary mb-2">生成</button><br>
            <input type="range" id="emoji_range" min="0" max="10" step="1" v-model="emoji_slider"><p>絵文字レベル : {{ emoji_slider }}</p>
            <input type="range" id="ten_range" min="0" max="10" step="1" v-model="kutouten_slider"><p>句読点レベル : {{kutouten_slider}}</p>
          </form>


        <div class="sns mt-3">
          <button class="btn btn-outline-dark mr-3">Twitterで送信する</button>
          <button class="btn btn-outline-dark">LINEで送信する</button>
        </div>
        <button icon fab color="orange" v-on:click="witeToClipboard">
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
</style>