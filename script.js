const colorState= document.getElementById('color-state');
const inputField = document.getElementById('input-box');
const listContainer= document.getElementById('inlist');
const listNumberContainer= document.getElementById('number');
const clearCompleted= document.getElementById('clear-completed');
const background= document.getElementById('background');

var listNumber= 0;
listNumberContainer.innerText = String(listNumber);
let dark = false;



function addToList(){
    if (inputField.value == ''){
        alert('Nothing to add..');
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
        addCountList();

    }
    
    inputField.value= '';
    
}

// function completedItems(){
//     var completed = [];
//     (document.querySelectorAll('.checked')).forEach(item=>{
//         completed.push(item);
//         minusCountList();
//     });
    
// }

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
        if (!e.target.parentElement.children[0].classList.contains('checked')){
            minusCountList();
        }
    }
})




// Light and Dark Modes

function backgroundTheme(theme,icon){
    background.style.backgroundImage= `url('images/bg-desktop-${theme}.jpg')`
    colorState.src= `images/icon-${icon}.svg`
}
function lightMode(){
    backgroundTheme('light','sun');
    document.documentElement.setAttribute('data-theme', 'light');
    dark= false;
    
}

function darkMode(){
    backgroundTheme('dark','moon');
    document.documentElement.setAttribute('data-theme', 'dark');
    dark = true;
}


// Enter key event listener

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Execute the code you want on Enter key press
        addToList();
    }
})

// Theme Icon Event Listener

colorState.addEventListener('click', ()=>{
    if (dark === false){
        darkMode();
    } else if (dark){
        lightMode();
    }
});


// Clear completed todos
clearCompleted.addEventListener('click', ()=>{
    var completed = [];
    (document.querySelectorAll('.checked')).forEach(item=>{
        completed.push(item);
    });
    
    completed.forEach(item=>{
        item.parentElement.remove();
    })
})

// const listItems = document.querySelectorAll('.list-item');

// // Filtering the List
// const filterAll= document.querySelectorAll('.filter-all');
// const filterActive=document.querySelectorAll('.filter-active') ;
// const filterCompleted= document.querySelectorAll('.filter-completed') ;

// var listOfListItems = [];
// listItems.forEach(item=>{
//     listOfListItems.push(item);
//     console.log(listOfListItems);
// });

// console.log(listItems);

// filterAll.forEach(element => {
//     element.addEventListener('click',()=>{


// });
// });

// filterActive.forEach(element => {
//     element.addEventListener('click',()=>{
//         listItems.forEach(item=>{
            
//         })
//     });
    
// });
// filterCompleted.forEach(element => {
//     element.addEventListener('click',()=>{
        
//     });
    
// });