import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Analyse } from '../model/analyse';
import { Labo } from '../model/labo';
import { Patient } from '../model/patient';
import { Resultat } from '../model/resultat';
import { ResultatFinal } from '../model/resultat-final';


@Injectable({
  providedIn: 'root'
})
export class AnalysesService {
 
  
  [x: string]: any;
  constructor(private http: HttpClient) { }
  public getAllAnalyse(): Observable<any> {
    return this.http.get(`${environment.apiUrlPhp}/index.php`)
  }
//   public dowlandFile(): Observable<string>{
      
//       return this.http.get(`${environment.apiUrlPhp}/afficher_pdf.php`).pipe(
//           map(response => {
//               var anonymous = <any>response;
//               return anonymous._body;
//           })
//           );
// }
 
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
  })
}

public getAllAnalyses(offset: number, limit: number): Observable<any> {
  return this.http.get(`${environment.apiUrlPhp}/getAll.php?offset=${offset}&limit=${limit}`)
}
public getAllPatient(offset: number, limit: number): Observable<any> {
  return this.http.get(`${environment.apiUrlPhp}/patient.php?offset=${offset}&limit=${limit}`)
}
public getAllLabo(offset: number, limit: number): Observable<any> {
  return this.http.get(`${environment.apiUrlPhp}/labo.php?offset=${offset}&limit=${limit}`)
}
public getAllResultat(offset: number, limit: number): Observable<any> {
  return this.http.get(`${environment.apiUrlPhp}/resultat.php?offset=${offset}&limit=${limit}`)
}
public updateAnalyse(id_analyse: any,
  patient_num:any,labo_num:any,date:any,pdf_num:any) {
  return this.http.put<any>(environment.apiUrlPhp + '/update_analyse.php',
  {id_analyse,patient_num,labo_num,date,pdf_num}
  ).pipe(map(Analyse=>{
    return Analyse;
  }))
}
public updateResultat(id_resultat: any,
  num_analyse:any,nom_resultat:any,valeur_resultat:any): Observable<Resultat> {
  return this.http.put<any>(`${environment.apiUrlPhp}/update_resultat.php`,
  {id_resultat,num_analyse,nom_resultat,valeur_resultat}
  ).pipe(map(Resultat=>{
    return Resultat;
  }))
}
public updatePatient(id_patient: any,
  nom:any,prenom:any,date_naissance:any,adresse:any,code_postal:any,commune:any,pays:any) {
  return this.http.put<any>(`${environment.apiUrlPhp}/update_patient.php`,
  {id_patient,nom,prenom,date_naissance,adresse,code_postal,commune,pays}
  ).pipe(map(Patient=>{
    return Patient;
  }))
}
public updateLabo(id_labo: any,
  nom_labo:any,adresse_labo:any,
  commune_labo:any,pays_labo:any): Observable<Labo> {
  return this.http.put<any>(`${environment.apiUrlPhp}/update_labo.php`,
  {id_labo,nom_labo,adresse_labo,commune_labo,pays_labo}
  ).pipe(map(Labo=>{
    return Labo;
  }))
}
public getAnalyseId(id_analyse: number): Observable<Analyse[]>
  {
    return this.http.get<Analyse[]>(
      environment.apiUrlPhp+'/getAnalyseId.php?'+'id_analyse=' +id_analyse 
      );
  }
  public getAllId(id_analyse: number): Observable<ResultatFinal[]>
  {
    return this.http.get<ResultatFinal[]>(
      environment.apiUrlPhp+'/getAll.php?'+'id_analyse=' +id_analyse 
      );
  }
  public getPatientId(id_patient: number): Observable<Patient[]>
  {
    return this.http.get<Patient[]>(
      environment.apiUrlPhp+'/getPatientId.php?'+'id_patient='+id_patient 
      );
  }
  public getLaboratoireId(id_labo: number): Observable<Labo[]>
  {
    return this.http.get<Labo[]>(
      environment.apiUrlPhp +'/getLaboId.php?'+'id_labo='+id_labo 
      );
  }
  public getResultatId(id_resultat: number): Observable<Resultat[]>
  {
    return this.http.get<Resultat[]>(
      environment.apiUrlPhp+'/getResultat.php?'+'id_resultat=' +id_resultat 
      );
  }
public createPatient(nom: any,prenom: any,
  date_naissance: any,adresse: any,code_postal: any,commune: any,pays: any){
  return this.http.post<any>(`${environment.apiUrlPhp}/create_patient.php`,
   { nom,prenom,date_naissance,adresse,code_postal,commune,pays })
  .pipe(map(Patient => {
      return Patient;
  }));
}
public createlabo(nom_labo: any,adresse_labo: any,
  commune_labo: any,pays_labo: any){
  return this.http.post<any>(`${environment.apiUrlPhp}/create_labo.php`,
   { nom_labo,adresse_labo,commune_labo,pays_labo })
  .pipe(map(Labo => {
      return Labo;
  }));
}
public createAnalyse(patient_num: any,labo_num: any,
  date: any,pdf_num: any){
  return this.http.post<any>(`${environment.apiUrlPhp}/create_analyse.php`,
   { patient_num,labo_num,date,pdf_num })
  .pipe(map(Analyse => {
      return Analyse;
  }));
}
public createResultat(num_analyse: any,nom_resultat: any,
  valeur_resultat: any){
  return this.http.post<any>(`${environment.apiUrlPhp}/create_resultat.php`,
   { num_analyse,nom_resultat,valeur_resultat })
  .pipe(map(Resultat => {
      return Resultat;
  }));
}
removeResultat(id_resultat: number): Observable<Resultat[]> {
  return this.http.delete<Resultat[]>(environment.apiUrlPhp+'/delete_resultat.php?id_resultat='+id_resultat );
}
removePatient(id_patient: number): Observable<Patient[]> {
  return this.http.delete<Patient[]>(environment.apiUrlPhp+'/delete_patient.php?id_patient='+id_patient );
}
removeAnalyse(id_analyse: number): Observable<Analyse[]> {
  return this.http.delete<Analyse[]>(environment.apiUrlPhp+'/delete_analyse.php?id_analyse='+id_analyse );
}
removeLabo(id_labo: number): Observable<Labo[]> {
  return this.http.delete<Labo[]>(environment.apiUrlPhp+'/delete_labo.php?id_labo='+id_labo );
}
public uploadFile(data: any) {
  let uploadURL = `${environment.apiUrlPhp}/display_pdf.php`;
  return this.http.post<any>(uploadURL, data);
}
  }

