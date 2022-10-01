//getting all required elements
  const inputField = document.querySelector(".inputField");
  const inputTask = document.querySelector(".input_task");
  const addBtn = document.querySelector(".add_task");
  
  const addList = document.querySelector(".add_list");
  const clearAllBtn = document.querySelector(".clear_btn");

  const checkBox = document.querySelector(".checked");
  const editBtn = document.querySelector(".edit");
  console.log(editBtn)

 


  addBtn.addEventListener("click", function () {
    const newItem = document.createElement("div");
    newItem.classList.add("add_list");
    newItem.innerHTML =  `<div class="add_list">
    <div class="list_item">
      <div class="item_left">
        <input type="checkbox"/>
        <span class="contents">${inputTask.value}</span>
      </div>
      <div class="item_right">
        <i class="fa-solid fa-pen-to-square" class="edit" ></i>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  </div>`
  
    // const listItem = document.createElement("div");
    // listItem.classList.add("list_item");
   
  
    // addList.appendChild(newItem);
    // inputTask.value = "";
  
    if (inputTask.value == "") {
      alert("Please Enter a Task");
    } else {
      addList.appendChild(newItem);
      inputTask.value = "";
    }
  
  });


// //delete item
addList.addEventListener("click", (e) => {
  if(e.target.classList.contains("fa-trash-can")){
    e.target.parentElement.parentElement.remove();
  }
});
addList.addEventListener("click", (e) => {
  if(e.target.classList.contains("")){
    e.target.parentElement.parentElement.classList.toggle("checked");
  }
});
editBtn.addEventListener("click", () => {
  console.log(editBtn)
})


