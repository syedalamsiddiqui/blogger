import { Component, Input } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-record',
  templateUrl: './blog-record.component.html',
  styleUrls: ['./blog-record.component.css']
})
export class BlogRecordComponent {
@Input() item: any;
constructor(private blogService : BlogServiceService){}
deleteBlog(){
  if(confirm("Do you really want to delete this blog?")){
    this.blogService.blogs.splice(this.item[1],1);
  }
}
}
