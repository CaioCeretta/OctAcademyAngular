import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ang-Routing';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    //The $ in front of the name is just a convention so we can easilly identify an observable
    const obsTest$ = new Observable(observer => {

      observer.next('Return from observable')
      observer.next('Second return from observable')

      setTimeout(() => {
        console.log('pausinha')
        observer.next('This is from the timeout')
      }, 2000)

      observer.next('Third return from observable')



    }).subscribe(value => {
      console.log(value)
    })
    /*With the subscribe we are calling this function like a normal function call, and in observables, we have a different
    approach for returning values, which is in the function body, pass the parameter.next() and catch that value from the
    subscribe method.

    In side the subscribe parameter, we are getting all the values returned from that observable
    */

    obsTest$.unsubscribe()

    const obsTest = function() {
      return 'Return From Function'

    }

    const functionCall = obsTest();

    console.log(functionCall)




  }

  onSubmit() {
    // this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], {queryParams: {page: 3, orderBy: 'latest'}});

  }

}
