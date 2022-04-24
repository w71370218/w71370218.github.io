import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post_list = [
    {
      "id": 1,
      "title": "這是一個筆記",
      "text": "內容內容desu"
    },
    {
      "id": 2,
      "title": "那是筆記",
      "text": "內容內容errjiworjeiodesu"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
