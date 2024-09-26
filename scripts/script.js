




document.getElementsByTagName('H1')[0].style.color = 'green';

window.onload = function() {
    localStorage.setItem('Moves', 0);
    console.log('Moves reset to 0 on page refresh');
};
//Cached element by ID
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
containerDiv.style.marginTop = '10px';


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


let d_window2 = div_window[0].cloneNode(true);  //clone the first div window
let d_window3 = div_window[0].cloneNode(true);
containerDiv.appendChild(div_window[0]);
containerDiv.appendChild(d_window2);
containerDiv.appendChild(d_window3);
document.body.appendChild(containerDiv);





let form = document.createElement('form');  //create form element

main_body.appendChild(form); //append form to the body
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your name');
input.setAttribute('class', 'form-control');
input.setAttribute('id', 'name');
input.setAttribute('required', 'true');  //set the input as required field for html validation

document.querySelector('form').appendChild(input);

//console.log(document.querySelector('form').childNodes[0]);

let button = document.createElement('button')

button.innerHTML = 'Submit Score';
button.setAttribute('type', 'submit');
button.setAttribute('class', 'btn btn-primary');

document.querySelector('form').appendChild(button);



document.querySelector('form').style.display = 'flex';
document.querySelector('form').style.justifyContent = 'space-evenly';





let number_of_blocks = document.createElement('input');
number_of_blocks.setAttribute('id', 'number_of_blocks');
number_of_blocks.setAttribute('class', 'form-control');
number_of_blocks.setAttribute('required', 'true');
document.querySelector('form').appendChild(number_of_blocks);
document.querySelector('form').childNodes[2].style.marginTop = '0px';
number_of_blocks.setAttribute('type', 'number');
number_of_blocks.setAttribute('min', '3');
number_of_blocks.setAttribute('max', '5');
number_of_blocks.setAttribute('value', '3');
number_of_blocks.setAttribute('step', '1');
let label = document.createElement('label');
label.setAttribute('for', 'number_of_blocks');
label.textContent = 'number of blocks: ';
document.querySelector('form').insertBefore(label, number_of_blocks);

let number_reference = document.getElementById('number_of_blocks').value;


 let Moves = 0;










let h2 = document.createElement('h2');
h2.textContent = 'Moves: ' + localStorage.getItem('Moves');  //modify the text content of the h2 element
document.body.appendChild(h2);





function square(size, color,divnum = 0) {
    // Create a new div element for the square
    let square = document.createElement('div');
    square.setAttribute('class', 'square fade');
    square.setAttribute('id', 'square');

    // Set some properties for the square
    square.style.width = size;
    square.style.height = '60px';
    square.style.backgroundColor = color;
    square.classList.add('square', divnum);
   


    //Cached element using querySelectorAll
     let div_window = document.querySelectorAll('.viewer');
     
   // let div_window = Array.from(containerDiv.querySelectorAll('.viewer'));

    
    div_window[divnum].insertBefore(square, div_window[divnum].childNodes[0]);

    //Add click event listener to the square


    return ;
}



number_reference 

let squares = [
    { size: '150px', color: 'yellow', divnum: 0 },
    { size: '120px', color: 'red', divnum: 0 },
    { size: '90px', color: 'green', divnum: 0 },
    { size: '60px', color: 'blue', divnum: 0 },
    { size: '30px', color: 'orange', divnum: 0 }
];

for (let i in squares) {
    if (i >= number_reference) break;
    let squareProps = squares[i];
    square(squareProps.size, squareProps.color, squareProps.divnum);
    
}

