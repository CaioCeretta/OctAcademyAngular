import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {



  messagePost: string = 'Message Post'

  title: string = 'List of Posts'

  postParentMessage: string = 'Message coming from the post parent'

  childMessage: string = 'From Child Component'

  emittedString: string = 'Emitted String'

  outputChildMessage: string = 'Message from child component via output decorator'

  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>()

  sendMessage() {
    this.messageEvent.emit(this.emittedString)
  }



}
