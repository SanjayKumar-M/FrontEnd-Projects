const inputbox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')

function addTask(){
    if(inputbox.value === ''){
        alert("Enter tasks to add")
        console.log("Nothing")
    }
    else{
        let list = document.createElement("li")
        list.innerHTML = inputbox.value;
        listcontainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        list.appendChild(span)
    }
    inputbox.value = "";
}
