import { Component, OnInit } from '@angular/core';
// adding a import to store the url
import { ActivatedRoute, Router } from "@angular/router"
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // defening in private type
  public currentBlog;
  

  constructor(private _route: ActivatedRoute, private router: Router, public blogserve :BlogService) {

  }

  ngOnInit(): void {


// following is used to add routing for variable links
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    // this.currentBlog = myBlogId


    this.blogserve.getblogId(myBlogId)

    this.currentBlog = this.blogserve.currentBlog
  }
  

}
