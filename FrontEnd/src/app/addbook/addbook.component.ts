import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {


  addBook={
    bookId:'',
    bookName : '',
    author : '',
    description : '',
    price : '',
    starRating :'',
  }
  

  constructor(private bookservice:BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  AddBook(){
    this.bookservice.newBook(this.addBook);
    console.log("called")
    alert("successful");
    this.router.navigate(['']);
  }

}
