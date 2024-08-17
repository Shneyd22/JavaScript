const div1 = document.createElement('div');
const body1 = document.querySelector('body');
body1.appendChild(div1);
const parse_data1 = JSON.parse(data1);
console.log(parse_data1);
parse_data1.randomfox.forEach(element => {
    div1.insertAdjacentHTML('beforeend', `<figure>
  <img src="${element}" alt="fox" />
  <figcaption>RandomFox</figcaption>
</figure>`)
});