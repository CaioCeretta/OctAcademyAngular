// import { Component } from '@angular/core';
// import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   form: FormGroup;
//   emailRegex = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
//   contactRegex: string = "[789][0-9]{9}"

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

//       contactDetails: new FormGroup({
//         address: new FormControl('', [
//           Validators.required
//         ]),
//         shippingAddress: new FormControl('', [
//           Validators.required
//         ]),
//         contactNo: new FormControl('', [
//           Validators.required,
//           Validators.pattern(this.contactRegex)
//         ])
//       }),

//       skills: new FormArray([])


//     })
//   }

//   get fullName() {
//     return this.form.get('fullName');
//   }

//   get email() {
//     return this.form.get('email')
//   }


//   get address() {
//     return this.form.get('contactDetails.address');
//   }

//   get shippingAddress() {
//     return this.form.get('contactDetails.shippingAddress')
//   }

//   get contactNo() {
//     return this.form.get('contactDetails.contactNo')
//   }

//   get skills() {
//     return this.form.get('skills') as FormArray
//   }

//   addSkills(skills: HTMLInputElement) {
//     const skill = new FormControl(skills.value)

//     this.skills.push(
//       skill
//     )

//     skills.value = ''
//   }

//   removeSkills(index: number) {

//     console.log(index)
//     this.skills.removeAt(index)
//   }

//   onSubmit() {
//     const values = this.form.value

//     console.log(values)

//   }

// }
