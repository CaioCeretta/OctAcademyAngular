import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  posts: Array<any>

  constructor(private postService: PostService) {
    this.posts = postService.postList
  }

  addNewData() {
    let newPost: Post = {
      id: this.posts.length + 1,
      postTitle: 'Post ' + (this.posts.length + 1),
      date: new Date()
    }

    this.postService.addPost(newPost)
  }




}
