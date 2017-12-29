import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {
  @Input() name: string;

  constructor() { 

  }

  ngOnInit() {
  }

}
