import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/';
import { IStore } from 'app/Interfaces/store.interface';


@Component({
  selector: 'app-root',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public stores;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllStores();
  }

  getAllStores = () => {
    var secondHeaders = new Headers({'x-api-key': 'Yn8uMnIhcg==.'});
    this.http.get('http://localhost:30301/api/v1/stores', { headers: secondHeaders}).
      pipe(map(res => res))
      .subscribe(res => {
        this.stores = res;
        console.log(res)
      })
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<IStore[]>('xhttp://localhost:30301/api/v1/stores')
  }

}
