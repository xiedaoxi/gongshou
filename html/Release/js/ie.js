
$(function(){
	var Browser=navigator.appName;			//浏览器
	var Edition=navigator.appVersion.charAt(22);	//版本号
	// console.log(Browser)
	// console.log(Edition)
	if (Browser=='Microsoft Internet Explorer'&&Edition=='7') {
		$('.about-us').css({"right":"149px","width":"140px"});
		$('.about-us>a').css({"width":"136px"});
		$('.mobile').css({"right":"29px","width":"150px"});
		$('.mobile>img').css({"width":"155px"});
		$('#about-box').css({"width":"918px"});
		$('.search>input').css({"height":"29px",'padding':'10px 0px 0px 10px'});
		$('.search-criteria,.Condition-switching').css({'width':'1170px'});
		$('.inp').css({'height':'20px'});
		$('.sort').css({'width':'1170px'});
		$('#text-content>a').css({'width':'130px'});
		$('#text-content').css({'width':'1120px'});
		$('#nextPage,#prePage,#firstPage,#lastPage').css({'width':'60px'});
		$('#jumpText').css({'height':'10px','width':'60px','padding':'15px 0px'});
		setInterval(function(){
		w1=$('.select>p').width();
		w=w1+50;
		$('.select').width(w);
		},100)
	}
	if(Browser!='Microsoft Internet Explorer'){
		$('.search-criteria select').css({'background':'#FFB6C1'});
		$('.search-criteria select>option').css({'background':'white'});
		$('.term>select').css({'background':'#ccc'});		//未作用
		// $('.sort').css({'width':'1200x'})
	}
})

