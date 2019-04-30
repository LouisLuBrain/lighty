// 加载绑定
window.onload=function () {
	$(".dropdown_title").bind("click",function(){
		var title = this;
		if ($(title).attr("status")=="off") {
			$(title).next().css("max-height","1000px");
			$(title).attr("status","on");
		}
		else{
			$(title).next().css("max-height","0px");
			$(title).attr("status","off");
		}
	});
}