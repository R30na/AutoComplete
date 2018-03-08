import { Repository } from './../../../models/repository';

import { SearchService } from './../../../services/search/search.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private repos: Array<Repository>;
  private search: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  getRepositories(term) {
    this.searchService.getOneSearch(term).subscribe((res:any) => {
      console.log(res.items);
      this.repos = res.items;
    })
  }

  suggest(search) {
    // console.log(search.length);
    if(search.length > 3){
      this.getRepositories(search);
    }
  }

}
