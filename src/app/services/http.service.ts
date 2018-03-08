import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../configurations/configs';

import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

  public objectName: string;
  public baseUrl:string = Config.getUrl();
  public http:HttpClient;

  constructor() { }


  httpGet(objectsuffix: string){
    return this.http.get(this.baseUrl+this.objectName+objectsuffix).map(res => res)
  }

}
