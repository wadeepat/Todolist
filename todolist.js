var addbutton = document.querySelector(".add");
var textinput = document.querySelector(".input");
var container = document.querySelector(".container");

class item{
    constructor(itemname){
        this.createDiv(itemname);
    }
    createDiv(itemname){
        var input = document.createElement("input");
        input.value = itemname;
        input.disabled = true;
        input.classList.add("item_input");
        input.type = "text";

        var itembox = document.createElement("div");
        itembox.classList.add("item");

        var editbutton = document.createElement("button");
        editbutton.classList.add("edit")
        editbutton.innerHTML="<i class='fas fa-edit'></i>";
        var removebutton = document.createElement("button");
        removebutton.classList.add("remove");
        removebutton.innerHTML ="<i class='fas fa-trash-alt'></i>";
        
        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editbutton);
        itembox.appendChild(removebutton);

        editbutton.addEventListener("click",() => this.edit(input));
        removebutton.addEventListener("click",() => this.remove(itembox));
    
        
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

addbutton.addEventListener("click",function(){
    if(textinput.value != ""){
        new item(textinput.value);
        textinput.value="";
    }
});

$("input[type='text'").keypress(function(e){
    if(e.which == 13){
        if(textinput.value != ""){
        new item(textinput.value);
        textinput.value="";
        }
    }
});

new item("Anime"); 
new item("HW");
