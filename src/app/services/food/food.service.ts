import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Food} from '../../model/';

@Injectable()
export class FoodService {
  private _path = '/foods';
  public url: string;
  private _options: {
    headers: HttpHeaders
  };

  constructor(private http: HttpClient) {
    // this._url = '__APM_INVENTORY_SERVICE_URL__' + this._path;
    this.url = 'http://localhost:8585/flogz-api' + this._path;

    this._options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public findAll(): Observable<Food[]> {
    return this.http.get<Food[]>(this.url, this._options);
  }

  public filterAll(params: { name, value } []): Observable<Food[]> {
    let requestUrl: string = this.url;

    for (let i = 0; i < params.length; i++) {
      const separator: string = (i === 0) ? '?' : '&';

      requestUrl = requestUrl + separator + params[i].name + '=' + params[i].value;
    }

    return this.http.get<Food[]>(requestUrl, this._options);
  }

  public findOne(id: string): Observable<Food> {
    return this.http.get<Food>(this.url + '/' + id, this._options);
  }

  public create(food: Food): Observable<Food> {
    return this.http.post<Food>(this.url, food, this._options);
  }

  public update(food: Food): Observable<Food> {
    return this.http.put<Food>(this.url + '/' + food.id, food, this._options);
  }

  public delete(food: Food): Observable<Food> {
    return this.http.delete<Food>(this.url + '/' + food.id, this._options);
  }
}
