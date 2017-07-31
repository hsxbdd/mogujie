function test(){
	var sp1 = document.getElementById('sp1');
	var sp2 = document.getElementById('sp2');
	var sp3 = document.getElementById('sp3');
	var dec = new Date("07/31/2018");
	var myDate = new Date();
	var myDateMs = myDate.getTime();
	var deMs = dec.getTime();
	var del = dec - myDate;
	var secondsNum = 1000;
	var minNum = 60 * secondsNum;
	var hourNum = minNum * 60;
	var dayNum = hourNum * 24;
	var day = Math.floor(del/dayNum);
	var hour = Math.floor(del%dayNum/hourNum);
	var min = Math.floor(del%hourNum/minNum);
	var seconds = Math.floor(del%minNum/1000);
	var str = hour;
	var str1 =  min;
	var str2 = seconds;
	sp1.innerHTML = test1(str);
	sp2.innerHTML = test1(str1);
	sp3.innerHTML =  test1(str2);
}
 setInterval('test()',100)

  function test1(n){
      if(n>=0&&n<=9){
      	return '0'+n;
      }else{
      	return n;
      }
  }