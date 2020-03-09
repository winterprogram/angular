import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
