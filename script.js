const colorState= document.getElementById('color-state');
const inputField = document.getElementById('input-box');
const listContainer= document.getElementById('inlist');
const listNumberContainer= document.getElementById('number');

var listNumber= 0;
listNumberContainer.innerText = String(listNumber);
let dark = false;

if(dark){
    colorState.src= "images/icon-moon.svg";
    light = false;
} else {
    colorState.src= "images/icon-sun.svg";
    light=true;
}


function addToList(){
    if (inputField.value == ''){
        alert('Nothing to add..')
    } else {
        let span = document.createElement('span');
        span.classList.add('list-item');
        listContainer.append(span);
        let p = document.createElement('p');
        p.innerText= inputField.value;
        span.append(p);
        let div = document.createElement('div');
        div.innerHTML= "\u00d7";
        span.append(div);

    }
    
    inputField.value= '';

    countList();
}

function countList(){
    listNumber += 1;
    listNumberContainer.innerText = String(listNumber);

}


// colorState.addEventListener('click',changeColorState())

// function changeColorState(){
//     light= !light;
// }

listContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
    } 
    if (e.target.tagName === 'DIV'){
        e.target.parentElement.remove();
    }
})