const header_button = document.querySelector("#h1_button");
const header = document.querySelector(".template_h1");

console.log("working");
var isEditable = true;
var isPopUp = true;
header_button.addEventListener("mouseover", button => {
    if(isPopUp)
    {
    const pop_up_window = document.createElement("div");
    pop_up_window.classList.add("pop-up_window");
    header_button.append(pop_up_window);    
    isPopUp = false;
    }
    
}
);
header_button.addEventListener("mouseleave", button => {
    if(!isPopUp)
    {
        console.log(button.target);
        button.target.querySelector(".pop-up_window").remove();
        isPopUp = true;
    }
    
});



header_button.addEventListener("click", () => {
    header.setAttribute("contenteditable", isEditable);
    console.log("click");
    console.log(header);
    header.focus();
    isEditable = !isEditable;
}
);