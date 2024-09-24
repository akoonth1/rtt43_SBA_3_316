
document.getElementsByTagName('H1')[0].style.color = 'green';



let main_body = document.getElementById('main_body');


main_body.classList.add('text-center');

main_body.style.display = 'flex';
main_body.style.flexDirection = 'column';
main_body.style.alignItems = 'center';
main_body.style.justifyContent = 'center';
main_body.style.backgroundColor = 'lightblue';
main_body.style.height = '100vh';
main_body.style.backgroundColor = 'lightblue';

let form = document.createElement('form');

main_body.appendChild(form);

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your name');
input.setAttribute('class', 'form-control');
input.setAttribute('id', 'name');
input.setAttribute('required', 'true');

document.querySelector('form').appendChild(input);

console.log(document.querySelector('form').childNodes[0]);

let button = document.createElement('button')

button.innerHTML = 'Submit';
button.setAttribute('type', 'submit');
button.setAttribute('class', 'btn btn-primary');

document.querySelector('form').appendChild(button);

//localStorage.setItem('name', 

//window.alert('Hello World');

let score = 0;
form.addEventListener('change', function(e){
    let inputValue = document.getElementById('name').value;
//    console.log(e.target);
//    console.log(inputValue);

    localStorage.setItem('name', inputValue);
    localStorage.setItem('time', new Date());
    localStorage.setItem('score', score);

let h1 = document.getElementsByTagName("h1")[0]
h1.innerHTML = 'Hello ' + localStorage.getItem('name');

});


console.log(localStorage.getItem('name')+ ' is the name stored in local storage');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputValue = document.getElementById('name').value;
    console.log(inputValue);
    console.log('Form Submitted');
    console.log('Hello ' + inputValue);
    console.log('Time: ' + new Date());
    console.log('Score: ' + score);
    console.log('Score: ' + localStorage.getItem('score'));
    console.log('Time: ' + localStorage.getItem('time'));
    form.remove();
});



let div_window = document.getElementsByTagName('div');
div_window[0].style.display = 'flex';
div_window[0].style.flexDirection = 'row';
//div_window[0].innerText = 'Score: ' + score;

function  square => document.createElement('div');
square.setAttribute('class', 'square');
square.setAttribute('id', 'square');

div_window[0].appendChild(square);

square.addEventListener('click', function(e){

    e.preventDefault();
    console.log('Clicked');

    score++;
    square.remove();

});



document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
  });
