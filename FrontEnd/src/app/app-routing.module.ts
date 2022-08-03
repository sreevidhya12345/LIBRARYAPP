import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  
  {path:' ',
  redirectTo:'home'},
  {path:'home',
  component:HomeComponent
},
 {path:'books',
 component:BooksComponent},
 {path:'login',
 component:LoginComponent},
 {path:'booklist',
 component:BooklistComponent},
 {path:'addbook',
 component:AddbookComponent},
 {path:'update',
 component:UpdatebookComponent},
 {path:'signup',
 component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
