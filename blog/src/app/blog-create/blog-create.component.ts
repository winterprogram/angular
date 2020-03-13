import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  blogdata: { title: any; description: any; blogBody: any; category: any; };
  // blogDescription: any;

  constructor(public bloghttp: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  public blogTitle: any;
  public blogDescription: any;
  public blogCategory: any = ["comedy", "entertainment", "action", "Tech"];
  public blogBodyHtml: any;
//  showSuccess()
//   {
//   let c =  
//   return c;
//   }
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
        this.toastr.success('Blog has been posted successfully', 'Success!');

        setTimeout(() => (
          this.router.navigate(['/blog', data.data.blogId])
        ), 3000)
      },
      error => {
        console.log(error.errormessage)
        this.toastr.error('some error')

      }

    )

  }


}
