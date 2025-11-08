// this is an javascript code for making function in that project



let todo = document.getElementById("todo");
let add =  document.getElementById("add");
let ul = document.querySelector("ul");

function adding(){
    if(todo.value.trim()==="")return;
    let list = document.createElement("li")
    list.innerHTML = todo.value + "<button onclick='deletes(event)' style='padding: 5px 10px; color:white;font-size:20px'>&#128465;</button>"
    
    ul.append(list);
    todo.value="";
}

function deletes(event){
    event.target.parentElement.remove();

}
function allclear(){
    ul.innerHTML="";
}
