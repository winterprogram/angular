import { Component, OnInit } from '@angular/core';
// adding a import to store the url
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // defening in private type
  public currentBlog;
  public allBlogs = [

    {
      "blogId": "1",
      "created": "2020-10-20T12:20:47.854z",
      "tags": ["hi","standup"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the body ",
      "description": "this is blog1 description",
      "title": "this is blog 1"
    },
    {
      "blogId": "2",
      "created": "2020-10-20T12:20:47.854z",
      "tags": [],
      "author": "Admin",
      "category": "adventure",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this the body ",
      "description": "this is blog1",
      "title": "this is blog 2"
    },
    {
      "blogId": "3",
      "created": "2020-10-20T12:20:47.854z",
      "tags": [],
      "author": "Admin",
      "category": "adventure",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this the body </h1>",
      "description": "this is blog1 boogi",
      "title": "this is blog 3"
    }
  ]

  constructor(private _route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {


// following is used to add routing for variable links
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    // this.currentBlog = myBlogId


    this.getblogId(myBlogId)
  }
  public getblogId(currentBlogId):any {
    for ( let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog
      }
    }
  }

}
