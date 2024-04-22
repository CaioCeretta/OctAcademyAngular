# What are the form types in angular?

1. Template - Driven Form

ngForm is a special type of directive, it comes with the FormsModule. it is used to create a form instance in our app,
it can be used to track the form's validation status, control its submission, and access its data, it is used like this

<form #randomVarName="ngForm" (ngSubmit)="submitMethodName(randomVarName)">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" ngModel required>

  <button type="submit" [disabled]="randomVarName.invalid">Submit</button>
</form>



So, in that example ngForm is applied to the <form> element to create a form instance named randomVarName. The ngModel
directive is used to bind input fields to properties on the form model, which is automatically created by angular.

The (ngSubmit) event is bound to a method "submitMethodName" which is defined in the component class

submitMethodName(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // Your form submission logic here
    }
  }

  in the submitForm method we check if the form is valid using form.valid. if it is, we can access the form's data using
  form.value, which contains the values of the formFields.


2. Reactive Form

