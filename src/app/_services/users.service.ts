import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { receitas } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = environment.apiUrl;

  getMedicos(){
    return this.http.get(this.baseUrl + '/medicos').pipe(
      map((Response)=> {
        return Response;
      })
    );
  }

  getPacientes(){
    return this.http.get(this.baseUrl + '/pacientes').pipe(
      map((Response)=> {
        return Response;
      })
    );
  }
  getFarmacias(){
    return this.http.get(this.baseUrl + '/farmacias').pipe(
      map((Response)=> {
        return Response;
      })
    );
  }
  getMedicamentos(){
    return this.http.get(this.baseUrl + '/medicamentos').pipe(
      map((Response)=> {
        return Response;
      })
    );
  }

  getReceitas(){
    return this.http.get(this.baseUrl + '/receitas').pipe(
      map((Response)=> {
        return Response;
      })
    );
  }


  ////Post

  postMedicos(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.baseUrl+'/medicos', formData);
  }

  postPacientes(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.baseUrl+'/pacientes', formData);
  }

  postFarmacias(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.baseUrl+'/farmacias', formData);
  }

  postMedicamentos(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.baseUrl+'/medicamentos', formData);
  }

  postReceitas(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.baseUrl+'/receitas', formData);
  }

  ////PUT
  putFarmacias(formData: FormData, id:Number): Observable<FormData>{
    return this.http.put<FormData>(this.baseUrl+'/farmacias'+ '/' + id, formData);
  }
  putMedicos(formData: FormData, id:Number|undefined): Observable<FormData>{
    return this.http.put<FormData>(this.baseUrl+'/medicos'+ '/' + id, formData);
  }
  putPacientes(formData: FormData, id:Number|undefined): Observable<FormData>{
    return this.http.put<FormData>(this.baseUrl+'/pacientes'+ '/' + id, formData);
  }
  putMedicamentos(formData: FormData, id:Number|undefined): Observable<FormData>{
    return this.http.put<FormData>(this.baseUrl+'/medicamentos'+ '/' + id, formData);
  }
  putReceitas(formData: FormData, id:Number|undefined): Observable<FormData>{
    return this.http.put<FormData>(this.baseUrl+'/receitas'+ '/' + id, formData);
  }

  //delete
  delete(id:Number, apiUrl:string){
    return this.http.delete<receitas>(this.baseUrl + '/'+ apiUrl + '/' + id).pipe(
      map((Response)=> {
        return Response;
      })
    );
  }
  constructor(private http: HttpClient) { }
}
