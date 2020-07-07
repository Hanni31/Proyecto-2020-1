var pp = true;//play y pausa
let t = 0; //variable que permite que se reinicie la grafica
function mecanismo(){
 if(pp){
    document.getElementById("ad").innerHTML = "play";
    noLoop();
    pp=false;
 }else{
   document.getElementById("ad").innerHTML = "pausa";
   loop();
   pp= true;
}}
function setup() { //Crea el canvas
  canvas = createCanvas(300, 300, WEBGL);
  canvas.parent("helice"); //Ingresa el objeto dentro del div de html
}
function draw() {
  rotateX(PI / 3);
  translate(0,0,2*t);
  stroke(0,0,0); //Plano, negrito
  point(0,0);
  stroke(255,0,0); //Grafica, rojita
  let equis =sin(t) * 100;
  let lle = cos(t) * 100;
  point(equis,lle);
  let legend = 'Tu punto es:( ' + nfc(equis,3) + ' , ' + nfc(lle,3) + ' , ' + nfc(2*t,3) +' ) \t\t\t'; 
  document.getElementById("texto").innerHTML= legend;
  t += 0.025; //0.01;
  if(nfc(2*t,3)<100){ //Aquí se revisa si t tiene el valor necesario para seguir graficando o es necesario reiniciar
      t += 0.025; //0.01;
  }
  else{ //Aquí se reinicia 
      t = 0;
      equis = 0;
      lle = 0;
      background(255,226,188);
  }
}
