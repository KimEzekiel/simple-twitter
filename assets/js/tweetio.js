/*
*for updating tweetsss
*/
$(document).ready(function(){
  function showTweets(value){

    var $tweet = "<div class = 'ui event segment'>" +
                    "<div>"+
                      "<a href='#' class='ui'>"+value.name+ "</a>"+
                      "<span> @"+value.handler +"</span>"+
                    "</div>"+
                    "<div>"+
                      "<p>"+
                      value.message+
                      "</p>"+
                    "</div>"+
                  "</div>"
    // create new tweet card
    // put values in the card
    // prepend the card
    $(".feed").prepend($tweet);
  }

  $.getJSON("../assets/json/exer1 _tweets.json",function(data){
    // var tweets = $.parseJSON(data);
    // alert(typeof data);
    $.each(data, function(index, value) {
      showTweets(value);
    });
  });

});
