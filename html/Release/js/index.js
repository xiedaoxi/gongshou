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
// 顺风车
// 按钮
 $(".Submission").mousedown(function(){
    $(this).css({'background':'#c62127'})
  });
	   $(".Submission").mouseup(function(){
    $(this).css({'background':'#ccc'})
  });
setInterval(function(){
	var width=$('.select').width();
	$('.select-ul').width(width);
	var width2=width+1;
	$('.Tail-wind').css({'left':width2})
},100)
// 提交提示
$('.Submission').click(function(){
	var term=$('.term').val();
	var region1=$('#s_province').val();		//省
	var region2=$('#s_city').val();			//市
	var region3=$('#s_county').val();		//区
	var img1=$('.Item-picture>a>img:eq(0)').attr('src');//console.log(img1)
	//console.log(region1,region2,region3)
	setInterval(function(){
		var term=$('.term').val();
		var region1=$('#s_province').val();		//省
		var region2=$('#s_city').val();			//市
		var region3=$('#s_county').val();		//区
		var img1=$('.Item-picture>a>img:eq(0)').attr('src');	//console.log(img1)
		if (term!='期限') {$('.Prompt-term').hide()}
		if (region1!='不限') {$('.Prompt-region').hide()}
		if (img1!='img/upload.png') {$('.Prompt-Goods').hide()}
	},100)
	if (term=='期限') {$('.Prompt-term').show()}
	if (region1=='不限') {$('.Prompt-region').show()}
	if (img1=='img/upload.png') {$('.Prompt-Goods').show()}
	if (term!='期限'&&region1!='不限'&&img1!='img/upload.png') {
			$('#Prompt').show();
			$('#main').css({'opacity':'0.5'});
			$('#cover').show();
		}
})