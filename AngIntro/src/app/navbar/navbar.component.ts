import { Component, OnInit } from "@angular/core";

@Component(
  {
  selector: 'app-navbar',
  // template: '<h2>This is the navbar component</h2>',
  templateUrl: './navbar.component.html',
  // styles: [`
  //   h2 {
  //     color: green;
  //     font-size: 3.3rem;
  //   }
  // `]
  styleUrls: ['./navbar.component.css']
}
)
export class NavbarComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {

  }


}
