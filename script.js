const colorState= document.getElementById('color-state');
const inputField = document.getElementById('input-box');
const listContainer= document.getElementById('list');




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
    }

    inputField.value= '';

}



