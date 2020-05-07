const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt("Give password");

if(userInput == null){
  message = "Oтмененно пользователем!"
} else if(userInput === ADMIN_PASSWORD){
  message = "Добро пожаловать!"
} else {
  message = "Доступ запрещен, неверный пароль!";
};

alert(message);
