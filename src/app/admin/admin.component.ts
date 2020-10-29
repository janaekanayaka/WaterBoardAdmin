import { Component, OnInit } from '@angular/core';
import { WaterboardService } from '../waterboard.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public waterboardService: WaterboardService, private router: Router) { }
  name = "";
  id = "";
  email = "";
  password = "";
  errorMessage = ""; //validation form error
  //error = {reports: string , agent: string} = {name:'' , id:''}; // firebase erro handle 
  admin: any

  invalidLogin: boolean;
  validLogin: boolean;

  ngOnInit(): void {

    this.waterboardService.getAdmins().subscribe(data => {
      this.admin = data.map(e => {
        console.log(this.admin);

      });
    });

  }
  clearErrorMessage() {
    this.errorMessage = '';
  }
  login() {
    console.log(this.email, this.password)
    this.waterboardService.login(this.email, this.password)


  }


  logout() {
    this.waterboardService.logout()
  }


  Registration() {
    console.log("register button work")
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      var res = this.waterboardService.registerWithEmail(this.name,
        this.id, this.email, this.password)
      console.log(res)
      // .then(() => {
      //   this.message = "you are register with data on firbase"
      // })
    }
  }

  validateForm(email, password) {

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

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required])
  })
}

