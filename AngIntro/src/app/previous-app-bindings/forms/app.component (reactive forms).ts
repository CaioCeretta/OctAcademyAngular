// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {k

//   form: any;
//   emailRegex = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'

//   constructor() {
//     this.form = new FormGroup({
//       fullName: new FormControl('', [
//         Validators.required,
//         Validators.minLength(5)
//       ]),
//       email: new FormControl('', [
//         Validators.required,
//         Validators.pattern(this.emailRegex)
//       ]),
//       address: new FormControl('', [
//         Validators.required
//       ])
//     })
//   }

//   get fullName() {
//     return this.form.get('fullName');
//   }

//   get email() {
//     return this.form.get('email')
//   }

//   get address() {
//     return this.form.get('address')
//   }

//   onSubmit() {
//     const values = this.form.value

//     console.log(values)



//   }

// }
