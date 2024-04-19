import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  title: string = ''

  details: string = ''

  imageUrl: string = ''

  url: string = ''

  addBackground: boolean



}
