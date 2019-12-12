$(function(){
	var h;
	var t;
	var w;
	var num=1;
	var link="";
	var startFlag=false;



	$(".Topscroll").hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".Topscroll").show();
		}
		else {
			$(".Topscroll").hide();
		}
	})
	$(".Topscroll").click(function(e){
		e.preventDefault()
		$("html").animate({scrollTop:0}, 800)

	})






	setTimeout(function(){
		$("body,html").animate({scrollTop:0}, 400, function(){
			$("section").removeClass("active");
			$("#header .text_zone").addClass("active")
			startFlag=true
		});
	}, 150);

	$(window).resize(function(){
		w=$(window).width();
	});
	$(window).scroll(function(){
		if(startFlag == false){
			return false;
		}

		t=$(window).scrollTop();

		if(t <= $("#survice").offset().top-400){
			$("#header .text_zone").addClass("active")
			$("#header .menu_zone .window_long").removeClass("down")
			$("#gnb").removeClass("down")
			$("#header .menu_zone .window_short").removeClass("down")
		}
		else if(t <= $("#portfolio").offset().top-400){
			$("#survice .title").addClass("active")
			$("#survice .content").addClass("active")
			$("#header .menu_zone .window_long").addClass("down")
			$("#gnb").addClass("down")
			$("#header .menu_zone .window_short").addClass("down")
		}
		else if(t <= $("#about").offset().top-400){
			$("#portfolio .content .title").addClass("active")
			$("#portfolio .content ul").addClass("active")
		}
		else if(t <= $("#team").offset().top-400){
			$("#about .title").addClass("active")
			$("#about .about").addClass("active")
		}
		else if(t <= $("#contact").offset().top-400){
			$("#team .team_box .title").addClass("active")
			$("#team .team_box .box").addClass("active")
			$("#team .team_box .desc").addClass("active")
		}
		else {
			$("#contact .contact_box .title").addClass("active")
			$("#contact .contact_box").addClass("active")
		}
	});


	$("nav li a").click(function(e){
		e.preventDefault()
		link=$(this).attr("href")
		$("body, html").animate({scrollTop:$(link).offset().top}, 400)
		num=$(this).parent().index()+1;
		return false;
	});


	$(window).trigger("resize");
	$(window).trigger("scroll");

//tab 클릭
	$(".tab").click(function(e){
		e.preventDefault()
		if($("#tab_gnb").hasClass("active") == false) {
			$("#tab_gnb").addClass("active");
			$(".tab img").attr({src:"img/close.png"});
			$(".logo").addClass("active");
			$("#header .menu_zone .window_short").addClass("active")
			$("#header .menu_zone .window_short.down").addClass("active")


		}
		else {
			$("#tab_gnb").removeClass("active");
			$(".tab img").attr({src:"img/bar.png"});
			$(".logo").removeClass("active");
			$("#header .menu_zone .window_short.down").removeClass("active")
			$("#header .menu_zone .window_short").removeClass("active")
		}
	});

});
