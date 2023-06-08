let items = document.querySelectorAll('.items')
let containerOne = document.querySelector('.container-one')
let containerTwo = document.querySelector('.container-two')

for(item of items){
    item.addEventListener("dragstart", (e)=>{
        let selected = e.target         //the item div being dragged
        containerTwo.addEventListener("dragover", (e)=>{
            e.preventDefault();         //prevent defaults on dragover event
        })
        containerTwo.addEventListener("drop", (e)=>{
            containerTwo.appendChild(selected)  //add the item being dragged to second container on being dropped
            selected = null
            let bar = document.getElementById("snackbar");  //snackbar div being accessed
            bar.className = "show";                         // the classname of div to show for showing the snackbar for success message
            setTimeout(function(){ bar.className = bar.className.replace("show", ""); }, 3000); //show snackbar using setTimeot for 3s then again make it invisible
        })
        //making the items in container 2 also draggable & be added to container one 
        containerOne.addEventListener("dragover", (e)=>{
            e.preventDefault();
        })
        containerOne.addEventListener("drop", (e)=>{
            containerOne.appendChild(selected)
            selected = null
            let bar = document.getElementById("snackbar");
            bar.className = "show";
            setTimeout(function(){ bar.className = bar.className.replace("show", ""); }, 3000);
        })
    })
}