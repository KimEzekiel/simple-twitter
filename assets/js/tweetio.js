/*
*for updating tweetsss
*/

$(document).ready(function(){

  $.getJSON("../assets/json/exer1 _tweets.json",function(data){
    var tweets = JSON.parse(data);
  });

});
