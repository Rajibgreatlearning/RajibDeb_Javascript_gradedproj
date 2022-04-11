const toDoInput=document.querySelector("#toDoInput");
const addBtn=document.querySelector("#addBtn");
const addBtn1=document.querySelector("#addBtn");

const toDoList=document.querySelector('.toDoList');

const footer=document.querySelector('.footer');
const pendingTask=document.querySelector('#pending-task');

const clearAll=document.querySelector('#clearAll');


addBtn.onclick=()=>{   
    let inputTextValue=toDoInput.value;
    
    let getLocalStorage=localStorage.getItem('New Todo');
    if(getLocalStorage==null){//if no value in local storage
        listArr=[];  //creating a blank array
    }else{
        listArr=JSON.parse(getLocalStorage);  //Transforming json string into js object
    }
    listArr.push(inputTextValue);
    localStorage.setItem('New Todo',JSON.stringify(listArr)); //Transforming js object into json string
    showTask();
}





function showTask(){
    let getLocalStorage=localStorage.getItem('New Todo');
    if(getLocalStorage==null){//if no value in local storage
        listArr=[];  //creating a blank array
    }else{
        listArr=JSON.parse(getLocalStorage);  //Transforming json string into js object
    }
    pendingTask.textContent=listArr.length;  //total task pending count
    totalTask=``;
    let newLiTag='';
    listArr.forEach((element, index) => {
       // newLiTag +=`<li>${element}<span><i class="list elements"></i></span></li>`;
       newLiTag+=`
       <li class="listElements">
       ${element}  
       <button id="edit" onclick="edit(${index})">Edit</button>
       <button id="delete" onclick="del(${index})">Delete</button>
       </li>`;
    });
    toDoList.innerHTML=newLiTag;
    toDoInput.value="";
}    

function del(index){
    let getLocalStorage=localStorage.getItem('New Todo');
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem('New Todo',JSON.stringify(listArr)); //Transforming js object into json 
    showTask();
}

function edit(index){
    let getLocalStorage=localStorage.getItem('New Todo');
    listArr=JSON.parse(getLocalStorage);  //Transforming json string into js object
    editItem=listArr.at(index);  
    //console.log(editItem);
    del(index);
    toDoInput.value=editItem;
    
}

clearAll.onclick=()=>{
    listArr=[];
    localStorage.setItem('New Todo',JSON.stringify(listArr)); //Transforming js object into json 
    showTask();
   
}


