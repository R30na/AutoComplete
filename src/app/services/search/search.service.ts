import { Injectable } from '@angular/core';
import { ServiceBaseService } from '../service-base.service';

@Injectable()
export class SearchService extends ServiceBaseService {


  constructor() {
    super();
    this.objectName = 'users';
   }

   getOneSearch(id){
    return this.getService('/' + id)
  }

   getAllSearches(){
    return this.getService('')
  }

}
