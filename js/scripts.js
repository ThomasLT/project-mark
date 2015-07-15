    $(document).ready(function(){
        $('.lvl1').on('click', function(){
			var offset = $(this).offset().top;
			var height = $(window).height();
			var height =  height/2;
			if (offset < height) {
				$(this).parent().children(".tab").addClass("bot");      
				$(this).parent().children(".tab").children(".lvl2").addClass("bot");  
			}
			
			var Overview = $(this).attr('data-tab');
			var Overview = "."+Overview;
			var object = $(this);
			if ($(this).hasClass("active")) {
				$(".tab").removeClass("active");
				$(".lvl1.clickable").removeClass("active");
			} else {	
				$(".tab").removeClass("active");
				$(".lvl1.clickable").removeClass("active");
				$(Overview).addClass("active");
				$(this).addClass("active");	
				$(this).parent().children(".tab").addClass("active");       
			}
		});
		$('.lvl2 a').on('click', function(){
			var frame = "/"+$(this).attr('data-iframe');	
			$('#content')
			.load(frame)
			.addClass("active");
			$("#cover").addClass("active");
		});
		$('#closecontent').on('click', function(){
			$('#content')
			.removeClass("active");
			$("#cover").removeClass("active");
		});
		
    })