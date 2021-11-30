class HelpButton{
    

    dependent_element;
    button;
    button_id;
    pop_up_window;
    isEditable = true;
    isPopUp = true;
    popUpwindowSide;

    constructor(button){
        this.button = button;
    }

    findDependentElement(dependent_element){
        this.dependent_element = dependent_element;
    }
    createPopUpWindow(side){
        this.popUpwindowSide = side;
            this.pop_up_window = document.createElement("div");
            if(side === "left")
            this.pop_up_window.classList.add("pop-up_window-l");
            else
            this.pop_up_window.classList.add("pop-up_window-r");
            
    }

    addPopUpWindow(){
        if (this.isPopUp) {
            this.button.append(this.pop_up_window);
            this.isPopUp = false;
        }
    }

    removePopUpWindow(){
        if (!this.isPopUp) {
            if(this.popUpwindowSide === "left"){
                this.button.querySelector(".pop-up_window-l").remove();
            }
            else{
                this.button.querySelector(".pop-up_window-r").remove();
            }
            
            this.isPopUp = true;
        }
    }
    
    addMethod(EventType,Method){
        this.button.addEventListener(EventType, Method);
    }

}


    let header_h1 = new HelpButton(document.querySelector("#h1_button"));
    console.log(header_h1.button);
    header_h1.findDependentElement(document.querySelector(".template_h1"));
    
    

    header_h1.addMethod("click", () => {
            header_h1.dependent_element.setAttribute("contenteditable", header_h1.isEditable);
            console.log("click");
            header_h1.dependent_element.focus();
            header_h1.isEditable = !header_h1.isEditable;
            console.log(header_h1.isEditable);
    });

    header_h1.addMethod("mouseover", () =>{
            header_h1.createPopUpWindow("r");
            header_h1.pop_up_window.innerHTML = `<p>Изменение названия сайта<p>`;
            header_h1.addPopUpWindow();
    })
    
    header_h1.addMethod("mouseleave", () => {
        header_h1.removePopUpWindow();
    })