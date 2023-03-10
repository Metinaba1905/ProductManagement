import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  postList:any;

  constructor(private http:HttpClient){

    http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(response=>{
      this.postList=response;
    }) 
    
  }

  postValue(input:any){
    const value={userId:4,id:4,title:input,body:""};
    this.http.post("https://jsonplaceholder.typicode.com/posts",value);
  }
}
