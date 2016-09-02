// JavaScript Document
$(document).ready(function(e) {
	  
	  //刷新页面重置input值
	  $('.bd ul li').find('input[type=checkbox]:first').attr('checked',true).siblings().attr('checked',false);
	  
	  //置顶
	  $scrollTop = function() {
                if($(document).scrollTop() > 900){
					$(".gmselect").addClass("scrolltop");
					 $(window).bind('scroll', $yanse); 
					}
				else{
					$(".gmselect").removeClass("scrolltop")
					}
                };
	  $(window).bind('scroll', $scrollTop);  
      
	  //nav高亮（影响滚动速度可去掉）
	  /*$yanse =function(){
		  var li1 =$(".gmselect li").eq(0);
		  var li2 =$(".gmselect li").eq(1);
		  var li3 =$(".gmselect li").eq(2);
		  var li4 =$(".gmselect li").eq(3);
		  
		  if($(document).scrollTop() > 900){
		  li1.css("background","#48addc");
		  li1.find("p").css("color","#fff");
		  li1.find(".ahead").css("border-color","transparent transparent transparent #48acdd");
		  }else{
			 li1.css("background","#e7e7e7");
		  	 li1.find("p").css("color","#757474");
		     li1.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7"); 
			  }
		  if($(document).scrollTop() > 1508){
		  li2.css("background","#48addc");
		  li2.find("p").css("color","#fff");
		  li2.find(".topright").css("border-top","36px solid #48acdd");
		  li2.find(".bottomleft").css("border-right","39px solid #48acdd");
		  li2.find(".ahead").css("border-color","transparent transparent transparent #48acdd");
		  
		  li1.css("background","#e7e7e7");
		  li1.find("p").css("color","#757474");
		  li1.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7"); 
		  }else{
			 li2.css("background","#e7e7e7");
		  	 li2.find("p").css("color","#757474");
		     li2.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7");
			 li2.find(".topright").css("border-top","36px solid #e7e7e7");
		  	 li2.find(".bottomleft").css("border-right","39px solid #e7e7e7");
			  }	
			  
		  if($(document).scrollTop() > 2600){
		  li3.css("background","#48addc");
		  li3.find("p").css("color","#fff");
		  li3.find(".topright").css("border-top","36px solid #48acdd");
		  li3.find(".bottomleft").css("border-right","39px solid #48acdd");
		  li3.find(".ahead").css("border-color","transparent transparent transparent #48acdd");
		  
		  li2.css("background","#e7e7e7");
		  li2.find("p").css("color","#757474");
		  li2.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7"); 
		  li2.find(".topright").css("border-top","36px solid #e7e7e7");
		  li2.find(".bottomleft").css("border-right","39px solid #e7e7e7");
		  }else{
			 li3.css("background","#e7e7e7");
		  	 li3.find("p").css("color","#757474");
		     li3.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7");
			 li3.find(".topright").css("border-top","36px solid #e7e7e7");
		  	 li3.find(".bottomleft").css("border-right","39px solid #e7e7e7");
			  }
			  
		  if($(document).scrollTop() > 3600){
		  li4.css("background","#48addc");
		  li4.find("p").css("color","#fff");
		  li4.find(".topright").css("border-top","36px solid #48acdd");
		  li4.find(".bottomleft").css("border-right","39px solid #48acdd");
		  li4.find(".ahead").css("border-color","transparent transparent transparent #48acdd");
		  
		  li3.css("background","#e7e7e7");
		  li3.find("p").css("color","#757474");
		  li3.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7"); 
		  li3.find(".topright").css("border-top","36px solid #e7e7e7");
		  li3.find(".bottomleft").css("border-right","39px solid #e7e7e7");
		  }else{
			 li4.css("background","#e7e7e7");
		  	 li4.find("p").css("color","#757474");
		     li4.find(".ahead").css("border-color","transparent transparent transparent #e7e7e7");
			 li4.find(".topright").css("border-top","36px solid #e7e7e7");
		  	 li4.find(".bottomleft").css("border-right","39px solid #e7e7e7");
			  }	  		   
		  }*/
		  
	  //城市选择
	  $(".gmbase .bd .smallnav li").click(function(){
		  $(this).addClass("checked").siblings().removeClass("checked");
		  $(this).css("color","#fff").siblings().css("color","#f19ec2");
		  $(this).css("background","#f19ec2").siblings().css("background","#fff");
	  });
		
   	  //摄影师选择
	  $(".gmphotographer .bd .selsex label").click(function(){
		  $(".photographer .bd .selsex label").css("color","#666565");
		  $(this).css("color","#fd5005");
	  });
	  
	  $(".gmgrapher li label").click(function(){
		  $(".grapher li label a").css("display","none");
		  $(this).find("a").css("display","block");
	  });
	  
	  //复选按钮单选
	  $('.bd ul li').find('input[type=checkbox]').click(function(){
		if($(this).is(':checked')){
		$(this).attr('checked',true).siblings().attr('checked',false);
		$(this).prev("label").css("color","#fd5005").siblings().css("color","#666565");
		$(this).parent().find('label').removeClass("labelon");
		}else{
			$(this).attr('checked',false).siblings().attr('checked',false);
			$(this).prev("label").css("color","#666565");
		}
		}) 
		 
	
	  //提交订单
	  $(".gmconfirm .submitted").click(function(){
		 $(".iframenone").css("display","block");
		 $(".scrolltop").css("display","none");
		// document.documentElement.style.overflow='hidden';
		 $("html").css("overflow-y","hidden");
		 //$(document).scrollTop(0);
	  });
	  
	  
	  $(".concluded .close").click(function(){
		  $(".iframenone",parent.document.body).css("display","none");
		  var htmlover =$(parent.document).find("#htmlover");
		  htmlover.css("overflow-y","auto");
	  });  
	  
	  //选择男女
	  $(".gmphotographer .grapher li").each(function(index, element) {
         if($(this).find(".teachersex").text() == "女"){
			 $(this).css("display","none");
			 }
       });
	  $(".gmphotographer .bd ul li .selsex .girl").click(function(){
	  $(".gmphotographer .grapher li").css("display","none");
	  $(".gmphotographer .grapher li").removeClass("grablock");
	  $(".gmphotographer .grapher li").each(function(index, element) {
         if($(this).find(".teachersex").text() == "女"){
			 $(this).addClass("grablock");
			 }
       });
	   });
	  $(".gmphotographer .bd ul li .selsex .boy").click(function(){
	  $(".gmphotographer .grapher li").removeClass("grablock");
	  $(".gmphotographer .grapher li").each(function(index, element) {
         if($(this).find(".teachersex").text() == "男"){
			 $(this).addClass("grablock");
			 }
       });
	   });
	  
	  /*$(".photographer .bd ul li .selsex .girl").click(function(){
		  $(".photographer .grapher li").each(function(index, element) {
			 if($(this).find(".teachersex").text() == "女"){
				 $(this).css("display","block");
				 }
		     
		   });
	  });*/
	   
	  //获取值
	  //选择基地
	  $(".gmconfirm .submitted").click(function(){
		  var provinces =$("#s_province option:selected").text();
		  var city =$("#s_city option:selected").text();
		  var smallnav =$(".gmbase .bd .smallnav li.checked").text();
		  //var provinces =$(parent.document).find("#s_province option:selected").text();
		  //var city =$(parent.document).find("#s_city option:selected").text();
		  if((provinces =="省份")||(city =="地级市")){
			  $(document.getElementById('iframenone').contentWindow.document.body).find(".selectbase").text(smallnav);
			  if(smallnav ==""){
				  alert("请选择基地！");
				  }
			  }
			  else{
		  		  $(document.getElementById('iframenone').contentWindow.document.body).find(".selectbase").text(provinces+"/"+city);
			  }
	  
	  //选择摄影师
	  var photographer =$('input:radio[name="grapher"]:checked').parent().find(".detail span .teacher").text();
	  var photographer2 =$('input:radio[name="grapher"]:checked').parent().find(".detail span .place").text();
	  //var photographer =$(parent.document).find('input:radio[name="grapher"]:checked').parent().find(".detail span .teacher").text();
	  //var photographer2 =$(parent.document).find('input:radio[name="grapher"]:checked').parent().find(".detail span .place").text();
	  $(document.getElementById('iframenone').contentWindow.document.body).find(".choosephotographer").text(photographer+"/"+photographer2);
	  
	  //选择档期
	  var uidatepickertitle=$(".ui-datepicker-title").text()
	  var uistateactive =$(".ui-state-active").text();
	  $(document.getElementById('iframenone').contentWindow.document.body).find(".chooseschedule").text(uidatepickertitle+"-"+uistateactive);
	  
	  
	  //预定套餐
	  var servicelabel =$('input:checkbox[name="servicelabel"]:checked').val();
	  var clotheslabel =$('input:checkbox[name="clotheslabel"]:checked').val();
	  var projectlabel =$('input:checkbox[name="projectlabel"]:checked').val();
	  var videolabel =$('input:checkbox[name="videolabel"]:checked').val();
	  var scenelabel =$('input:checkbox[name="scenelabel"]:checked').val();
	  var productslabel =$('input:checkbox[name="productslabel"]:checked').val();
	  var wayslabel =$('input:checkbox[name="wayslabel"]:checked').val();
	  $(document.getElementById('iframenone').contentWindow.document.body).find(".bookPackages").text(servicelabel+"/"+clotheslabel+"/"+projectlabel+"/"+videolabel+"/"+scenelabel+"/"+productslabel+"/"+wayslabel);
	  
	  //留言
	  var scenetext =$(".scenetext").val();
	  var waystext =$(".waystext").val();
	  $(document.getElementById('iframenone').contentWindow.document.body).find(".resultstext").text(scenetext+"\r\n"+waystext);
	  
	  //提交时候提示
	  //var inputgrapher=$('input:radio[name="grapher"]');
//	  if(inputgrapher.is(':checked')){
//		  }
//		  else{
//			  alert(1)
//			  }
	  //填写个人信息
	  var nametext =$(".gmusertext .nametext").val();
	  var qqtext =$(".gmusertext .qqtext").val();
	  var phonetext =$(".gmusertext .phonetext").val();
	  $(document.getElementById('iframenone').contentWindow.document.body).find(".nameqqcontact").text(nametext+"/"+qqtext+"/"+phonetext);
	  if((nametext =="")||(phonetext =="")){
		  $(document.getElementById('iframenone').contentWindow.document.body).find(".nameqqcontact").text("");
		  alert("请把个人信息填写完整！")
		  }
	  });
	   
	  /*测试按钮
	  $(".confirm .submitted").click(function(){
		 //document.documentElement.style.overflow='hidden';
		 $("#htmlover").css("overflow-y","hidden");
	  });
		
	  $(".confirm .quxiao").click(function(){
		 $("html").css("overflow","auto");
		 $("#htmlover").css("overflow-y","auto");
	  });*/
	  	  
	  /*//禁止滚动条
	  document.documentElement.style.overflow='hidden';
	  var move=function(e){
	  e.preventDefault && e.preventDefault();
	  e.returnValue=false;
	  e.stopPropagation && e.stopPropagation();
	  return false;
		}
	  var keyFunc=function(e){
	  if(37<=e.keyCode && e.keyCode<=40){
	  return move(e);
	  }
	  }
		document.body.onkeydown=keyFunc;*/
		
		
});

