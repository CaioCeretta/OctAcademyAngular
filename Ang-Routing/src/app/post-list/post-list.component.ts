import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      id: 1,
      title: "Title 1",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio nec elit fringilla, id sodales enim finibus.'
    },
    {
      id: 2,
      title: "Title 2",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio nec elit fringilla, id sodales enim finibus.'
    },
    {
      id: 3,
      title: "Title 3",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio nec elit fringilla, id sodales enim finibus.'
    },
    {
      id: 4,
      title: "Title 4",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio nec elit fringilla, id sodales enim finibus.'
    },
    {
      id: 5,
      title: "Title 5",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio nec elit fringilla, id sodales enim finibus.'
    },
  ]

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(value => {
      const page = value.get('page')
      const newest = value.get('orderBy')

      console.log(page, newest)
    })
  }

}
