// Attributes

// Load Music Files
let sound1 = new Tone.Player('media/572215__badoink__video-game-warrior-134-am.wav');
let soundList = new Tone.Players({
  'robo1': 'media/390531__freedomfightervictor__calculating.wav',
  'robo2': 'media/277055__doty21__robot-roar.wav',
  'robo3' : 'media/336882__shahruhaudio__robotic-transform-4.wav',
  'robo4' : 'media/346109__michalwa2003__robot-rumbling.wav', 
  'theme1': 'media/572215__badoink__video-game-warrior-134-am.wav'
});

const delay = new Tone.FeedbackDelay("8n", 0.5);
let soundNames = ['robo1', 'robo2', 'robo3', 'robo4'];
let button;
let buttons = [];

let slider;
let purpleButton; 


// Methods
function preload(){

}
function setup() {
  createCanvas(400, 300);
  sound1.connect(delay);
  soundList.connect(delay);
  delay.toDestination();

  button = createButton('Initiate');
  button.position(220, 260);
  button.mousePressed( ()=>playSound('theme1') );

  // button.mousePressed( ()=> buttonSound('media/572215__badoink__video-game-warrior-134-am.wav'))
  // button.mousePressed(buttonSound);

  // Create a slider
  slider = createSlider(0., 1., 0.5, 0.05); //-> left, right, default, step size
  slider.mouseReleased(()=> {
    delay.delayTime.value = slider.value();
  })

  // Assign each Sound Name to a button in Buttons
  soundNames.forEach((robot, index) =>{
  buttons[index] = createButton(robot);
  buttons[index].position(index*60, 100);
  // play sound callback
  buttons[index].mousePressed( ()=> playSound(robot) );
  })
  purpleButton = document.getElementById('buttonDiv');
  purpleButton.onclick = ()=> playSound('robo1');
}
function draw() { // Music does not go here
  background(160);
  noStroke();
  fill(130, 10, 100)
  rect(0, 55, 400, 20);
  fill(255)
  text("Utilize Components vv", 10, 70);

  fill(130, 10, 100)
  rect(17, 242, 100, 30);
  fill(255)
  text("Player Bin-00101", 20, 260);

  text("Start Theme", 210, 230);

}
function keyPressed(){
  if(key === "1"){
    soundList.player('calc0').start();
  }
  // sound1.playbackRate = (mouseY / 200) + 0.01;
  // sound1.start();
}
function playSound(musicSound = 'robo1'){
  // if(musicSound){musicSound = 'robo3'} // Exception handle
   soundList.player(musicSound).start();
}
