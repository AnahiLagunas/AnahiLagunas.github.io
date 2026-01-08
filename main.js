let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
// main.js actualizado
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo Web')
  .pauseFor(1000)
  .deleteAll() // Borra todo automáticamente para evitar amontonamientos
  .typeString('Marketing Digital Jr ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Creatividad & Datos')
  .pauseFor(1000)
  .deleteAll()
  .start();

//typewriter
  //.pauseFor(2500)
  //.typeString('Soy Programadora Web y lo aprendi en Tecnolochicas')
  //.pauseFor(200)
  //.deleteChars(10)
  //.start();
