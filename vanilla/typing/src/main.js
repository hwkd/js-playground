import "./style.css";

const phrases = [
  "The quick brown fox jumps over the lazy dog while humming a cheerful tune, exploring the meadow, chasing butterflies, and enjoying the peaceful sound of a flowing stream.",
  "Beneath the starry sky, a cat quietly prowled the garden, observing shadows and listening to whispers of the wind, while the moon cast its soft, silvery glow everywhere.",
  "In the heart of the bustling city, the aroma of fresh bread mingled with the sound of laughter, footsteps, and the occasional distant whistle of a passing train.",
  "The mountain trail twisted and turned, offering breathtaking views of valleys below, where rivers sparkled in the sunlight and tiny cottages nestled among fields of vibrant flowers and tall trees.",
  "As the clock struck midnight, a gentle breeze carried the scent of jasmine through the open window, bringing a sense of calm to the quiet, dimly lit room.",
  "The ship sailed through the calm waters, its white sails glowing under the golden light of the setting sun, as seabirds soared and dived gracefully over the rolling waves.",
  "On a crisp autumn morning, leaves crunched underfoot as the forest came alive with the chatter of squirrels, the rustle of leaves, and the distant sound of a waterfall.",
  "The library smelled of old books and polished wood, filled with the soft hum of whispered conversations, the rustle of pages turning, and the occasional click of a pen.",
  "A gentle rain tapped on the window, creating a soothing rhythm that blended with the distant rumble of thunder and the soft glow of streetlights shimmering on wet pavement.",
  "The sandy beach stretched endlessly, waves crashing rhythmically along the shore as children built sandcastles, seagulls circled overhead, and the salty breeze carried the scent of the sea.",
];
const phrase = phrases[Math.floor(Math.random() * phrases.length)];

const containerNode = document.getElementById("container");
const phraseNode = document.getElementById("phrase");

let idx = 0;

phraseNode.innerHTML = phrase
  .split("")
  .map((ch) => `<span>${ch}</span>`)
  .join("");
phraseNode.children[0].classList.add("current");

document.addEventListener("keydown", function (ev) {
  const spanNodes = phraseNode.children;

  if (ev.key === "Backspace" && idx > 0) {
    spanNodes[idx].classList.remove("current");
    idx--;
    spanNodes[idx].classList.add("current");
    phraseNode.children[idx].classList.remove("correct", "wrong");
  }

  if (ev.key.length !== 1 || idx >= phrase.length) {
    return;
  }

  if (ev.key === phrase[idx]) {
    spanNodes[idx].classList.add("correct");
  } else {
    spanNodes[idx].classList.add("wrong");
  }
  spanNodes[idx].classList.remove("current");
  idx++;
  spanNodes[idx].classList.add("current");
});
