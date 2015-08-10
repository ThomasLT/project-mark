    $(document).ready(function(){
		$('#version').html("Version 1.1")
		/*$('#close').click( function(){
			alert('clicked');
		});*/
		var q = function() { $(".active").removeClass("active"); }; 
		$('.lvl1, .tab, .lvl2, #cover, #content').clickoutside(q);

        $('.lvl1').on('click', function(){
			var offset = $(this).offset().top;
			var offset = offset+50;
			var height = $('html').height();
			var height =  height/2;
			if (offset < height) {
				$(this).parent().children(".tab").addClass("bot");      
				$(this).parent().children(".tab").children(".lvl2").addClass("top");
				var arrow = $(this).parent().children('.tab').children('.lvl2').children('h2');
				arrow.appendTo(arrow.parent());
				arrow.html("▲");
			}	
			var Overview = $(this).attr('data-tab');
			var Overview = "."+Overview;
			var object = $(this);
			if ($(this).hasClass("active")) {
				$(".active").removeClass("active");
			} else {	
				$(".tab").removeClass("active");
				$(".lvl1.clickable").removeClass("active");
				$(Overview).addClass("active");
				$(this).addClass("active");	
				$(this).parent().children(".tab").addClass("active");       
				$(this).parent().addClass("active");
				$(this).parent().children(".tab").focus();
			}
		});
		
		
		
		$('.lvl2 a').on('click', function(){
			var frame = "/project-mark/"+$(this).attr('data-frame');
			$('#content').load(frame)
			$('#frame').addClass("active");
			$("#cover").addClass("active");
		});
		$('#closecontent,#cover').on('click', function(){
			$('#frame').removeClass("active");
			$("#cover").removeClass("active");
		});
    })