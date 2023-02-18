import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { BlogTemplateComponent } from './blog-template/blog-template.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogRecordComponent } from './blog-record/blog-record.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ManageBlogsComponent,
    BlogTemplateComponent,
    CreateBlogComponent,
    BlogRecordComponent,
    EditBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
