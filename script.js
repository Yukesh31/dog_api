
let cat = document.getElementById('cat');
let btn_cat = document.getElementById('btn_cat');

btn_cat.addEventListener('click', get_random_cat);

async function get_random_cat() {
  let a = await fetch('https://random.dog/woof.json');
  let b = await a.json();
  let alt = 'CAT';
  cat.innerHTML = `
  <img src = "${b.url}" alt=${alt}>
  `;
}