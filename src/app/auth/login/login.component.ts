import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValid: boolean = false;

  loginForm:FormGroup = this.fb.group({
    Email:[null,[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    Password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]]
  })

  constructor(private _router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get getControls()
  {
    return this.loginForm.controls;
  };

  addData(data:any) 
  {
    this.isValid = true
    if(data.valid) 
    {
      console.log("true")
      localStorage.setItem("Email",JSON.stringify(data.controls['Email'].value));
      this._router.navigate([''])
    }
  }

}
