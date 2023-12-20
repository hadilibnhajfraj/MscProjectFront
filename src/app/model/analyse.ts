export class Analyse {
  public patient_num:number;
   public labo_num:number;
   public pdf_num:number;
    public date:Date;
    public id_analyse:number;
    constructor(id_analyse:number,patient_num:number,labo_num:number,pdf_num:number,date:Date) {
        this.id_analyse = id_analyse;
         this.patient_num=patient_num;
         this.labo_num=labo_num;
         this.pdf_num=pdf_num;
        this.date=date;
        
      }
}
