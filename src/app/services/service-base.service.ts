import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ServiceBaseService extends HttpService {

  constructor() {
    super();
  }

  getService(url){
    const ret = new Subject();
    super.httpGet(url).subscribe(res => {
      if(res){
        ret.next(res);
      }
    });
    return ret.asObservable();
  }

}
