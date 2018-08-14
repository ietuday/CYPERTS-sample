import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup

   constructor(private router : Router, private _loginService: LoginService) {

    }

   ngOnInit() {
     this.form = new FormGroup({
     email: new FormControl('', [Validators.required,Validators.email]),
     password: new FormControl('', Validators.required)
   });
   }


   onLogin(){
    
    if(this.form.valid){
      this._loginService.login(this.form.controls['email'].value,this.form.controls['password'].value).subscribe(res =>{
        console.log(res);
      })
    }

    //  this.api
    //    .request('LOGIN',apiParams)
    //    .subscribe(res => {
    //      let that = this;
    //          if(res.status){
    //            swal({
    //              title: 'Good job!',
    //              text:'You have successfully looged In.!',
    //              type:'success'
    //            }).then(function () {
    //                that.router.navigate(['/']);
    //              })
    //          }else{
    //            swal({
    //              title: 'Oops...',
    //              text: res.errors,
    //              type: 'error'
    //            })
    //          }
    //        });
   }

}
