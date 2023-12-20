export class ResultatFinal {
    public nom:string;
    public prenom:string;
    public date_naissance:Date;
    public adresse:string;
    public code_postal:string;
    public commune:string;
    public pays:string;
    public name:string;
    public val:String;
    public nom_labo:string;
    public date:Date;
    public adresse_labo:string;
    public id_analyse:number;
    constructor(id_analyse:number,
        nom:string,prenom:string ,
        date_naissance:Date ,
        date:Date,
         adresse:string,nom_labo:string,adresse_labo:string,
         code_postal:string,commune:string,pays:string,val:string,name:string) {
        this.id_analyse = id_analyse;
        this.nom=nom;
        this.prenom=prenom;
        this.date_naissance=date_naissance;
        this.adresse=adresse;
        this.code_postal=code_postal;
        this.commune=commune;
        this.pays=pays;
      this.name=name;
      this.val=val;
     this.nom_labo=nom_labo;
     this.adresse_labo=adresse_labo;
       this.date=date 
      }
}

