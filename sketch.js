let currentText = 'listen';
let bgMusic;

// function preload() {
//   bgMusic = loadSound('/sound/knockKnock.mp3');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  // userStartAudio(); 
  // bgMusic.loop();
}

function draw() {
  background(0, 0, 0);

  fill(255, 255, 255);

  let offset1 = (millis() % 900) / 4000 * 300 - 30; // Offset based on time
  let offset2 = (millis() % 800) / 4200 * 300 - 30; 
  let offset3 = (millis() % 700) / 4400 * 300 - 30; 
  let offset4 = (millis() % 600) / 4600 * 300 - 30; 
  let offset5 = (millis() % 800) / 4800 * 300 - 30; 
  let offset6 = (millis() % 900) / 4000 * 300 - 30; 

  // Eyes
  textSize(30);
  let shakeX = random(-1, 1); // Horizontal shake
  let shakeY = random(-1, 1); // Vertical shake
  // text(currentText, width / 2 - 60 + shakeX, height / 2 - 180 + shakeY); // Left eye
  // text(currentText, width / 2 + 60 + shakeX, height / 2 - 180 + shakeY); // Right eye

  // // Pupils
  // textSize(15);
  // text(currentText, width / 2 - 60 + shakeX, height / 2 - 170 + shakeY); // Left pupil1
  // text(currentText, width / 2 - 60 + shakeX, height / 2 - 160 + shakeY); // Left pupil2

  // text(currentText, width / 2 + 60 + shakeX, height / 2 - 170 + shakeY); // Right pupil1
  // text(currentText, width / 2 + 60 + shakeX, height / 2 - 160 + shakeY); // Right pupil2

  // // Nose
  // textSize(10);
  // text(currentText, width / 2 + shakeX, height / 2 - 90 + shakeY);
  // text(currentText, width / 2 + shakeX, height / 2 - 100 + shakeY);
  // text(currentText, width / 2 + shakeX, height / 2 - 110 + shakeY);


  // // Mouth
  // textSize(50);
  // text(currentText, width / 2 + shakeX, height / 2 - 50 + shakeY);

  // // Ears
  // textSize(20);
  // text(currentText, width / 2 - 120 + shakeX, height / 2 - 130 + shakeY); // Left ear1
  // text(currentText, width / 2 - 120 + shakeX, height / 2 - 110 + shakeY); // Left ear2

  // text(currentText, width / 2 + 120 + shakeX, height / 2 - 130 + shakeY); // Right ear1
  // text(currentText, width / 2 + 120 + shakeX, height / 2 - 110 + shakeY); // Right ear2


  // Body
  textSize(12);
  for (let i = -10; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 - 105);
  }
  for (let i = -30; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 - 90);
  }
  for (let i = -50; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset5, height / 2 - 75);
  }
  for (let i = -30; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 - 60);
  }
  for (let i = -100; i <= 80; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 - 45);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset3, height / 2 - 30);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset4, height / 2 - 15);
  }
  for (let i = -80; i <= 50; i += 30) {
    text(currentText, width / 2 + i + offset6, height / 2);
  }
  for (let i = -90; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset5, height / 2 + 15);
  }
  for (let i = -50; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 + 30);
  }
  for (let i = -100; i <= 100; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 45);
  }
  for (let i = -110; i <= 130; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 60);
  }
  for (let i = -100; i <= 80; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 75);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset3, height / 2 + 90);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset4, height / 2 + 105);
  }
  for (let i = -30; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 + 120);
  }
  for (let i = -100; i <= 100; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 135);
  }
  for (let i = -100; i <= 80; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 150);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 165);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 180);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset3, height / 2 + 195);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 210);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 225);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset3, height / 2 + 240);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset4, height / 2 + 255);
  }
  for (let i = -50; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset5, height / 2 + 270);
  }
  for (let i = -30; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 + 285);
  }
  for (let i = -100; i <= 100; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 300);
  }
  for (let i = -100; i <= 80; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 315);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset3, height / 2 + 330);
  }
  for (let i = -120; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset4, height / 2 + 345);
  }
  for (let i = -50; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset5, height / 2 + 360);
  }
  for (let i = -30; i <= 50; i += 20) {
    text(currentText, width / 2 + i + offset6, height / 2 + 375);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset1, height / 2 + 390);
  }
  for (let i = -150; i <= 150; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 405);
  }
  for (let i = -100; i <= 100; i += 20) {
    text(currentText, width / 2 + i + offset2, height / 2 + 420);
  }
}

function keyPressed() {
  if (key === '0') {
    currentText = 'here';
  } else if (key === '1') {
    currentText = 'you!';
  } else if (key === '2') {
    currentText = 'me? ';
  }
  else if (key === '3') {
    currentText = 'how? ';
  }
  else if (key === '4') {
    currentText = 'why? ';
  }
  else if (key === '5') {
    currentText = '*^%';
  }
  else if (key === '6') {
    currentText = 'wait ';
  }
  else if (key === '7') {
    currentText = 'no...';
  }
  else if (key === '8') {
    currentText = 'no! ';
  }
  else if (key === '9') {
    currentText = '#!_/';
  }
}