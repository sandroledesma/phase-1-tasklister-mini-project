document.addEventListener("DOMContentLoaded", (event) => {
  const highPriorityList = document.querySelector("#HighPriorityList");
  const midPriorityList = document.querySelector("#MidPriorityList");
  const lowPriorityList = document.querySelector("#LowPriorityList");

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const tasks = event.target["new-task-description"].value;
    const list = document.createElement("li");
    list.textContent = tasks;

    if(tasks.trim() === "") // this code does not allow blank text to be created as a todo - however, it gives you an error.
    {
      return; 
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
      if (priority === "high") 
      if (priority === "mid") 
      if (priority === "low") 
    
    document.querySelector("#tasks").appendChild(list);

    switch (priority) { //execute a switch statement to place tasks in appropriate priority list
      case "high":
        list.style.color = "red";
        highPriorityList.appendChild(list);
        break;
      case "mid":
        list.style.color = "blue";
        midPriorityList.appendChild(list);
        break;   
      case "low":
        list.style.color = "green";
        lowPriorityList.appendChild(list);
        break;
      default: //if no priority was made, it will default to Low
        list.style.color = "black";
        lowPriorityList.appendChild(list);
        break;
    }
    
  });
});
