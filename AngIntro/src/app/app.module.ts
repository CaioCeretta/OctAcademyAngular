import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppendPipe } from './Pipes/append.pipes';
import { AppendCliPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostService } from './Services/post.service';

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
    FormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
