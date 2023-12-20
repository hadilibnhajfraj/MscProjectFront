export class Labo {
    public nom_labo:string;
    
    public adresse_labo:string;
    
    public commune_labo:string;
    public pays_labo:string;
   
    public id_labo:number;
    constructor(id_labo:number,nom_labo:string,  adresse_labo:string,
        commune_labo:string,pays_labo:string) {
        this.id_labo = id_labo;
        this.nom_labo=nom_labo;
   
        this.adresse_labo=adresse_labo;

        this.commune_labo=commune_labo;
        this.pays_labo=pays_labo;
      
   
        
      }
}
