---
layout: null
---

$(document).ready(function () {
  $('.home').click(function (e) {
			$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
			$(".panel-cover").fadeOut();
    	$('body').css('overflow','auto');
  })

	if (window.location.pathname == '{{ site.baseurl }}home/'){
		$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}news/'){
		$('#nav-news').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}research/'){
		$('#nav-research').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}publications_and_talks/'){
		$('#nav-pubs').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}teaching/'){
		$('#nav-teach').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}about_me_and_cv/'){
		$('#nav-about').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}blog/'){
		$('#nav-blog').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	$('.new-header .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeIn(200);
		$('.mobile-sidebar-container').fadeIn(200);
  })

	$('.mobile-sidebar .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeOut(200);
		$('.mobile-sidebar-container').fadeOut(200);
  })

})
