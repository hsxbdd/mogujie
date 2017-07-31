
window.onload=function() { 
	var s=document.getElementById("zc").onclick=function test(){
 	var pattern = /^1\d{10}$/;
 	var x=document.getElementById("srsjh").value;
 	if(x==""){
 		alert('请输入手机号');
 		return;
 	}
 	var res = pattern.test(x);
 	if(res){
 		return;
 	}
 	else{
 		alert('输入的手机号不合法')
 	}
 }
   
}