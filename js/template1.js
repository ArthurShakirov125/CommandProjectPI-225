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

        this.dependent_element.classList.remove("red1");
        this.dependent_element.classList.remove("green1");
        this.dependent_element.classList.remove("yellow1");
        this.dependent_element.classList.remove("blue1");
        this.dependent_element.classList.remove("bisque1");

        this.dependent_element.classList.remove("red2");
        this.dependent_element.classList.remove("green2");
        this.dependent_element.classList.remove("yellow2");
        this.dependent_element.classList.remove("blue2");
        this.dependent_element.classList.remove("bisque2");
    }

    ClearFonts(){
        this.dependent_element.classList.remove("Montserrat");
        this.dependent_element.classList.remove("Oswald");
        this.dependent_element.classList.remove("Manrope");
        this.dependent_element.classList.remove("Roboto");
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
        <button class="palette_btn yellow1"></button>
        <button class="palette_btn red1"></button>
        <button class="palette_btn blue1"></button>
        <button class="palette_btn green1"></button>
        <button class="palette_btn bisque1"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow1");
        let red = document.querySelector(".red1");
        let blue = document.querySelector(".blue1");
        let green = document.querySelector(".green1");
        let bisque = document.querySelector(".bisque1");

        yellow.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("yellow1");
        });

        red.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("red1");
        });

        blue.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("blue1");
        });

        green.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("green1");
        });

        bisque.addEventListener("click", () => {
            main_btn.clearColors();
            main_btn.dependent_element.classList.add("bisque1");
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
        <button class="palette_btn yellow2"></button>
        <button class="palette_btn red2"></button>
        <button class="palette_btn blue2"></button>
        <button class="palette_btn green2"></button>
        <button class="palette_btn bisque2"></button>
        </div>`;
        

        let yellow = document.querySelector(".yellow2");
        let red = document.querySelector(".red2");
        let blue = document.querySelector(".blue2");
        let green = document.querySelector(".green2");
        let bisque = document.querySelector(".bisque2");

        yellow.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("yellow2");
        });

        red.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("red2");
        });

        blue.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("blue2");
        });

        green.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("green2");
        });

        bisque.addEventListener("click", () => {
            footer_btn.clearColors();
            footer_btn.dependent_element.classList.add("bisque2");
        });
    })

    let main_text_btn = new HelpButton(document.querySelector("#main_text_button"));
    main_text_btn.findDependentElement(document.querySelector(".main_text"));

    main_text_btn.addMethod("mouseover", () =>{
        main_text_btn.createPopUpWindow("right");
        main_text_btn.pop_up_window.innerHTML = `<p>Изменение подписи к картинке</p`
        main_text_btn.addPopUpWindow();
        
    })

    main_text_btn.addMethod("click", () =>{
        main_text_btn.dependent_element.setAttribute("contenteditable",  main_text_btn.isEditable);
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
            buttons[i].remove();
        }
        header_h1.dependent_element.setAttribute("contenteditable", false);
        main_text_btn.dependent_element.setAttribute("contenteditable",  false);
        header.remove();
        footer.remove();
    });

    let advanced_settings_exit_button = new HelpButton(document.querySelector(".settings-exit"));
    advanced_settings_exit_button.findDependentElement(document.querySelector(".advanced_settings_wrapper"));

    advanced_settings_exit_button.addMethod("click", () => {
        advanced_settings_exit_button.dependent_element.classList.add("display_none");
    });

    
    let font_buttons = document.querySelectorAll(".fonts_family_list--font");

    let Montserrat_button = new HelpButton(document.querySelector(".Montserrat"));
    Montserrat_button.findDependentElement(document.querySelector(".main_text"));

    Montserrat_button.addMethod("click", () => {
        Montserrat_button.ClearFonts();
        Montserrat_button.dependent_element.classList.add("Montserrat");

        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_font");
        }
        Montserrat_button.button.classList.add("selected_font");
    });

    let Oswald_button = new HelpButton(document.querySelector(".Oswald"));
    Oswald_button.findDependentElement(document.querySelector(".main_text"));

    Oswald_button.addMethod("click", () => {
        Oswald_button.ClearFonts()
        Oswald_button.dependent_element.classList.add("Oswald");

        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_font");
        }
        Oswald_button.button.classList.add("selected_font");
    });

    let Manrope_button = new HelpButton(document.querySelector(".Manrope"));
    Manrope_button.findDependentElement(document.querySelector(".main_text"));

    Manrope_button.addMethod("click", () => {
        Manrope_button.ClearFonts();
        Manrope_button.dependent_element.classList.add("Manrope");
        for(let i = 0; i < font_buttons.length; i++){
            font_buttons[i].classList.remove("selected_font");
        }
        Manrope_button.button.classList.add("selected_font");
    });

    let Roboto_button = new HelpButton(document.querySelector(".Roboto"));
    Roboto_button.findDependentElement(document.querySelector(".main_text"));

    Roboto_button.addMethod("click", () => {
        Roboto_button.ClearFonts();
        Roboto_button.dependent_element.classList.add("Roboto");
        for(let i = 0; i < font_buttons.length; i++){
            console.log(font_buttons[i]);
            font_buttons[i].classList.remove("selected_font");
        }
        Roboto_button.button.classList.add("selected_font");
    });





    