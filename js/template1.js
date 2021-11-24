class HelpButton{
    

    dependent_element;
    button;
    button_id;
    pop_up_window;
    isEditable = true;
    isPopUp = true;
    popUpwindowSide;
    iterator = 0;

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

    clearColors(){
        this.dependent_element.classList.remove("red");
        this.dependent_element.classList.remove("green");
        this.dependent_element.classList.remove("yellow");
        this.dependent_element.classList.remove("blue");
        this.dependent_element.classList.remove("bisque");
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
            header_h1.createPopUpWindow("right");
            header_h1.pop_up_window.innerHTML = `<p>Изменение названия сайта<p>`;
            header_h1.addPopUpWindow();
    })
    
    header_h1.addMethod("mouseleave", () => {
        header_h1.removePopUpWindow();
    })

    let header_btn = new HelpButton(document.querySelector("#header_button"));
    header_btn.findDependentElement(document.querySelector(".main_header"));

    header_btn.addMethod("mouseleave", () => {
        header_btn.removePopUpWindow();
    })


    header_btn.addMethod("click", () =>{
        header_btn.createPopUpWindow("left");
        header_btn.addPopUpWindow();

        header_btn.pop_up_window.innerHTML = `<p>Изменение цвета шапки сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow"></button>
        <button class="palette_btn red"></button>
        <button class="palette_btn blue"></button>
        <button class="palette_btn green"></button>
        <button class="palette_btn bisque"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow");
        let red = document.querySelector(".red");
        let blue = document.querySelector(".blue");
        let green = document.querySelector(".green");
        let bisque = document.querySelector(".bisque");

        yellow.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("yellow");
        });

        red.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("red");
        });

        blue.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("blue");
        });

        green.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("green");
        });

        bisque.addEventListener("click", () => {
            header_btn.clearColors();
            header_btn.dependent_element.classList.add("bisque");
        });
    })

    let main_btn = new HelpButton(document.querySelector("#main_button"));
    main_btn.findDependentElement(document.querySelector(".main_div"));

    main_btn.addMethod("mouseleave", () => {
        main_btn.removePopUpWindow();
    })


    main_btn.addMethod("click", () =>{
        main_btn.createPopUpWindow("left");
        main_btn.addPopUpWindow();

        main_btn.pop_up_window.innerHTML = `<p>Изменение цвета главного раздела сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow"></button>
        <button class="palette_btn red"></button>
        <button class="palette_btn blue"></button>
        <button class="palette_btn green"></button>
        <button class="palette_btn bisque"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow");
        let red = document.querySelector(".red");
        let blue = document.querySelector(".blue");
        let green = document.querySelector(".green");
        let bisque = document.querySelector(".bisque");

        yellow.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("yellow");
        });

        red.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("red");
        });

        blue.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("blue");
        });

        green.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("green");
        });

        bisque.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("bisque");
        });
    })

    let footer_btn = new HelpButton(document.querySelector("#footer_button"));
    footer_btn.findDependentElement(document.querySelector(".main_footer"));

    footer_btn.addMethod("mouseleave", () => {
        footer_btn.removePopUpWindow();
    })


    footer_btn.addMethod("click", () =>{
        footer_btn.createPopUpWindow("left");
        footer_btn.addPopUpWindow();

        footer_btn.pop_up_window.innerHTML = `<p>Изменение цвета подвала раздела сайта<p>
        <div class="color_palette"> 
        <button class="palette_btn yellow"></button>
        <button class="palette_btn red"></button>
        <button class="palette_btn blue"></button>
        <button class="palette_btn green"></button>
        <button class="palette_btn bisque"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow");
        let red = document.querySelector(".red");
        let blue = document.querySelector(".blue");
        let green = document.querySelector(".green");
        let bisque = document.querySelector(".bisque");

        yellow.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("yellow");
        });

        red.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("red");
        });

        blue.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("blue");
        });

        green.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("green");
        });

        bisque.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("bisque");
        });
    })

    let main_text_btn = new HelpButton(document.querySelector("#main_text_button"));
    main_text_btn.findDependentElement(document.querySelector(".main_text"));

    main_text_btn.addMethod("mouseover", () =>{
        main_text_btn.createPopUpWindow("right");
        main_text_btn.pop_up_window.innerHTML = `<p>Изменение подписи к картинке</p>
                                 <button class="button_style" id="advanced_main_text_button">Больше натроек</button>`
        main_text_btn.addPopUpWindow();
        
    })

    main_text_btn.addMethod("click", () =>{
        main_text_btn.dependent_element.setAttribute("contenteditable", header_h1.isEditable);
        main_text_btn.isEditable = !main_text_btn.isEditable;
        main_text_btn.dependent_element.focus();
    })

    main_text_btn.addMethod("mouseleave", () =>{
        main_text_btn.removePopUpWindow();
    })

    let main_img_btn = new HelpButton(document.querySelector("#main_img_button"));
    main_img_btn.findDependentElement(document.querySelector(".main_img"));

    let images = [
        {
            path:"templates_img/2.jpg",
        },
        {
            path:"templates_img/1.jpg",
        }
    ]

    main_img_btn.addMethod("mouseover", () =>{
        main_img_btn.createPopUpWindow("right");
        main_img_btn.pop_up_window.innerHTML = `<p>Щелкни чтобы поменять картинку</p>`;
        main_img_btn.addPopUpWindow();
    })

    main_img_btn.addMethod("click", () => {
        console.log(main_img_btn.iterator);  
        main_img_btn.dependent_element.style.background = "url(" + images[main_img_btn.iterator].path +  ")";
        main_img_btn.iterator++;
        if(main_img_btn.iterator > images.length - 1){
            main_img_btn.iterator = 0;
        }
    })

    main_img_btn.addMethod("mouseleave", () =>{
        main_img_btn.removePopUpWindow();
    })

    let result_button = document.querySelector("#result_button");

    let buttons = document.querySelectorAll(".button_style");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer__template");
    result_button.addEventListener("click", () =>{
        
        for(let i = 0; i < buttons.length; i++){
            console.log(buttons[i]);
            buttons[i].remove();
        }
        header.remove();
        footer.remove();
    });





    