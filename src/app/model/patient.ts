export class Patient {
    public nom:string;
    public prenom:string;
    public date_naissance:Date;
    public adresse:string;
    public code_postal:string;
    public commune:string;
    public pays:string;
    public id_patient:number;
    constructor(id_patient:number,nom:string,prenom:string ,date_naissance:Date , adresse:string,code_postal:string,commune:string,pays:string) {
        this.id_patient = id_patient;
        this.nom=nom;
        this.prenom=prenom;
        this.date_naissance=date_naissance;
        this.adresse=adresse;
        this.code_postal=code_postal;
        this.commune=commune;
        this.pays=pays;
      
   
        
      }
}
