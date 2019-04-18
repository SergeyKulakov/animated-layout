$(document).ready(function($) {
  function animateElements() {
    $('.progressbar').each(function() {
		var elementProgressbarPos = $('.progressbar').offset().top;
		var topOfWindow = $(window).scrollTop();
//		var sectionSecond = $('section.second').height();
		var circle1Pos = $('#circle1').offset().top;
		var circle2Pos = circle1Pos + $('#step2').height();
		var circle3Pos = circle2Pos + $('#step3').height();
		var percent1, percent2, percent3 = 0;
		var animationFirst, animationSecond, animationThird = 1200;

		if (circle1Pos > topOfWindow + $(window).height() + $('#step3').height()) {
			percent1 = 0;
		}

		if (circle1Pos < topOfWindow + $(window).height() + $('#step3').height()) {
			if (circle1Pos < topOfWindow + $(window).height() + $('#step3').height() - 100) {
				$('#step2').css("opacity", "0.3");
				$('#step3').css("opacity", "0.05");
				$('.right').find('.about').css("color", "#FC6E3A");
				$('#step1').css("opacity", "1");
			    $('#step1').find('.about').css("color", "#2CDCEB");
                percent1 = circle1Pos - topOfWindow - $('#step3').height()*4;

                if (percent1 < 0) {
                	percent1 = 100;
                }

                if (percent1 > 100) {
                	percent1 = 0;
                }                
			}

			if (circle2Pos < topOfWindow + $(window).height() + $('#step3').height() - 450) {
				$('.step').css("opacity", "0.3");
			    $('.right').find('.about').css("color", "#FC6E3A");
				$('#step2').css("opacity", "1");
			    $('#step2').find('.about').css("color", "#2CDCEB");			    
			    percent2 = circle2Pos - topOfWindow - $('#step3').height()*4;
                if (percent2 < 0) {
                	percent2 = 100;
                	animationSecond = 0;
                }
                animationFirst = 0;
			}

			if (circle3Pos < topOfWindow + $(window).height() + $('#step3').height() - 550) {
				$('#step1').css("opacity", "0.05");
				$('#step2').css("opacity", "0.3");
			    $('.right').find('.about').css("color", "#FC6E3A");
				$('#step3').css("opacity", "1");
			    $('#step3').find('.about').css("color", "#2CDCEB");
			    percent3 = circle3Pos - topOfWindow - $('#step3').height()*4;
			    percent3 = Math.abs(percent3);
			}

			console.log(topOfWindow + $(window).height() + $('#step3').height() - 350 > $('section.second').height());

			if (topOfWindow + $(window).height() + $('#step3').height() - 350 > $('section.second').height()) {
				$('#step1').css("opacity", "0");
				percent3 = 100; 
				animationThird = 0;    		
			}
	    $('#step1').css("margin-top", ((20 - ((topOfWindow + $(window).height() - 30)/1000)*7)*2)-15 + 'vh');
    }
		var animate = $(this).data('animate');
		$('.progressbar').data('animate', false);
		if (elementProgressbarPos < topOfWindow + $(window).height() - 30 && !animate) {

			$('#circle1').circleProgress({
			startAngle: ((Math.PI * 2) * percent1) - Math.PI / 2,
			value: percent1 / 100,
			thickness: 3,
			fill: {
			    color: '#40E0ED'
			},
			animation: { duration: animationFirst, value: percent1 / 100,  easing: "circleProgressEasing" }
		});


        $('#circle2').circleProgress({
			startAngle: -Math.PI / 2,
			value: percent2 / 100,
			thickness: 3,
			fill: {
				color: '#40E0ED'
			},
			animation: { duration: animationSecond, value: percent1 / 100,  easing: "circleProgressEasing" }
			}); 
        $('#circle3').circleProgress({
			startAngle: -Math.PI / 2,
			value: percent3 / 100,
			thickness: 3,
			fill: {
				color: '#40E0ED'
			},
			animation: { duration: animationThird, value: percent1 / 100,  easing: "circleProgressEasing" }
		});         
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: 0,
          thickness: 3,
          fill: {
            color: '#40E0ED'
          }
        });
      }
    });
  }

  animateElements();
  $(window).scroll(animateElements);
});