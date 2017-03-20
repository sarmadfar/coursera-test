function passwordverification ()
{
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	if (pass1==pass2)
		return true;
		else{
		alert("please check your password again!")
	return false;	
	}
}
function vertical ()
{
	document.getElementById("baba").innerHTML = "";
	var username = document.getElementById('haha').value;
	var i = 0;
	while (i<username.length){
		document.getElementById("baba").innerHTML += username[i]+"<br>";
		i++;
	}
}
function validation ()
{
	var phonenumber = document.getElementById("oaoa").value;
	var regex = /^[0-1-2-3-4-5-6-7-8-9]{11}$/;
	if (regex.test(phonenumber))
	document.getElementById("lala").innerHTML = "Input accepted";
	else document.getElementById("lala").innerHTML = "The phone number format should be 09XXXXXXXXX";
	}
function multiple ()
{
var datainput2 = document.getElementById("m4").value;
var datainput1 = document.getElementById("m5").value;
document.getElementById("Mu5").innerHTML = (datainput1*datainput2);
}
function divide ()
{
var datainput2 = document.getElementById("m4").value;
var datainput1 = document.getElementById("m5").value;
document.getElementById("Mu5").innerHTML = (datainput1/datainput2);
}
