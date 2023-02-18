import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'
import { BlogServiceService } from '../services/blog-service.service';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent {
  constructor(private blogService : BlogServiceService){}
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
  postBlog(){
    let temp = [this.newBlogForm.value];
    let temp2 = this.blogService.blogs;
    this.blogService.blogs = temp.concat(temp2);
    // console.warn(this.blogService.blogs);
    this.newBlogForm.reset();
    alert("Blog posted successfully !!!"); 
  }
}