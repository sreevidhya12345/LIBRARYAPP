import { Component, OnInit } from '@angular/core';
 import { BookModel } from './book.model';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  pageTitle:String="List Of Books";

  // booklist: BookModel[];

  booklist=[{
    // bookId:'',
    bookName : '',
    author : ' ',
    description : '',
    price : '',
    starRating :'',

   }] 
  

  constructor(private bookService:BookServiceService,private router:Router) { 
  

  }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe((data)=>{
      
      this.booklist=JSON.parse(JSON.stringify(data));
      
    })
  }
// 
editBook(books:any){
  localStorage.setItem("editBookId", books._id.toString());
    this.router.navigate(['update']);

}





// 
  deleteBook(booklist:any)
  {
    this.bookService.deleteBook(booklist._id)
      .subscribe((data) => {
        this.booklist = this.booklist.filter(p => p !== booklist);
      })
  

  }


}
