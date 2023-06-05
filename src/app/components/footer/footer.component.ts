import { Component } from "@angular/core";
//@Component
@Component({      
    //di solito app-(nome)                                     
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css'],//array
})
export class FooterComponent{
    footerText='PCTO Pascal 2023'
}