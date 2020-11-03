import { Component, OnInit } from '@angular/core';
import { WaterboardService } from '../waterboard.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // constructor(public waterboardService: WaterboardService, private router: Router) { }
  // name = "";
  // id = "";
  // email = "";
  // password = "";
  // errorMessage = ""; //validation form error
  // //error = {reports: string , agent: string} = {name:'' , id:''}; // firebase erro handle 
  // admin: any

  // invalidLogin: boolean;
  // validLogin: boolean;

  // ngOnInit(): void {

  //   this.waterboardService.getAdmins().subscribe(data => {
  //     this.admin = data.map(e => {
  //       console.log(this.admin);

  //     });
  //   });

  // }
  // clearErrorMessage() {
  //   this.errorMessage = '';
  // }
  // login() {
  //   console.log(this.email, this.password)
  //   this.waterboardService.login(this.email, this.password)


  // }


  // logout() {
  //   this.waterboardService.logout()
  // }


  // Registration() {
  //   console.log("register button work")
  //   this.clearErrorMessage();
  //   if (this.validateForm(this.email, this.password)) {
  //     var res = this.waterboardService.registerWithEmail(this.name,
  //       this.id, this.email, this.password)
  //     console.log(res)
  //     // .then(() => {
  //     //   this.message = "you are register with data on firbase"
  //     // })
  //   }
  // }

  // validateForm(email, password) {

  //   if (email.lenght === 0) {
  //     this.errorMessage = "please enter valid email";
  //     return false;
  //   }

  //   if (password.lenght === 0) {
  //     this.errorMessage = "please enter password";
  //     return false;
  //   }

  //   if (password.lenght < 6) {
  //     this.errorMessage = "password should be at least 6 char";
  //     return false;
  //   }

  //   this.errorMessage = '';
  //   return true;

  // }

  // form = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.email
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required])
  // })
  constructor(public waterboardService: WaterboardService, private router: Router, public formBuilder: FormBuilder) { }

  errorMessage = ""; //validation form error
  //error = {reports: string , agent: string} = {name:'' , id:''}; // firebase erro handle 
  admin: any

  invalidLogin: boolean;
  validLogin: boolean;

  myForm: FormGroup;
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      name: [null, Validators.required],
      id: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, [Validators.required]]
    });

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, [Validators.required]]
    });

    // this.waterboardService.getAdmins().subscribe(data => {
    //   this.admin = data.map(e => {
    //     console.log(this.admin);

    //   });
    // });

  }


  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  public errorHandlingLogin = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    var res = this.waterboardService.login(this.loginForm.value.email, this.loginForm.value.password)
    console.log(res)

  }


  logout() {
    this.waterboardService.logout()
  }


  Registration() {
    if (!this.myForm.valid) {
      return;
    }
    console.log(this.myForm.value);
    var res = this.waterboardService.registerWithEmail(this.myForm.value.name, this.myForm.value.id, this.myForm.value.email, this.myForm.value.password)
    console.log(res)

  }

}

