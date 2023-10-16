/*
Form-To-Do-List:  Delete - Add - Search
*/

let list = document.querySelector("#to-do-list");               
let addInput = document.querySelector("#add-form input");         
let addBtn = document.querySelector("#add-form button")            
let searchInput = document.querySelector("#search-form input");    

//Search ---------------------------------------------------------------------

searchInput.addEventListener("input",(e)=>{           
    Array.from(list.children).forEach(element=>{    
        if(document.querySelector("#emptyMsg")){     
            return
        }
        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){       
            element.style.display = "flex"           
        }else{                                      
            element.style.display = "none"           
        }
    });
})

//Add ---------------------------------------------------------------------

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();  

    if(!addInput.value ){
        return  
    }
    if(document.querySelector("#emptyMsg")){  
        document.querySelector("#emptyMsg").remove() 
    }

    list.append(createListItem(addInput.value))
    addInput.value = ""
}) 

function createListItem(itemValue){
    let item = document.createElement("li");  
    let title = document.createElement("span");  
    let btn = document.createElement("span");  

    item.className = "to-do-list"

    title.className = "title";
    title.innerText = itemValue;  

    btn.className = "delete-btn";
    btn.innerText = "delete";

    item.appendChild(title);
    item.appendChild(btn);

    return item;
}

//Delete ---------------------------------------------------------------------

list.addEventListener("click", (e)=>{
    if(e.target.nodeName == "SPAN" && e.target.className == "delete-btn"){
        e.target.parentNode.remove()
        if(list.children.length == 0){
            let listEmptyMsg = document.createElement("div");
            listEmptyMsg.style.textAlign = "center";
            listEmptyMsg.style.color = "#666";
            listEmptyMsg.style.fontSize = "1.3em";
            listEmptyMsg.innerText = "List is empty";
            listEmptyMsg.id = "emptyMsg"
            list.appendChild(listEmptyMsg)
        }
    }
})



