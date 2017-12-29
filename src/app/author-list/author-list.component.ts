import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Yener','Seda','Eddie'];
   }

  ngOnInit() {
  }

}
