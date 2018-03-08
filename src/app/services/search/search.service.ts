import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';


@Injectable()
export class SearchService extends BaseService {


  constructor(public http:HttpClient) {
    super();
    this.objectName = 'search/repositories';
   }

   getOneSearch(term){
    return this.getService('?q=' + term)
  }

   getAllSearches(){
    return this.getService('');
  }

}
