import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;

  constructor(private fb:FormBuilder, private _router:Router) { }

  LoginForm:FormGroup = this.fb.group({
  Email:[null,[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
  Password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]],
  });

  ngOnInit(): void {
  }

  get getControls()
  {
    return this.LoginForm.controls;
  };

  addData() 
  {
    this.isValid = true
    if(this.LoginForm.valid) 
    {
      console.log("true")
      localStorage.setItem("Email",JSON.stringify(this.LoginForm.controls['Email'].value));
      this._router.navigate([''])
    }
  }

}
