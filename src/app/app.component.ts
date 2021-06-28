import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {
  }

  onTerm(term: string) {
    // subscribe gonna be called with respons from http
    this.wikipedia.search(term).subscribe((res:any) => {
      this.pages = res.query.search;
    })
  }
}

