import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BaseService extends HttpService {

  constructor() {
    super();
  }

  getService(url) {
    const ret = new Subject();
    super.httpGet(url).subscribe(res => {
      if (res) {
        ret.next(res);
      }
    });
    return ret.asObservable();
  }


}
