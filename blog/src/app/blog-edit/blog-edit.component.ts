import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blogdata: { title: any; description: any; blogBody: any; category: any; };
  // blogDescription: any;

  constructor(public bloghttp: BlogHttpService) { }

  public blogTitle: any;
  public blogDescription: any;
  public blogCategory: any = ["comedy", "entertainment", "action", "Tech"];
  public blogBodyHtml: any;

  ngOnInit(): void {
  }
  public createBlog(): any {
    this.blogdata = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }
    this.bloghttp.createBlog(this.blogdata).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error.errormessage)

      }

    )

  }

}
