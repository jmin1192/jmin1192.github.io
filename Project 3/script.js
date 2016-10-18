$(document).ready(function(){
	// why us tabs

	$('ul.tabs').delegate('li:not(.active)', 'click', function() {
	$(this).addClass('active').siblings().removeClass('active')
		
	.parents('div.tab-wrapper').find('div.tab-content').eq($(this).index()).fadeIn(150).siblings('div.tab-content').hide();
	})

	// why us features


  $('.bar-heading').click(function(){
		$('.current').removeClass('current');
		$(this).toggleClass('current')
		$('.current').next().fadeIn(150);
		$('.bar-heading:not(.current)').next().hide()
	})

  // why us features ends

  // sticky nav bar 
   $('.sticky.click').click(function(){
		$('nav.stickybar').toggleClass('hidden');
		$('.overlay').toggleClass('active');
	})

   		$('.close').click(function(){
   		$('nav.stickybar').toggleClass('hidden');
		$('.overlay').toggleClass('active');
   })

})