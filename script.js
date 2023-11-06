const container = document.querySelector('#container');

const p1 = document.createElement('p');
p1.textContent = 'Hey I\'m red!';
p1.style.color = 'red';
container.appendChild(p1);

const heading1 = document.createElement('h3');
heading1.textContent = 'I\'m a blue h3!';
heading1.style.color = 'blue';
container.appendChild(heading1);

const card = document.createElement('div');
card.style.cssText = 'border: 4pd solid black;background-color: #FFC0CB';

subheading = document.createElement('h1');
subheading.textContent = 'I\'m in a div';
para = document.createElement('p');
para.textContent = 'Me TOO!';

card.appendChild(subheading);
card.appendChild(para);
container.append(card);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});
