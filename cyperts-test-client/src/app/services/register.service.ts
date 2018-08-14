import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  registerUrl = 'http://localhost:8080/signup'
  constructor(private http: Http) {
  }

register(signUpData){
  console.log(signUpData);
  return this.http.post(this.registerUrl,signUpData).map(res =>{
    return res.json()
  })
}

}