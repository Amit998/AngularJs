import { InjectionToken } from "@angular/core";


export let APP_CONFIG = new InjectionToken("app.config");

export class AppConstants {
    
       public static get commonUrl(): string {return  'http://www.bajupress.com/bajuAdmin/';}


  

}