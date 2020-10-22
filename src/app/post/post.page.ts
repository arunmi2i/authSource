import { Component, OnInit } from '@angular/core';

import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }
  postUrl: string;
  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(state => {
    this.postUrl = state.get('url');
  });
  }

  topics = [{name:"running",isChecked: false},
            {name:"swimming",isChecked: false},
            {name:"trilathon",isChecked: false},
            {name:"bicycling",isChecked: false}];

  subTopics = [{name:"Strength", isChecked:false},
              {name:"Endurance", isChecked:false},
              {name:"Shoe", isChecked:false},
              {name:"Training", isChecked:false}
              ];

  addPost() {

  }
}
