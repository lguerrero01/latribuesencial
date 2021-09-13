import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetDiseasesService {
  public Data: Array<any> = [
    { name: "Ansiedad", value: "ansiedad" },
    { name: "Dermatitis Atopica", value: "dermatitis atopica" },
    { name: "Insmnio", value: "insomnio" },
    { name: "Eczema", value: "eczema" },
    { name: "Caida del Cabello", value: "caida del cabello" },
    { name: "Problenmas estomacales", value: "problenmas estomacales" },
    { name: "Infecciones urinarias", value: "infecciones urinarias" },
    { name: "Migraña", value: "migraña" },
    { name: "Dolores Musculares", value: "dolores musculares" },
    { name: "Problemas Respiratorios", value: "problemas respiratorios" },
  ];
  constructor() {}
}
