import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject,interval  } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface ApiData {
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {


  private apiValueSubject = new BehaviorSubject<any>({ nom: 'Valeur initiale de l\'API' });
  
  apiValue$ = this.apiValueSubject.asObservable();

  constructor(private http: HttpClient) {
    interval(500)
      .pipe(
        switchMap(() => this.http.get<any>('http://127.0.0.1:8000/POCKER'))
      )
      .subscribe((data) => {
        this.apiValueSubject.next(data);
      });
  }












}
