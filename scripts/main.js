document.getElementById("option").onclick = function() {option_select()};
function option_select() {
   var options_ID    = ["SUPPORT_LIBYT"];
   var options_Class = ["yt_inline"];
   
   for ( var i = 0; i < options_ID.length; i++ ) {
      var option = document.getElementById( options_ID[i] );
      var blocks = document.getElementsByClassName( options_Class[i] );
      var state = "block";
      if ( option.checked === false ) { state = "none"; }

      for ( var j = 0; j < blocks.length; j++ ){
         blocks[i].style.display = state;
      }
   }
}

function selectOnlyThis(id, name){
  if ( id.checked === false ) { 
     return;
  }

  var myCheckbox = document.getElementsByName(name);
  Array.prototype.forEach.call(myCheckbox,function(el){
  	el.checked = false;
  });
  id.checked = true;
}
