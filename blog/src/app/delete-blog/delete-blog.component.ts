import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, public blogserve: BlogHttpService) { }

  ngOnInit(): void {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)

    // this.blogserve.delete(myBlogId).subscribe(
    //   data => {
    //     alert("Blog deleted" + data)
    //   },
    //   error => {
    //     alert(error.errormessage)
    //   }
    // )
  }

}
