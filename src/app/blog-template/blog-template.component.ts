import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent {
@Input() item:any;

}
