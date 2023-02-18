import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';
import{FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})

export class EditBlogComponent {
  constructor(private blogService : BlogServiceService, private route: ActivatedRoute, private router: Router){}
  blogs = this.blogService.blogs;
  sno: any;
  blog: any;
  ngOnInit(): void {
    this.sno = this.route.snapshot.paramMap.get('sno');
    this.blog = this.blogs[this.sno-1];
    this.newBlogForm.controls['title'].setValue(this.blog.title);
    this.newBlogForm.controls['description'].setValue(this.blog.description);
  }
  newBlogForm = new FormGroup({
    title : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.minLength(150), Validators.required])
  })
  get title(){
    return this.newBlogForm.get('title');
  }
  get description(){
    return this.newBlogForm.get('description');
  }
  
  updateBlog(){
    this.blogService.blogs[this.sno-1]=this.newBlogForm.value;
    this.newBlogForm.reset();
    alert("Edits saved successfully.")
    this.router.navigate(['/', 'manage']);
  }
  cancelEdit(){
    this.router.navigate(['/', 'manage']);
  }
}