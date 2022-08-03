import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl="http://localhost:3000/login";

  





  // private currentUserSubject: BehaviorSubject<UserData>;
  // public currentUser: Observable<UserData>;

  constructor(private http:HttpClient) { 
  //   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //    this.currentUser = this.currentUserSubject.asObservable();
   }

  // public get currentUserValue(): UserData {
  //   return this.currentUserSubject.value;
  //   ,password
//   onFormSubmit(username:any){
//     return  this.http.post<any>("http://localhost:3000/login",username)
//      .subscribe((data)=>{
//       console.log('success');
    
//   })
// }
loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
    
  }

  loggedIn(){
    return !localStorage.getItem('token')
  }


  getToken(){
      localStorage.getItem('token')
  }

  newUser(item:any){
    return this.http.post("http://localhost:3000/signup",{"userdata":item})
    .subscribe(data=>{console.log(data)})
    
  }

  // login(email: string, password: string) {
  //   return this.http.post<any>(`auth/login`, { email, password })
  //   .pipe(map(user => {
  //   if (user && user.token) {
  //   // store user details in local storage to keep user logged in
  //   localStorage.setItem('currentUser', JSON.stringify(user.result));
  //   this.currentUserSubject.next(user);
  //   }
     
  //   return user;
  //   }));
  //   }
}
