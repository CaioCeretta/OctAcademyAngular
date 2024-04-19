// import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
// import { PostComponent } from './post/post.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit{
//   title = 'AngIntro';
//   parentMessage: string = 'Message from the parent component changed';
//   message: string
//   childOutput: string

//   receiveMessage(message: string) {
//     this.childOutput = message
//   }

//   @ViewChild(PostComponent) childComp;

//   constructor(private cdref: ChangeDetectorRef) {}

//   ngAfterViewInit(): void {
//       this.message = this.childComp.childMessage

//       this.cdref.detectChanges()
//   }
// }
