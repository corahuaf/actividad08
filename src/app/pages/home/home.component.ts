import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usuario: String = "angular";
  password:String = "123456";

  showSuccess: boolean = false;
  showError: boolean = false; 
  
  validar(user:String,pass:String){
    if(this.usuario == user && this.password == pass){

      this.showSuccess = true;
      this.showError = false;
    }else{

      this.showSuccess = false;
      this.showError = true;
    }    
  }

  items = ["Home", "Support", "Contact"];
}
