  
<template>
  <div class="container col-6">
    <div class="box">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#!">himechat</a>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p id="string">僕は、すごく心配だ、よ(T_T)💔😰(￣Д￣；；そんなときは、美味しいもの食べて、元気出さなきゃだね😚😘😄オイラは美陽チャン一筋ダヨ（￣▽￣）💤😪🙂</p>
        </div>

          <form class="form-inline justify-content-center">
            <label class="sr-only" for="inlineFormInputName2">名前</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name">
            <button type="submit" class="btn btn-primary mb-2">生成</button><br>
            <input type="range" id="emoji_range" min="0" max="10" step="1" v-model="emoji_slider"><p>絵文字レベル : {{ emoji_slider }}/p>
            <input type="range" id="ten_range" min="0" max="10" step="1" value="0"><p>句読点レベル : <span id="num2">0</span></p>
          </form>


        <div class="sns mt-3">
          <button class="btn btn-outline-dark mr-3">Twitterで送信する</button>
          <button class="btn btn-outline-dark">LINEで送信する</button>
          <input id="copyTarget" type="text" value="コピー対象の文言" readonly>
          <button onclick="copyToClipboard()">Copy text</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      emoji_slider: 1,
    }
  }
}

// function string(){
//   var string = document.getElementById('string');
//   return string.innerHTML;
// }

// var elem = document.getElementById('emoji_range');
// var target = document.getElementById('num1');
// var rangeValue = function (elem, target) {
//     return function(evt){
//       target.innerHTML = elem.value;
//     }
//   }
//   elem.addEventListener('input', rangeValue(elem, target));

//   function copyToClipboard() {
//             // コピー対象をJavaScript上で変数として定義する
//             var copyTarget = document.getElementById("copyTarget");
//             // コピー対象のテキストを選択する
//             copyTarget.select();
//             // 選択しているテキストをクリップボードにコピーする
//             document.execCommand("Copy");
//             // コピーをお知らせする
//             alert("コピーできました！ : " + copyTarget.value);
//         }
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