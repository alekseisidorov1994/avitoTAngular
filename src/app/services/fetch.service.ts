import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageList, Img} from '../interfaces';


@Injectable({
  providedIn: 'root'
})

export class FetchService {

  constructor(private http: HttpClient) {
  }

  getListImages(): Observable<ImageList[]> {
    return this.http.get<ImageList[]>('https://boiling-refuge-66454.herokuapp.com/images');

  }
  getBigImage(imageId): Observable<Img> {
    return this.http.get<Img>(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`);
  }
  postComment(imageId, body): Observable<any> {
    return this.http.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`, body);
  }

}
