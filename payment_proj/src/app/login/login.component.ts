import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from './signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @Output() onlogin=new EventEmitter<String>();
  constructor(private router:Router) { }
  @ViewChild('f')
  form:any;
  
  
  model:signup= new signup();
  onSubmit(){
    if (this.form.value.username==="user" && this.form.value.password==="user"){
        this.router.navigate(['transaction'])
    }
  }

  ngOnInit(): void {
  }

}
