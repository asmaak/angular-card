import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      userName: 'natural',
      content: 'I saw tree awesom dyring my hike today'
    },
    {
      title: 'Snowy Mountain',
      imgUrl: 'assets/mountain.jpeg',
      userName: 'mountainLover',
      content: 'Here is a picture of snowy mountain'
    },
    {
      title: 'Mountain Bicking',
      imgUrl: 'assets/biking.jpeg',
      userName: 'biking1222',
      content: 'I did some biking today'
    }

  ];
}
