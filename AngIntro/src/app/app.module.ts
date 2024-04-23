import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppendCliPipe } from './Pipes/append-cli.pipe';
import { AppendPipe } from './Pipes/append.pipes';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostService } from './Services/post.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    FormComponent,
    AppendPipe,
    AppendCliPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
