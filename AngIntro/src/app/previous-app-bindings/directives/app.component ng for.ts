// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']
//   stepForm: string = 'Something else'
//   isActive: boolean = true;


//   objArray: Array<{id: number, postTitle: string, postDetails: string}> = [
//     {
//       id: 1,
//       postTitle: 'Post 1',
//       postDetails: 'Post detail'
//     },
//     {
//       id: 2,
//       postTitle: 'Post 2',
//       postDetails: 'Post detail'
//     },
//     {
//       id: 3,
//       postTitle: 'Post 3',
//       postDetails: 'Post detail'
//     },
//     {
//       id: 4,
//       postTitle: 'Post 4',
//       postDetails: 'Post detail'
//     },
//     {
//       id: 5,
//       postTitle: 'Post 5',
//       postDetails: 'Post detail'
//     }
//   ]

//   constructor() {
//     for(let i in this.postArray) {
//       console.log(this.postArray[i])
//     }
//   }

//   addNew() {
//     this.objArray.push({ id: 6, postTitle: 'Post 6', postDetails: 'post details'})
//   }

//   onDelete(post) {

//     let index = this.objArray.indexOf(post)
//     this.objArray.splice(post, 1)
//   }


//   onClick(status) {
//     this.stepForm = status
//   }


// }
