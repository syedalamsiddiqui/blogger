import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'create', component: CreateBlogComponent},
  {path:'manage', component: ManageBlogsComponent},
  {path:'manage/edit/:sno', component: EditBlogComponent},
  {path:'manage/view/:sno', component: ViewBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
