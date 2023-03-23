import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { StudyRouteComponent } from './study-route/study-route.component';
import { BlogComponent } from './blog/blog.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { RouterLink } from '@angular/router';
import { StudyRouteFeComponent } from './study-route-fe/study-route-fe.component';
import { StudyRouteBeComponent } from './study-route-be/study-route-be.component';
import { ProfileComponent } from './profile/profile.component';

import { PostsDraftsComponent } from './posts-drafts/posts-drafts.component';
import { PostsPublicComponent } from './posts-public/posts-public.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SettingAccountComponent } from './setting-account/setting-account.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    StudyRouteComponent,
    BlogComponent,
    WriteBlogComponent,
    StudyRouteFeComponent,
    StudyRouteBeComponent,
    ProfileComponent,
    PostsDraftsComponent,
    PostsPublicComponent,
    BookmarkComponent,
    SettingAccountComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
