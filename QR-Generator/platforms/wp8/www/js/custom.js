var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 250,
	height : 250
});

setInterval(myTimer,2000);

function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";<>?,./|';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}

String.prototype.insertAt = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

function myTimer() {
 
    var randomStr=[];
    for(var i=0;i<=3;i++){
        randomStr[i]=randomString(4, '#aA');
    }
    randomStr[4]=randomString(4, '#aA!');

	var d=new Date();
    var yyyymmdd=d.toISOString().slice(0,10).replace(/-/g,"");

	var plainText=randomStr[0]+"R"+
                randomStr[1]+"I"+
                randomStr[2]+"K"+
                randomStr[3]+"I"+yyyymmdd+randomStr[4];


    var string=document.getElementById("text");
    string.innerHTML="Encryption : "+plainText;
    makeCode(plainText); //Only change when a DOM change
}


function makeCode(num){		
	qrcode.makeCode(num);
}