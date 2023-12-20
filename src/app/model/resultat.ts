export class Resultat {
    public num_analyse:number;
    public nom_resultat:string;
    public valeur_resultat:String;
    public id_resultat:number;
     constructor(id_resultat:number,num_analyse:number,nom_resultat:string,valeur_resultat:string) {
         this.id_resultat = id_resultat;
          this.num_analyse=num_analyse;
          this.nom_resultat=nom_resultat;
          this.valeur_resultat=valeur_resultat;
        
         
       }
 }
