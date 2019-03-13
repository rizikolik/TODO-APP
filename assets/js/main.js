 //CLİCK TO PLUS İCON TO  NEW TODO
 $(".fas").on("click",function(){
 $("input").fadeToggle(500);
    })
//WRİTE TODO AND PRESS ENTER 
 $("#input1").on("keypress",function(e){
 let k=$("#input1").val()
 if(e.which==13){
 $(".container").append("<p></p>");
 $("p").last().text(k);
 $("p").last().prepend("<i></i>");
 $(this).val("");
 $("p").on("mouseover",function(){
 $("i",this).addClass("fas fa-trash-alt");
   })
 //THRASH BOX   
 $("p").on("mouseout",function(){
     $("i",this).removeClass("fas fa-trash-alt");
})
 // DELETİNG THE TODO WİTH CLİCK EVENT
 $("p i").on("click",function(){
  $(this).parent().remove();
 })
 let clicks=0;
 $("p").click(function() {
 //MAKING COMPLETED TODOS LİNE THROUGH 
  if (clicks%2==0) {
      $(this).css("text-decoration","line-through");
      
  } else {
      $(this).css("text-decoration","none");
  }
  clicks++;
});
  }
})
    
  