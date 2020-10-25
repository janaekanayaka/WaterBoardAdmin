import { Component, OnInit } from '@angular/core';
import { WaterboardService } from '../waterboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private waterboardService: WaterboardService, private router: Router) { }
  name = "";
  id = "";
  email = "";
  password = "";
  errorMessage = ""; //validation form error
  //error = {reports: string , agent: string} = {name:'' , id:''}; // firebase erro handle 


  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
  }
  login() {
    console.log("login work")
  }


  Registration() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.waterboardService.registerWithEmail(this.name,
        this.id, this.email, this.password)
      // .then(() => {
      //   this.message = "you are register with data on firbase"
      // })
    }
  }

  validateForm(email, password) {
    // if (name.lenght === 0) {
    //   this.errorMessage = "please enter name";
    //   return false;
    // }
    // if (id.lenght === 0) {
    //   this.errorMessage = "please enter id";
    //   return false;
    // }
    if (email.lenght === 0) {
      this.errorMessage = "please enter valid email";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}

