function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="deepak"&& password=="deepak123",username=="kavi"&& password=="kavi123",username=="vicky"&& password=="vicky123")
{
alert("sign_in succesfully");
return false;
}
else
{
alert("sign_in failed");
}
}