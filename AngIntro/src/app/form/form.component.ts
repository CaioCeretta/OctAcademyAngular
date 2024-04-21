import { Component } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formData: FormData[] = []

  name: string
  address: string
  email: string

  onSubmit() {
    console.log(this.name)

    const newFormData: FormData = {
      name: this.name,
      address: this.address,
      email: this.email
    }

    this.formData.push(newFormData)
  }

  deleteRow(row: any) {
    console.log(row)

    const index = this.formData.indexOf(row)

    this.formData.splice(index, 1)
  }


}
