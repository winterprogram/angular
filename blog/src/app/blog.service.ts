import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {  

  public currentBlog;
  // sample data 
  public allBlogs = [

    {
      "blogId": "1",
      "created": "2020-10-20T12:20:47.854z",
      "tags": [],
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
      "bodyHtml": "this the body ",
      "description": "this is blog1 boogi",
      "title": "this is blog 3"
    }
  ]
  getAllblogs(): any {
    return this.allBlogs;
  }
  public getblogId(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog
      }
    }
  }
  constructor() { }
}
