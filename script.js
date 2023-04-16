const form = document.querySelector("form");
const inputs = form.elements;

const registeredUsers = [
  ["Даник", "penis228"],
  ["Захар", "penis228"],
  ["Матвей", "penis228"]
];

function isValid(username, password) {   
  for(var i = 0; i < registeredUsers.length; i++) {
      var temp = registeredUsers[i];
      if (temp[0] == username) {
        var currentPair = temp;
        break;        
      }        
  }     
  if (currentPair && currentPair[1] == password) {
    return true;           
  } else {
    return false;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var username = inputs["login"].value;
  var password = inputs["password"].value;  
    if (!isValid(username, password)){
        message.innerHTML = 'Неверные данные!';}
         else {
        setTimeout(function(){
            window.location.href = 'index2.html';
          }, 2 * 1000);
          { message1.innerHTML = 'Успешный вход!';}
          { message.innerHTML = '';}
    }});

