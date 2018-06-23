// top切换
$('#top a').hover(function(){
	$(this).css({color:'red'})
},function(){
	$(this).css({color:'#666'})
})
$('#top a:eq(2)').hover(function(){
	$(this).css({background:'white'})
	$('.about-us').css({display:'block'})
},function(){
	$(this).css({background:'#eee'})
	$('.about-us').css({display:'none'})
})
$('#top a:eq(1)').hover(function(){
	$(this).css({background:'white'})
	$('.mobile').css({display:'block'})
},function(){
	$(this).css({background:'#eee'})
	$('.mobile').css({display:'none'})
})
$('.about-us').hover(function(){
	$(this).css({display:'block'})
	$('#top a:eq(2)').css({background:'white'})
},function(){
	$(this).css({display:'none'}) 
	$('#top a:eq(2)').css({background:'#eee'})
})
$('.mobile').hover(function(){
	$(this).css({display:'block'})
	$('#top a:eq(1)').css({background:'white'})
},function(){
	$(this).css({display:'none'})
	$('#top a:eq(1)').css({background:'#eee'})
})
$('.about-us>a').hover(function(){
	$(this).css({color:'red'})
},function(){
	$(this).css({color:'black'})
})
$('.about-us>a').click(function(){
	var USindex=$(this).index();
	var USclass='.about-box-'+USindex;
	$(USclass).css({display:'block'})
	$('.exit>img').click(function(){
	$(USclass).css({display:'none'})
})
})
// // top2切换
$('#top2 a').hover(function(){
	$(this).css({color:'red',textDecoration:'underline'})
	$('.line').css({borderRight:'1px dashed black'})
},function(){
	$(this).css({color:'black',textDecoration:'none'})
		$('.line').css({borderRight:'1px dashed black'})
})
// 每日数据
$('.data').hover(function(){
	$(this).css({color:'red',textDecoration:'underline'})
},function(){
	$(this).css({color:'black',textDecoration:'none'})
})
// 内容循环
var arr1=[{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'},
		{img1:'img/123.PNG',
		img2:'img/news.png',
		text1:'运营总监',
		text2:'编号 ： ',t2span:'GS362291',
		text3:'级别 ： ',t3span:'99999',
		text4:'男，30岁，北京，165cm，本科，',
		text5:'查看详情...',
		text6:'联系他'}];
		var arr2=[
		{text1:'s362209:',text2:'最新的一条内容'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'},
		{text1:'s362209:',text2:'农业户口的福音，利息5厘8，循环授信，农业户口的福音，利息5厘8，循环授信，'}];
		var arr3=[{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'},
		{img1:'img/123.PNG',
		text1:'运营总监',
		text2:'GS',
		text3:'3622291',
		text4:'54岁',
		text5:'广州',
		text6:'联系ta'}];
 		var Personal='';
 		var news='';
 		var text='';
 			$(function(){
 // 				 for(var i=0;i<arr1.length;i++){
 // 				 	Personal+='<ul>'+'<img style="width: 140px;" src='+arr1[i].img1+'>'
 // 				 	+'<li class="information">'+'<a href="###">'+arr1[i].text1+'</a>'+
	// 				'<a href="###" style="color:red;">'+arr1[i].text2+'<span>'+arr1[i].t2span+'</span>'+'</a>'+
	// 				'<a href="###" style="color:red;">'+arr1[i].text3+'<span>'+arr1[i].t3span+'</span>'+'</a>'+
	// 				'<a href="###">'+arr1[i].text4+'</a>'+
	// 				'<a href="###">'+arr1[i].text5+'</a>'+
	// 				'<a style="color:red;" href="###">'+'<img  src='+arr1[i].img2+'>'+arr1[i].text6+'</a>'+'</li>'+'</ul>';	
 // };
 	 for(var i=0;i<arr1.length;i++){
 				 	Personal+='<ul><img style="width: 140px;" src='
 				 	+arr1[i].img1+'><li class="information"><a href="###">'
 				 	+arr1[i].text1+'</a><a href="###" style="color:red;">'
 				 	+arr1[i].text2+'<span>'+arr1[i].t2span+'</span></a><a href="###" style="color:red;">'
 				 	+arr1[i].text3+'<span>'+arr1[i].t3span+'</span></a><a href="###">'
 				 	+arr1[i].text4+'</a><a href="###">'
 				 	+arr1[i].text5+'</a><a style="color:red;" href="###"><img src='
 				 	+arr1[i].img2+'>'+arr1[i].text6+'</a></li></ul>';	
 };
 // for(var i=0;i<arr2.length;i++){
 // 				 	news+='<a href="###">'+'<p>'+'<span style="color: red;">'+arr2[i].text1+'</span>'+arr2[i].text2+'</p>'+'</a>';		
 // }
 for(var i=0;i<arr2.length;i++){
 				 	news+='<a href="###"><p><span style="color: red;">'
 				 	+arr2[i].text1+'</span>'
 				 	+arr2[i].text2+'</p></a>';		
 }
 // for (var i =0;i<=arr3.length; i++) {
 // 		text+='<a>'+'<img src='+arr3[i].img1+'>'+
	// 		'<p style="color:blue;font-weight: 700;">'+arr3[i].text1+'</p>'+
	// 		'<p>'+'<span style="color:red;">'+arr3[i].text2+'</span>'+'<span>'+arr3[i].text3+'</span>'+'</p>'
	// 		'<p>'+'<span style="font-size: 14px;margin-right:8px;">'
	// 		+arr3[i].text4+'</span>'+'<span style="font-size: 14px;">'+arr3[i].text5+'</span>'+'</p>'+
	// 		'<p class="Contact-him">'+arr3[i].text6+'</p>'+'</a>';
 // }
 // for (var i =0;i<arr3.length; i++) {
 // 		text+='<a href="###">'+'<img src='+arr3[i].img1+'>'+
	// 		'<p style="color:blue;font-weight: 700;">'+arr3[i].text1+'</p>'+
	// 		'<p>'+'<span style="color:red;">'+arr3[i].text2+'</span>'+'<span>'+arr3[i].text3+'</span>'+'</p>'+
	// 		'<p>'+'<span style="font-size: 14px;margin-right:8px;">'
	// 		+arr3[i].text4+'</span>'+'<span style="font-size: 14px;">'+arr3[i].text5+'</span>'+'</p>'+
	// 		'<p class="Contact-him">'+arr3[i].text6+'</p>'+'</a>';
 // }
  for (var i =0;i<arr3.length; i++) {
 		text+='<a href="###"><img src='+arr3[i].img1+'><p style="color:blue;font-weight: 700;">'
 		+arr3[i].text1+'</p><p><span style="color:red;">'
 		+arr3[i].text2+'</span><span style="color:black">'
 		+arr3[i].text3+'</span></p><p><span style="font-size: 14px;margin-right:8px;color:black">'
			+arr3[i].text4+'</span><span style="font-size: 14px;color:black">'
			+arr3[i].text5+'</span></p><p class="Contact-him">'
			+arr3[i].text6+'</p></a>';
 }
 $('.Personal-information').html(Personal);			//内容1插入
 $('.news').html(news);				//最新发布数据插入
 $('#text-content').html(text);				//内容2数据插入
 $('.news>a').hover(function(){
	$(this).css({color:'red'})
},function(){
	$(this).css({color:'black'})
})
 })

// // 主要内容切换
content();
setInterval(function(){
	content();
},100)
function content(){
	 con=$('.Age-1').prop('value');
	 // console.log(con)
	if (con==18) {
		$('.Age-2>option').text('22');
		$('.Age-2>option').prop('value','22');
	}
	if (con==22) {
		$('.Age-2>option').text('30');
		$('.Age-2>option').prop('value','30');
	}
	if (con==30) {
		$('.Age-2>option').text('40');
		$('.Age-2>option').prop('value','40');
	}
	if (con==40) {
		$('.Age-2>option').text('60');
		$('.Age-2>option').prop('value','60');
	}
}
$('.news>a').hover(function(){
	$(this).css({color:'red'});
},function(){
	$(this).css({color:'black'});
})
// 会员编号
$('.hy').click(function(e){
	$('.hy').toggleClass('hy-style');
	$('.Member-search>ul,.up-arrow').toggle();
	e.stopPropagation();		//阻止冒泡到父元素
})
$('.Member-search>ul').click(function(e){
	e.stopPropagation();		//阻止冒泡到父元素
})
$(document).click(function(){
	$('.hy').removeClass('hy-style');
	$('.Member-search>ul,.up-arrow').hide();
})
// 高级搜索
$('.Advanced-search').click(function(){
	$('#content').css({'display':'none'});
	$('#Advanced-search').css({'display':'block'});
	$('#box').css({'visibility':'visible'});
})
$('.Setting-conditions').click(function(){
	$('.Setting-conditions').css({'display':'none'});
	$('.Condition-switching').css({'display':'block'});
})
