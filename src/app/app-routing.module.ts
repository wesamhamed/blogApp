import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './admin/posts/posts.component';
import { TagsComponent } from './admin/tags/tags.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CreateTagComponent } from './admin/create-tag/create-tag.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditTagComponent } from './admin/edit-tag/edit-tag.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { ShowPostComponent } from './admin/show-post/show-post.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'admin/posts', component: PostsComponent },
  { path: 'admin/tags', component: TagsComponent },
  { path: 'admin/comments', component: CommentsComponent },
  { path: 'admin/categories', component: CategoriesComponent },
  { path: 'admin/createPost', component: CreatePostComponent },
  { path: 'admin/createTag', component: CreateTagComponent },
  { path: 'admin/editPost/:id', component: EditPostComponent },
  { path: 'admin/editTag/:id', component: EditTagComponent },
  { path: 'admin/editCategory/:id', component: EditCategoryComponent },
  { path: 'admin/showPost/:id', component: ShowPostComponent },
  { path: 'admin/users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
