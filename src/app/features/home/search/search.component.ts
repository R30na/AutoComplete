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
  private repository:Repository;
  private search: string;
  private mode:string='search';

  constructor(private searchService: SearchService) { }

  
  ngOnInit() {

  }

  getRepositories(term) {
    this.searchService.getOneSearch(term).subscribe((res:any) => {
      console.log(res.items);
      this.repos = res.items;
    })
  }

  getSearch(search) {
    if(search.length > 3){
      this.getRepositories(search);

    } else {
      this.repos = [];
    }
  }

  getOwner(search){
    console.log(search);
    this.mode = 'card';
    this.search = ''
    this.repository = search;
  }

}
