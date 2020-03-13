import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs: any;


  constructor(public http: BlogHttpService) { }



  ngOnInit(): void {
    this.allBlogs = this.http.getAllblogs().subscribe(
      data => {
        this.allBlogs = data.data
      },
      error => {
        console.log(error.errorMessage)
      }
    );

  }

}