function updateBlocks(selectedValue) {
    try {

     
        // Validate the number of blocks
        if (selectedValue < 3 || selectedValue > 5) {
            throw new Error('Number of blocks must be between 3 and 5.');
        }

        
        // Clear existing squares
        document.querySelectorAll('.square').forEach(square => square.remove());

        // Call the square function to create and append squares based on the selected value
        let colors = ['yellow', 'red', 'green', 'blue', 'orange'];
        let sizes = ['150px', '120px', '90px', '60px', '30px'];
        for (let i = 0; i < selectedValue; i++) {
            square(sizes[i], colors[i], 0);
        }
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}




number_of_blocks.addEventListener('change', function(e) { //event listener for the number of blocks input
    let selectedValue = parseInt(e.target.value);
    //console.log('Number of blocks selected:', selectedValue);
    updateBlocks(selectedValue);
    localStorage.setItem('Number of Blocks', selectedValue);
});




// Call the square function to create and append a square
// let yellow = square('150px', 'yellow', 0);
// let red = square('120px', 'red', 0);
// let green = square('90px', 'green', 0);
// let blue = square('60px', 'blue', 0);
// let orange = square('30px', 'orange', 0);
// //let div_window_1 = document.querySelectorAll('.viewer');


let div_window_1 = document.querySelectorAll('.viewer');
console.log(div_window_1);
console.log(div_window);

//I think this counts as element modification from user interaction
div_window_1.forEach(viewer => {
    viewer.addEventListener('click', function(e) { //event listener for the viewer
        console.log(e.target);


       if (e.target != viewer.firstChild) return; //firstChild relation to the viewer
        e.preventDefault();
        console.log('Viewer was clicked');


        if (e.target.classList.contains('square')){
            let backgroundColor = window.getComputedStyle(e.target).backgroundColor;  //get the background color of the square
            let size = window.getComputedStyle(e.target).width;
            let pixelWidth = parseInt(size); 
           let new_place = e.target.classList[2];
           new_place = Number(new_place)+1;


           
           let Moves = parseInt(localStorage.getItem('Moves')) || 0;
           Moves++;
           localStorage.setItem('Moves', Moves);
          // console.log('Move and test: ' + Moves);


        if (new_place > 2){
            new_place = 0;
        }
       


            e.target.remove();

    //    let new_square = square(size,backgroundColor,new_place);

        //Iterated over collection of elements to check for placement conditions
    let canPlace = true;
    viewer.childNodes.forEach(child => {
        if (child.classList && child.classList.contains('square')) {
            let childWidth = parseInt(window.getComputedStyle(child).width);
            if (pixelWidth > childWidth) {
                canPlace = false;
            }
        }
    });

    if (canPlace) {
        e.target.remove();
        let new_square = square(size, backgroundColor, new_place);
    } else {
        //console.log('Cannot place a larger square on top of a smaller square. Restarting game...');
        window.alert('Cannot place a larger square on top of a smaller square. Restarting game...');  //BOM Method
        window.location.reload();  //BOM Method
        localStorage.setItem('Moves', 0);
    }

}
       

        document.body.removeChild(document.getElementsByTagName('h2')[0]);
        let h2 = document.createElement('h2');
h2.textContent = 'Move: ' + localStorage.getItem('Moves');
document.body.appendChild(h2);
form.insertAdjacentElement('afterend', h2);

    });
});


//Event listener for the form
form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputValue = document.getElementById('name').value;
    let name = input.value;

    
    //Dom event based validation for the name input
    try {
        // Validate the name input
        if (/[^a-zA-Z0-9 ]/.test(name)) {
            throw new Error('Name cannot contain special characters.');
        }else{
            //for name update
            localStorage.setItem('name', inputValue);

        let h1 = document.getElementsByTagName("h1")[0]
        h1.innerHTML = localStorage.getItem('name') +`'s` +' Tower of Hanoi';
        h1.style.color = 'DarkBlue'; //change the color of the h1 element on interaction with user.
        let displayDiv = document.createElement('div');

displayDiv.setAttribute('id', 'displayDiv');
displayDiv.style.margin = '20px';
displayDiv.style.backgroundColor = 'black';
displayDiv.style.color = 'white';
displayDiv.style.padding = '10px';
displayDiv.style.height ='fit-content';
main_body.appendChild(displayDiv);
displayDiv.innerHTML = `<p>Name : ${localStorage.getItem('name')}| Number of Blocks : ${number_of_blocks.value} |   Moves : ${localStorage.getItem('Moves')}</p>`;
localStorage.setItem('displayDivContent', displayDiv.innerHTML);


}
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }


});

window.addEventListener('load', function() {
    let displayDivContent = localStorage.getItem('displayDivContent');
    if (displayDivContent) {
        let displayDiv = document.getElementById('displayDiv');
        if (!displayDiv) {
            displayDiv = document.createElement('div');
            displayDiv.setAttribute('id', 'displayDiv');
            displayDiv.style.margin = '20px';
            displayDiv.style.backgroundColor = 'black';
            displayDiv.style.color = 'white';
            displayDiv.style.padding = '10px';
            displayDiv.style.height = 'fit-content';
            main_body.appendChild(displayDiv);
        }
        displayDiv.innerHTML = displayDivContent;
    }
});



console.log(div_window);

div_window_1.forEach(viewer => {
    viewer.addEventListener('onchange', function(e) {
        console.log(e.target);
    });
});
