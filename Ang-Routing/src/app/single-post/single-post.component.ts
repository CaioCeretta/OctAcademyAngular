import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    /* The paramMap is an observable, which is a sequence of data that is emitted data asynchronously or synchronously
    over a period of time.
    It means that it will continuously observe a set of stream data & automatically update or track that sequence of data
    whenever there is something changed.

    Example 1 in the app.component.ts



    */
    this.route.paramMap.subscribe(value => {
      const id = value.get('id');
      const title = value.get('title')

      console.log(id, title)

    })
  }

}
