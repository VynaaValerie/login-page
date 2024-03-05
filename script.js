
var storeS = localStorage.getItem("users");
if(storeS==null){
  var users = [
    { username: "ardasaha", password: "ardasaha10" },    
    { username: "vynaachan", password: "vynaachan10" }
    ];
    localStorage.setItem("users",JSON.stringify(users));
}
function getUserUsername(username) {
    return JSON.parse(localStorage.getItem('users')).filter(users => users.username === username)
}
function ceklog(){
  var login = localStorage.getItem("login");
  if(login!=null && login=="true"){
document.querySelector(".ardaloginwrap").classList.add("hidden");        
      }
    }
ceklog();

function startlog(){
  var username= document.querySelector("#username").value;
  var password= document.querySelector("#password").value;

 if(getUserUsername(username.trim()).length>0){
   var user = getUserUsername(username.trim())[0];
   if(user.password == password.trim()){
     document.querySelector(".ardaloginwrap").classList.add("hidden");
     localStorage.setItem("login","true");
     }else{       
       document.querySelector("#akses").innerHTML = "username atau password salah!";
      }
    }else{
      document.querySelector("#akses").innerHTML = "user tidak terdaftar";
    }
  }

const show = () =>{
  var password = document.querySelector("#password");
  var sandi = document.querySelector(".icon1");
  var sandidua = document.querySelector(".icon2");
  if (password.type === "password"){
    password.type = "text";
    sandidua.style.opacity = "1";
    sandi.style.opacity = "0";
  }else{
    password.type = "password";
    sandidua.style.opacity = "0";
    sandi.style.opacity = "1";
  }
}
//]]> 
