import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 userData={
    name:'',
    username:'',
    password:'',
  }
  constructor(private authservice:AuthService,private router:Router) { }
  ngOnInit(): void {
  }
  addUser(){
    this.authservice.newUser(this.userData);
    console.log("called");
    alert("successful");
    this.router.navigate(['']);
    // this.router.navigate(['']);
  }

}
