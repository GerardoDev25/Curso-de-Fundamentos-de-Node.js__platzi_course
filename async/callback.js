function soyAsincrona() {
  console.log('hola soy una funcion asincorna');
  setTimeout(() => {
    console.log('estoy siendo asincrona');
  }, 1000);
  
}
console.log('inicion');
soyAsincrona();
console.log('fin');
