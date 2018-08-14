import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup

    constructor(
      private router: Router,
      private _registerService:RegisterService
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
        fullName: new FormControl('', Validators.required),
        userName: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required,Validators.minLength(4)]),
      });
    }



    register() {
      console.log(this.form.value);
      
      this._registerService.register(this.form.value).subscribe(res =>{
        console.log(res);
      });
    //   this.api
    //   .request('REGISTER',apiParams)
    //   .subscribe(res =>{
    //     let that = this;
    //     if(res.status){
    //       swal({
    //         title: 'Congrats',
    //         text:'You have successfully Registered into Medicare',
    //         type:'success'
    //       }).then(function () {
    //           that.router.navigate(['/']);
    //       })
    //     } else if(!res.status){
    //       swal({
    //         title: 'Oops...',
    //         text: res.errors,
    //         type: 'error'
    //       })
    //     }else{
    //       swal({
    //         title: 'Oops...',
    //         text: 'something went wrong',
    //         type: 'error'
    //       })
    //     }
    //   });
    }

}
