// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),600);},1200);
});

// Scroll Reveal
const fades = document.querySelectorAll(".fade");
const reveal = () => {
  fades.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-100){el.classList.add("show");}});
};
window.addEventListener("scroll",reveal);
reveal();

// Scroll Top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll",()=>{scrollBtn.style.display = window.scrollY>300?"block":"none";});
scrollBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});

// Dark / Light Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";
});

// EN / BN Toggle
const langBtn = document.getElementById("langToggle");
const identityText = document.getElementById("identityText");
const englishText = `<p>Nature calls to me in a silent language only the heart can hear.</p><p>Beneath the endless blue sky, with the soft touch of the wind, I feel deeply rooted—exactly where I belong.</p><p>I long to drift with the ocean’s currents, where the waves whisper stories and my restless mind finally finds peace.</p><p>Lost among trees, I discover myself anew; surrounded by mountains, water, and sky, something honest awakens within me.</p><p><b>Those who love nature truly know how to love people—and that belief is who I am.</b></p>`;
const banglaText = `<p>প্রকৃতি আমাকে ডাকে এক নীরব ভাষায়, যা শুধু হৃদয়ই বুঝতে পারে।</p><p>অসীম নীল আকাশের নিচে, বাতাসের কোমল ছোঁয়ায় আমি গভীরভাবে অনুভব করি—এটাই আমার ঠিকানা।</p><p>সমুদ্রের স্রোতের সঙ্গে ভেসে যেতে ইচ্ছে করে, যেখানে ঢেউরা নিজেদের গল্প ফিসফিস করে আর আমার অস্থির মন ধীরে ধীরে শান্ত হয়ে যায়।</p><p>গাছের ভেতর হারিয়ে গিয়ে নিজেকে নতুন করে আবিষ্কার করি; পাহাড়, জল আর আকাশের মাঝে আমার ভেতরের সৎ মানুষটি জেগে ওঠে।</p><p><b>যে প্রকৃতিকে ভালোবাসতে জানে, সে মানুষকেও সত্যিকার অর্থে ভালোবাসতে জানে—এই বিশ্বাসটাই আমার পরিচয়।</b></p>`;
let isEnglish=true;
langBtn.addEventListener("click",()=>{
  if(isEnglish){identityText.innerHTML=banglaText;langBtn.textContent="EN";}
  else{identityText.innerHTML=englishText;langBtn.textContent="BN";}
  isEnglish=!isEnglish;
  identityText.classList.remove("show");
  setTimeout(()=>identityText.classList.add("show"),50);
});

// Animate paragraphs
const projectSection = document.querySelector(".projects");
const animateText = ()=>{
  if(projectSection.getBoundingClientRect().top < window.innerHeight - 100){
    identityText.classList.add("show");
  }
};
window.addEventListener("scroll",animateText);
animateText();





// About Books EN/BN Toggle
const aboutSection = document.querySelector(".fade"); // About Books section
const toggleBtn = aboutSection.querySelector(".langToggle"); // BN / EN button

const englishText = `
  <h2>A few words about books</h2>
  <p><b>I love books deeply.</b></p>
  <p>As I turn each page, it feels like I’m not just flipping paper—</p>
  <p>I’m slowly discovering myself.</p>
  <p>I love seeing every letter, I love understanding every line,</p>
  <p>because within those lines, I find pieces of who I am.</p>
  <p>Books have taught me so many things—</p>
  <p>how to think, how to understand,</p>
  <p>how to remain deep even in silence.</p>
  <p>Books didn’t just give me knowledge;</p>
  <p>they taught me how to understand people,</p>
  <p>and more than that—how to understand myself.</p>
`;

const banglaText = `
  <h2>বই নিয়ে কিছু কথা</h2>
  <p>বই আমার খুব ভালো লাগে।</p>
  <p>বইয়ের প্রতিটি পৃষ্ঠা উল্টাতে গিয়ে মনে হয়, আমি শুধু পাতা নয়—নিজেকেই ধীরে ধীরে আবিষ্কার করছি।</p>
  <p>প্রতিটি অক্ষর দেখতে ভালো লাগে, প্রতিটি লাইন বুঝতে ভালো লাগে,</p>
  <p>কারণ এই লাইনগুলোর ভেতরেই আমি নিজেকে খুঁজে পাই।</p>
  <p>বই আমাকে অনেক কিছু শিখিয়েছে—</p>
  <p>কিভাবে ভাবতে হয়, কিভাবে বুঝতে হয়,</p>
  <p>কিভাবে নীরবে গভীর হয়ে থাকতে হয়।</p>
  <p>আসলে বই আমাকে শুধু জ্ঞান দেয়নি,</p>
  <p>বই আমাকে মানুষ বুঝতে শিখিয়েছে,</p>
  <p>আর তার চেয়েও বেশি—নিজেকে বুঝতে শিখিয়েছে।</p>
`;

let isEnglish = true;

toggleBtn.addEventListener("click", () => {
  aboutSection.innerHTML = (isEnglish ? banglaText : englishText) + `<button class="langToggle">BN / EN</button>`;
  isEnglish = !isEnglish;

  // Re-add listener to the new button after switching
  const newBtn = aboutSection.querySelector(".langToggle");
  newBtn.addEventListener("click", () => toggleBtn.click());
});
