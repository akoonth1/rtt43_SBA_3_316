




document.getElementsByTagName('H1')[0].style.color = 'green';

window.onload = function() {
    localStorage.setItem('score', 0);
    console.log('Score reset to 0 on page refresh');
};

let main_body = document.getElementById('main_body');


main_body.classList.add('text-center');

main_body.style.display = 'flex';
main_body.style.flexDirection = 'column';
main_body.style.alignItems = 'center';
main_body.style.justifyContent = 'center';
main_body.style.backgroundColor = 'lightblue';
main_body.style.height = '100vh';
main_body.style.backgroundColor = 'lightblue';

let containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'containerDiv');
containerDiv.style.display = 'flex';
containerDiv.style.flexDirection = 'row';
containerDiv.style.justifyContent = 'center';
containerDiv.style.alignItems = 'center';
containerDiv.style.marginTop = '20px';


let div_window = document.getElementsByTagName('div');
div_window[0].style.display = 'flex';
div_window[0].style.flexDirection = 'column';
div_window[0].style.alignItems = 'center';
div_window[0].style.justifyContent = 'flex-end';
div_window[0].style.backgroundColor = 'lightgrey';
div_window[0].style.alignSelf = 'last baseline';
div_window[0].classList.add('viewer');
let divWindowWidth = window.clientWidth;
let divWindowHeight = window.clientHeight;


let d_window2 = div_window[0].cloneNode(true);
let d_window3 = div_window[0].cloneNode(true);
containerDiv.appendChild(div_window[0]);
containerDiv.appendChild(d_window2);
containerDiv.appendChild(d_window3);
document.body.appendChild(containerDiv);





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
h1.innerHTML = ' Tower of Hanoi ' + localStorage.getItem('name');

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


//document.createElement('h2').textContent = 'Score: '  + localStorage.getItem('score');
//document.createElement('h2').textContent = 'Time: ' + localStorage.getItem('time');

let h2 = document.createElement('h2');
h2.textContent = 'Score: ' + localStorage.getItem('score');
document.body.appendChild(h2);





function square(size, color,divnum = 0) {
    // Create a new div element for the square
    let square = document.createElement('div');
    square.setAttribute('class', 'square fade');
    square.setAttribute('id', 'square');

    // Set some properties for the square
    square.style.width = size;
    square.style.height = '50px';
    square.style.backgroundColor = color;
    square.classList.add('square', divnum);
   


    // Set random position for the square
    // let randomX = Math.floor(Math.random() * (window.innerWidth - 50));
    // let randomY = Math.floor(Math.random() * (window.innerHeight- 50));
    // square.style.left = randomX + 'px';
    // square.style.top = randomY + 'px';

    // Append the square to the div_window
     let div_window = document.querySelectorAll('.viewer');
   // let div_window = Array.from(containerDiv.querySelectorAll('.viewer'));

    console.log(div_window);
    div_window[divnum].insertBefore(square, div_window[divnum].childNodes[0]);

    //Add click event listener to the square


    // document.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     console.log('Square was clicked');
    //     // Example: Increment the score and update local storage
    //     let score = parseInt(localStorage.getItem('score')) || 0;
    //     score++;
    //     localStorage.setItem('score', score);
    //     console.log('Score: ' + score);
    // });

    return ;
}

// Call the square function to create and append a square
let yellow = square('150px', 'yellow', 0);
let red = square('120px', 'red', 0);
let green = square('90px', 'green', 0);
let blue = square('60px', 'blue', 0);

//let div_window_1 = document.querySelectorAll('.viewer');

//console.log(div_window_1 + ' is the div_window_1');

//     div_window_1.addEventListener('click', function(e) {
//         if (!e.target.classList.contains('viewer')) return;
//    // if (e.target.nodeName !=="A") return; 
//     e.preventDefault();
//     console.log('Square was clicked');
//     // Example: Increment the score and update local storage
//     let score = parseInt(localStorage.getItem('score')) || 0;
//     score++;
//     localStorage.setItem('score', score);
//     console.log('Score: ' + score);
//     //square.remove();

//     //square();
// }
// );
let div_window_1 = document.querySelectorAll('.viewer');
console.log(div_window_1 + ' is the div_window_1');

div_window_1.forEach(viewer => {
    viewer.addEventListener('click', function(e) {
       // if (!e.target.classList.contains('viewer'||'square')) return;
        e.preventDefault();
        console.log('Viewer was clicked');


        if (e.target.classList.contains('square')){
            let backgroundColor = window.getComputedStyle(e.target).backgroundColor;
            let size = window.getComputedStyle(e.target).width;
           let new_place = e.target.classList[2];
           new_place = Number(new_place)+1;

           let score = parseInt(localStorage.getItem('score')) || 0;
           score++;
           localStorage.setItem('score', score);
           console.log('Score: ' + score);
        if (new_place > 2){
            new_place = 0;
        }
       
            e.target.remove();

        let new_square = square(size,backgroundColor,new_place);
        }
        //e.target.remove();
        document.body.removeChild(document.getElementsByTagName('h2')[0]);
        let h2 = document.createElement('h2');
h2.textContent = 'Score: ' + localStorage.getItem('score');
document.body.appendChild(h2);

    });
});



// document.addEventListener('mousemove', (event) => {
//     const x = event.clientX;
//     const y = event.clientY;
  
//     console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
//   });
