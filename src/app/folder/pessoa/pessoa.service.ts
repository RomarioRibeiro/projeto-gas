import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from 'src/app/core/models/pessoa.model';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = `${environment.apiUrl}/pessoas`
   }

   getAll(){
    return this.http.get<any>(`${this.apiURL}`)
    .toPromise()
    
    .then(response => response);
    }
    
    getById(id: string) {
      return this.http.get<any>(`${this.apiURL}/${id}`)
        .toPromise();
    }
    create(pessoa: Pessoa) {
      return this.http.post<any>(`${this.apiURL}`, pessoa).toPromise();
    }
    update(id: string, pessoa: Pessoa) {
      return this.http.put<any>(`${this.apiURL}/${id}`, pessoa).toPromise();
    }
    delete(id: string) {
      return this.http.delete(`${this.apiURL}/${id}`)
        .toPromise();
    }
}
