import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';
import{FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  constructor(private blogService : BlogServiceService, private route: ActivatedRoute, private router: Router){}
  blogs = this.blogService.blogs;
  sno: any;
  blog: any;
  newBlogForm = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('')
  })
  get title(){
    return this.newBlogForm.get('title');
  }
  get description(){
    return this.newBlogForm.get('description');
  }
  ngOnInit(): void {
    this.sno = this.route.snapshot.paramMap.get('sno');
    this.blog = this.blogs[this.sno-1];
    this.newBlogForm.controls['title'].setValue(this.blog.title);
    this.newBlogForm.controls['description'].setValue(this.blog.description);
    this.newBlogForm.controls['title'].disable();
    this.newBlogForm.controls['description'].disable();
  }
  goBack(){
    this.router.navigate(['/', 'manage']);
  }
}
