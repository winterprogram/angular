import { Component, OnInit } from '@angular/core';
// adding a import to store the url
import { ActivatedRoute, Router } from "@angular/router"
// import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
import { Location } from '@angular/common'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  // defening in private type
  public currentBlog;
  getblogId() {
    throw new Error("Method not implemented.");
  }

  constructor(private _route: ActivatedRoute, private router: Router, public blogserve: BlogHttpService, private location: Location) {

  }

  ngOnInit(): void {


    // following is used to add routing for variable links
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    // this.currentBlog = myBlogId


    this.blogserve.getblogId(myBlogId).subscribe(
      data => {
        this.currentBlog = data.data
      },
      error => {
        console.log(error.errormessage)
      }

    )

  }
 myBlogId = this._route.snapshot.paramMap.get('blogId');
  public deleteBl(){
    this.blogserve.deleteBlog(this.myBlogId).subscribe(
      data => {
        console.log(data),
          alert("Blog is deleted"),
          setTimeout(() => (
            this.router.navigate(['/home'])
          ), 3000)
      },

      error =>{
      console.log(error.errormessage)
    }
    )
  }

  /**
   * goBack
   */
  public goBack() {
    this.location.back();
  }




}
