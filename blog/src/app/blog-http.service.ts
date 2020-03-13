import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, observable } from "rxjs";
import { catchError } from 'rxjs/operators';;
// import { tap } from 'rxjs/operator'
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  // createBlog(blogdata: { title: any; description: any; blogBody: any; category: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  // createBlog(blogdata: { title: any; description: any; blogBody: any; category: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';


  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);

  }

  public getAllblogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=OTc5ZmFiZjZlMDM2YmI2NjhhMTA4ZmUzZDMwY2FjYzM1YzA4NzFkOTYzNWY4MWUwOTEyNjM4YTg0OGY4MDk1YTRlNjYxNzAyMGIwMTUzNTE3M2JjZjNkOTQzMGYxZTUzNjQyODVlMDUyMzIyMzcwZWM1NjkxOTYyZmMwYTkyNzc3Nw==')
    console.log(myResponse)
    return myResponse;

  }

  public getblogId(myBlogId): any {

    return this._http.get(this.baseUrl + '/view/' + myBlogId + '?authToken=OTc5ZmFiZjZlMDM2YmI2NjhhMTA4ZmUzZDMwY2FjYzM1YzA4NzFkOTYzNWY4MWUwOTEyNjM4YTg0OGY4MDk1YTRlNjYxNzAyMGIwMTUzNTE3M2JjZjNkOTQzMGYxZTUzNjQyODVlMDUyMzIyMzcwZWM1NjkxOTYyZmMwYTkyNzc3Nw==')
  }

  public createBlog(blogdata): any {
    return this._http.post(this.baseUrl + '/create' + '?authToken=OTc5ZmFiZjZlMDM2YmI2NjhhMTA4ZmUzZDMwY2FjYzM1YzA4NzFkOTYzNWY4MWUwOTEyNjM4YTg0OGY4MDk1YTRlNjYxNzAyMGIwMTUzNTE3M2JjZjNkOTQzMGYxZTUzNjQyODVlMDUyMzIyMzcwZWM1NjkxOTYyZmMwYTkyNzc3Nw==', blogdata)
  }

  public editBlog(myBlogId, blog): any {
    return this._http.put(this.baseUrl + '/' + myBlogId + '/edit' + '?authToken=OTc5ZmFiZjZlMDM2YmI2NjhhMTA4ZmUzZDMwY2FjYzM1YzA4NzFkOTYzNWY4MWUwOTEyNjM4YTg0OGY4MDk1YTRlNjYxNzAyMGIwMTUzNTE3M2JjZjNkOTQzMGYxZTUzNjQyODVlMDUyMzIyMzcwZWM1NjkxOTYyZmMwYTkyNzc3Nw==', blog)
  }

  public deleteBlog(myBlogId): any {

    return this._http.post(this.baseUrl +'/'+ myBlogId +'/delete?authToken=OTc5ZmFiZjZlMDM2YmI2NjhhMTA4ZmUzZDMwY2FjYzM1YzA4NzFkOTYzNWY4MWUwOTEyNjM4YTg0OGY4MDk1YTRlNjYxNzAyMGIwMTUzNTE3M2JjZjNkOTQzMGYxZTUzNjQyODVlMDUyMzIyMzcwZWM1NjkxOTYyZmMwYTkyNzc3Nw==',null )
  }

}

