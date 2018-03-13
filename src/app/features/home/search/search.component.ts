import { Repository } from './../../../models/repository';
import { SearchService } from './../../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public repos: Array<Repository> = [];
  private repository: Repository;
  private search: string;
  public mode: string = 'search';

  constructor(private searchService: SearchService) { }


  ngOnInit() {

  }

  getSearch(search) {
    if (search.length > 3) {
      this.searchService.getOneSearch(search).subscribe((res:any) =>{
        this.repos = res.items;
      });
    } else {
      this.repos = [];
    }
  }

  getOwner(search) {
    console.log(search);
    this.mode = 'card';
    this.search = ''
    this.repository = search;
  }

}
