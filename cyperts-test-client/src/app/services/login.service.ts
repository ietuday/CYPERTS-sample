import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
   loginUrl = 'http://localhost:8080/login';
  constructor(private http: Http) {
  }

  login(email, password) {
    const data = {
        'email': email,
        'password': password
    };
    console.log("email :",email + "Password:",password);
    console.log(data);
    
    return this.http.post(this.loginUrl, data).map(res =>{
        console.log(res);
        return res.json();
    })
    // .catch( (error: any) => Observable.throw(error.json().error || 'server error');
}

}