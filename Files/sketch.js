/**
* @author Emily Wang <write2emily@hotmail.com>
*  Date: Monday May 4th 2018
* About: This program reads from a JSON file and an API
**/

var data;
var weatherData;
var weather;

function preload() {
  testData = loadJSON("hospTest.json");
}

function setup() {
  createCanvas(400, 400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=183a3747c425b5607ca2c1b9ff792014', gotData);
}

function gotData(weatherData){
  weather=weatherData;
}

function draw(){
  if (weather){
  var temp=weather.main.temp;
  console.log(temp);
  if (temp>273){
    background(200,0,0);
  }
  else {
    background(0, 80, 200);
  }
}
var question = testData.sentences[0].prompt;
textSize(20);
text(question, 10, 200);
}
