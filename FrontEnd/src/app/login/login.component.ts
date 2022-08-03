import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm:FormGroup;
// loading = false;
// submitted = false;
// returnUrl: string;
user={
  username:'',
  password:''
  
}

  constructor(private authservice:AuthService,
              private formBuilder: FormBuilder,
              private router: Router)
              {}

// private authenticationService : AuthService,
// private toastr: ToastrService
   

  ngOnInit(): void {}
   
  // this.httpservice.get("http://localhost:3000/api/")


  loginUser () {
    
    this.authservice.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/books'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/books'])
      }
    ) 
  }
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    //   });
  

  // get fval() { return this.loginForm.controls; }


  // onFormSubmit() {

    //  this.authservice.onFormSubmit(this.user);
    //  console.log(data)
    //      .subscribe(res=>{
    //    localStorage.setItem('token',res.token)
    //     this.router.navigate(['books'])
    //  }
    // )
    // }
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    // return;
    // }
     
    // this.loading = true;
    // this.authenticationService.login(this.fval.email.value, this.fval.password.value)
    // .subscribe(
    // data => {
    // this.router.navigate(['/']);
    // },
    // error => {
    // this.toastr.error(error.error.message, 'Error');
    // this.loading = false;
    // });
    // }

 


}
