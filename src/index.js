document.addEventListener("DOMContentLoaded", (event) => {
  const highPriorityList = document.querySelector("#high-priority");
  const midPriorityList = document.querySelector("#mid-priority");
  const lowPriorityList = document.querySelector("#low-priority");

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const tasks = event.target["new-task-description"].value;
    const list = document.createElement("li");
    //const form = document.querySelector("form"); // FIX THE PRIORITY CODE
    list.textContent = tasks;

    if(tasks.trim() === "") // this code does not allow blank text to be created as a todo - however, it gives you an error.
    {
      e.preventDefault(); 
    }
  
    const deleteButton = document.createElement("button"); // creates delete button to remove the task once complete
    deleteButton.textContent = "X";
    document.querySelector("ul").append(deleteButton);

    deleteButton.addEventListener("click", () => {  // removes "task" and "delete button" after button is clicked
      list.remove("deleteButton");
      deleteButton.remove("deleteButton"); // technically unnecessary because of the appendChild code below 
      });

      list.appendChild(deleteButton); // makes delButton a child of list, so both is removed at the same time
      document.querySelector("#tasks").append(list); 
    
    event.target["new-task-description"].value = ""; // resets the text box to placeholder = description

    const priority = event.target.priority.value; 
      if (priority === "high") list.style.color = "red";
      if (priority === "mid") list.style.color = "blue";
      if (priority === "low") list.style.color = "green";
    
    document.querySelector("#tasks").appendChild(list);

    switch (priority) { //execute a switch statement to place tasks in appropriate priority list
      case "high":
        highPriorityList.appendChild(tasks);
        break;
      case "mid":
        midPriorityList.appendChild(tasks);
        break;   
      case "low":
        lowPriorityList.appendChild(tasks);
        break;
      default: //if no priority was made, it will default to Low
        lowPriorityList.appendChild(tasks);
        break;
    }
    
  });
});
