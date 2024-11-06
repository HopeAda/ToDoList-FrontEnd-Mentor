const colorState= document.getElementById('color-state');
const inputField = document.getElementById('input-box');
const listContainer= document.getElementById('inlist');
const listNumberContainer= document.getElementById('number');
const clearCompleted= document.getElementById('clear-completed');
const background= document.getElementById('background');

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

    addCountList();
}

function addCountList(){
    listNumber += 1;
    listNumberContainer.innerText = String(listNumber);

}
function minusCountList(){
    if (listNumber>0){
        listNumber -= 1;
        listNumberContainer.innerText = String(listNumber);

    }

}


// colorState.addEventListener('click',changeColorState())

// function changeColorState(){
//     light= !light;
// }

listContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
        if (e.target.classList.contains('checked')){
            minusCountList();
        } else {
            addCountList();
        }
    } 
    if (e.target.tagName === 'DIV'){
        e.target.parentElement.remove();
        if (!p.classList.contains('checked')){
            minusCountList();
        }
    }
})


// Clear completed todos

clearCompleted.addEventListener('click', ()=>{
        let v= listContainer.getElementsByClassName('checked');
        for (var i=0; i< v.length; i++){
            console.log(i);
            i.parentElement.remove();

        }
})

// Light and Dark Modes

function backgroundTheme(theme,icon){
    background.src= `images/bg-desktop-${theme}.jpg`
    colorState.src= `images/icon-${icon}.svg`
}
function lightMode(){
    backgroundTheme('light','sun');

}

function darkMode(){
    backgroundTheme('dark','moon')
}

darkMode();
