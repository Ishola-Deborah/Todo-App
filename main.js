//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const addList = document.querySelector(".add_list");
const clearAllBtn = document.querySelector(".footer button")
// inputBox.onkeyup = () =>{
//     let userValue = inputBox.value; //getting user entered value
//     if(userValue.trim() != 0){ //if uservalue is not only spaces
//         addBtn.classList.add("active");// active the add button
//     }else {
//         addBtn.classList.remove("active");// unactive the add button
//     }
// }

//when user click on the add btn
addBtn.onclick = () =>{
    let userValue = inputBox.value;//getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo");//getting localstorage
    if(getLocalStorage == null){//if local storage is empty
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage);//transforming json string to js object
    }
    listArr.push(userValue);//pushing or adding uservalue
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTasks();
};


//function to add task list to input field
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pending");
    pendingNumb.textContent = listArr.length;// passing the legth value in pending task
    // if(listArr.legth>0){
    //     clearAllBtn.classList.add(".active")
    // }

    let newLiTag = "";
    listArr.forEach((element, index) => {
        newLiTag +=  ` <div class="add_list">
        <ul>
            <li class="list_items">
                <div class="item_left">
                    <span class="check">
                        <input type="checkbox">
                    </span>
                    <span class="contents" style="text-decoration: none;">${element}</span>
                </div>
                <div class="item_right">
                    <div class="edit">
                        <span onclick="editTask(${index})" class="material-symbols-outlined">edit_note</span>
                    </div>
                    <div class="delete">
                      <span onclick="deleteTask(${index})" class="material-symbols-outlined">delete</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>`
    });
    addList.innerHTML = newLiTag; //adding new li tag to ul
    inputBox.value = ""; //once task is added leave the field blank
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);// delete the particular index
    //after removing li update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming a js object into json string
    showTasks();//calling showTask function
}

//delete all task
clearAllBtn.onclick = () => {
    listArr = [];//empty an array

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//edit task function
function editTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.map(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}