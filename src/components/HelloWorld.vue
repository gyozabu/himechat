<template>
  <div class="container">
    <div class="box">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#!">himechat</a>
      </nav>

      <div class="chat">
        <div class="balloon1-left">
          <p>こんにちは。これは例です。</p>
        </div>
        
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">名前</label>
          <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="名前">

          <button type="submit" class="btn btn-primary mb-2">生成</button>
        </form>

        <div class="sns">
          <button>Twitterで送信する</button>
          <button>LINEで送信する</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
}

.balloon1-left:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-right: 15px solid #e0edff;
}

.balloon1-left p {
  margin: 0;
  padding: 0;
}
</style>
