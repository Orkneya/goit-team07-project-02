// @ts-ignore
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css"; 

new Accordion(".accordion-container", {
    duration: 400,  
    showMultiple: true,
    elementClass: "accordion-item",
    triggerClass: "accordion-button",
    panelClass: "accordion-content",
    

});

