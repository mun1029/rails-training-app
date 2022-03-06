$(function(){
  var name;
  var age;
  
  $(".user-js-btn").on("click", function() {
    var userHtmlJs = `js(jquery)
                  <div class="name" >
                   <p>あなたのお名前は？</p>
                    <input type="text" name="name" id="name-form"><br>
                    <input type="submit" value="次へ" class="next"> 
                  </div>
                  <div class="age">
                    <p>貴方の年齢は？</p>
                    <input type="text" name="age" id="age-form">

                    <input type="submit" value="送信" class="age-next">
                  </div>`;
    $(".user-js-btn").css("display","none");
    $(".user-rails-btn").css("display","none");

    $(".main-js").append(userHtmlJs);

    $(".next").on("click", function(e) {
      name = $("#name-form").val();
  
      if(name.length !== 0){
        $(".name").css("display","none");
        $(".age").css("display","block");
        console.log(name)
      }else{
        $(".name").append("値が正しくありません。")
        return
      };
    });

    $(".age-next").on("click",function() {
      age = $("#age-form").val();
      if(age.length !== 0){
        $(".age").css("display","none");
        $(".main").append(`<p>貴方の名前は${name}</p>
                           <p>貴方の年齢は${age}</p>`)
      }else{
        $(".age").append("値が正しくありません。")
        return
      }
    });
  });

  $(".user-rails-btn").on("click", function() {
    $(".user-js-btn").css("display","none");
    $(".user-rails-btn").css("display","none");
    $(".main-rails").css("display","block")

  });

  
  

  $(".age-next").on("click",function() {
    age = $("#age-form").val();
    if(age.length !== 0){
      $(".age").css("display","none");
      $(".main").append(`<p>貴方の名前は${name}</p>
                         <p>貴方の年齢は${age}</p>`)
    }else{
      $(".age").append("値が正しくありません。")
      return
    }
  });
  
})