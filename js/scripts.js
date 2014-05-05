$(document).ready(function() {
	
	

	
	$(function () {
            setDifferentImage = function (imgUrl) {
                $('#backgroundImage').attr('src', imgUrl);
            };

        });
        
       $(function () {
            setDifferentSigmund = function (imgUrl) {
                $('#Sigmund').attr('src', imgUrl);
            };

       });
       
       
       
       $('.button').click(function(){
       	$("#swordRing")[0].play();
       		$(this).fadeOut('slow');	
	       $('.move').addClass('animate');
	       setTimeout(function() {
        window.location = 'story.html';
   }, 1300)
	       
       });
       
       $('#resteHost').click(function(){
	       
	       $('#backgroundImage').attr('src', 'img/weddingFeast.png');
	       $('img#Sigmund').attr('src', 'img/sigmund.png');
	       
       });
       
       

   	
   	$('#toggle').click(function(){
	   
	   $('#popUpWrapper').toggleClass('negativeMargin');	
	   	
   	});
        
     $('a#aboutPageLink').click(function(){
	     $('#aboutPage').toggleClass('hidden');
	     
     });
     
     $('#aboutPage').click(function(){
	     $('#aboutPage').toggleClass('hidden');
	     
     });   
     
	
}); 

