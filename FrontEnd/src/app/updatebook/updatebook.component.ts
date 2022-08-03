import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {


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
    let bookId = localStorage.getItem("editBookId");
    this.bookservice.getBook(bookId).subscribe((data)=>{
      this.addBook=JSON.parse(JSON.stringify(data));
  })
  }

  editBook()
  {    
    this.bookservice.editBook(this.addBook);   
    alert("Success");
    this.router.navigate(['booklist']);
  }

}
