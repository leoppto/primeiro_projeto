import { Injectable } from '@angular/core';
let config_key = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide:false,
    name:"",
    userName:""
  }
  
   constructor() {
    
  }

  //recupera os dados do localstorage
  getConfigData():any{
    //localStorage.removeItem(config_key);
    return localStorage.getItem(config_key);
  }

  //grava os dados no localstorage
  setConfigData(showSlide?:boolean, name?:string, userName?:string){
    //console.log("como?");

    if(showSlide){
      this.config.showSlide = showSlide;
    }

    if(name){
      this.config.name = name;
    }

    if(userName){
      this.config.userName = userName;
    }
      
    localStorage.setItem(config_key, JSON.stringify(this.config));
  }
}
