import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

    getBooks(){
      return this.http.get("http://localhost:3000/booklist")
    }


    // update
    getBook(id:any){
      return this.http.get("http://localhost:3000/"+id)

    }

    // /edit book
   
    newBook(item:any){

      return this.http.post("http://localhost:3000/addbook",{"booklist":item})
      .subscribe(data=>{console.log(data)})
    }

    editBook(books:any){

      console.log('client update')
    return this.http.put("http://localhost:3000/update",books)
    .subscribe(data =>{console.log(data)})

    }

    deleteBook(id:any){
      return this.http.delete("http://localhost:3000/remove/"+id)


    }

}
