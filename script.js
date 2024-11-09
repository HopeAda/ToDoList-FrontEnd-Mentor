const colorState= document.getElementById('color-state');
const inputField = document.getElementById('input-box');
const listContainer= document.getElementById('inlist');
const listNumberContainer= document.getElementById('number');
const clearCompleted= document.getElementById('clear-completed');
const background= document.getElementById('background');


var listNumber= 0;
listNumberContainer.innerText = String(listNumber);
let dark = false;




getThemeFromStorage();


function addToList(){
    all();
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
        countList();
        saveData();

    }
    
    inputField.value= '';
    
}

function countList(){
    listNumber = listContainer.querySelectorAll('.list-item p:not(.checked)').length;
    listNumberContainer.innerText = String(listNumber);

}



listContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
        countList();
        saveData();
    } 
    if (e.target.tagName === 'DIV'){
        e.target.parentElement.remove();
        countList();
        saveData();
    
    }
})




// Light and Dark Modes

function backgroundTheme(theme,icon){
    background.style.backgroundImage= `url('images/bg-desktop-${theme}.jpg')`
    colorState.src= `images/icon-${icon}.svg`
}
function lightMode(){
    backgroundTheme('light','moon');
    document.documentElement.setAttribute('data-theme', 'light');
    dark= false;

    
}

function darkMode(){
    backgroundTheme('dark','sun');
    document.documentElement.setAttribute('data-theme', 'dark');
    dark = true;
}


// Enter key event listener

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addToList();
    }
})

// Theme Icon Event Listener

colorState.addEventListener('click', ()=>{
    if (dark === false){
        darkMode();
        saveInLocalStorage();

    } else if (dark){
        lightMode();
        saveInLocalStorage();
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
    saveData();
})


            
const filterAll= document.querySelectorAll('.filter-all');
const filterActive=document.querySelectorAll('.filter-active') ;
const filterCompleted= document.querySelectorAll('.filter-completed') ;

function activeFilter(name,wrong1, wrong2){
    name.forEach(item=>{
        item.classList.add('selected');
    })
    wrong1.forEach(item=>{
        item.classList.remove('selected');
    })
    wrong2.forEach(item=>{
        item.classList.remove('selected');
    })


}

function all(){
    (document.querySelectorAll('.list-item')).forEach(item => {
        item.style.display = 'inline-flex'
    });
    activeFilter(filterAll, filterActive,filterCompleted);

}

filterAll.forEach(element => {
        element.addEventListener('click', all);
});


// const listItems = document.querySelectorAll('.list-item');
        
filterActive.forEach(element => {
    
    element.addEventListener('click',()=>{
        activeFilter(filterActive,filterAll,filterCompleted);
        let notActive = [];
        notCompleted= [];
        (document.querySelectorAll('.list-item')).forEach(item=>{
            
            if (item.firstElementChild.classList.contains('checked')){
                
                notActive.push(item);
                
            } else {
                notCompleted.push(item);
            }
            notActive.forEach(item=>{
                item.style.display  = 'none';
            })
            notCompleted.forEach(item =>{
                item.style.display = 'inline-flex'
            })
            
            
            
            // })
        });
        saveData();
    });
});

filterCompleted.forEach(element => {
    element.addEventListener('click',()=>{
        element.addEventListener('click', ()=>{
            activeFilter(filterCompleted,filterAll,filterActive)
            let notCompleted = [];
            let notActive = [];
            (document.querySelectorAll('.list-item')).forEach(item =>{
                if (!item.firstElementChild.classList.contains('checked')){
                    notCompleted.push(item);
                } else {
                    notActive.push(item);
                }
                notCompleted.forEach(item =>{
                    item.style.display = 'none';
                })
                notActive.forEach(item =>{
                    item.style.display = 'inline-flex'
                })
            })
            saveData();
        })
    });
    
});

// Local storage
function saveData(){
    localStorage.setItem('listdata', listContainer.innerHTML);

}

function saveInLocalStorage(){
    const themes= document.documentElement.getAttribute('data-theme');
    localStorage.setItem('theme', themes);

    

}

function getThemeFromStorage(){
    chosenTheme= localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', chosenTheme);
    if (chosenTheme === 'dark'){
        darkMode();
    } else { 
        lightMode();
    }
}

function getData(){
    listContainer.innerHTML = localStorage.getItem('listdata'); 
    all();
    countList();
}



getData();
