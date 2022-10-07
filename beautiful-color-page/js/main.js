$(document).ready(function(){
    $(".item-color a").click(function(){
		$(".item-color a").removeClass("active");
		$(this).toggleClass("active");
	})
    $(".group ul li").click(function(){
        let text=$(this).find(".color-text").html();
        copyText(text);
    })
})
function copyText(text) {
	var oInput = document.createElement('input');
	oInput.value = text;
	document.body.appendChild(oInput);
	oInput.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	oInput.className = 'oInput';
	oInput.style.display='none';
	alert('复制成功')
}