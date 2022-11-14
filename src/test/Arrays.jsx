const fruits = ["pear", "apple", "banana", "melon", "watermelon", "orange", "mango"];

const emotions = {
 sadness: {
  description: 
  "Sadness is an emotional pain associated with, or characterized by, feelings of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow...",
 whatToDo: "if you feel sad you must listen music, walk, go dancing, talk with beloved one, etc ...",
 },
 happyness: {
  description: "Happiness is a sense of well-being, joy, or contentment. When people are successful, or safe, or lucky, they feel happiness",
  whatToDo: "when you feel happy you can go and share your happyness with friends, express yourself making art, cooking, etc...",
 }
};

const animal = {
 dog: {
  color: "black",
  legs: 4,
  sound: "guau!"
  },
  cat: {
   color: "orange",
   legs: 4,
   sound: "miau!"
  },
  whale: {
   color: "blue",
   legs: "no legs",
   sound: "ultrasonic singing!"
  },
 };

 const translations =  {
  es:{
  title: "Título",
  headerLight: "Claro",
  headerDark: "Oscuro",
  headerFire: "Fuego",
  headerWater: "Agua",
  buttonLogin: "Iniciar sesión",
  buttonLogout: "Cerrar sesión",
  mainSubtittle1: "Tema 1",
  mainWelcome: "bienvenido usuari@",
  mainPar1: "Aquí va el contenido del tema 1",
  mainSubtittle2: "Tema 2",
  mainGreeting: "felicitaciones querido usuario, llegaste al segundo tema",
  mainPar2: "Aquí va el contenido del tema 2",
  footerText: "Practica tu codigo todos los días",
  notAuthenticated:"Debes iniciar sesion para acceder al contenido",
  buttonText: "volver",  
  },
  en:{
  title: "Title",
  headerLight: "Light",
  headerDark: "Dark",
  headerFire: "Fire",
  headerWater: "Water",
  buttonLogin: "Login",
  buttonLogout: "Logout",
  mainSubtittle1: "Theme 1",
  mainWelcome: "welcome user",
  mainPar1: "here comes theme 1 content",
  mainSubtittle2: "theme 2",
  mainGreeting: "Greetings dear User, you have reached the second theme",
  mainPar2: "here comes theme 2 content",
  footerText: "Coding is an everyday thing",
  notAuthenticated: "you must login to access this page content",
  buttonText: "back",
  },
  por: {
  title: "Título",
  headerLight: "Claro",
  headerDark: "Escuro",
  headerFire: "Fogo",
  headerWater: "Água",
  buttonLogin: "Iniciar sessão",
  buttonLogout: "Fechar Sessão",
  mainSubtittle1: "Tópico 1",
  mainWelcome: "Bem vind@ usuári@",
  mainPar1: "Aqui está o conteúdo do tópico 1",
  mainSubtittle2: "Tópico 2",
  mainGreeting: "Parabéns car@ usuári@, você chegou ao segundo tópico",
  mainPar2: "Aqui está o conteúdo do tópico 2",
  footerText: "Pratique seu código todos os dias",
  notAuthenticated: "Você deve fazer login para acessar o conteúdo",
  buttonText: "retorna",
  }
 };

module.exports = {
fruits,
emotions,
animal,
translations,
}