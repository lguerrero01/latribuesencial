import { InfoStepForm } from "./InfoStepForm.interface";

export interface ClientForm {
  basicInfoClient: BasicInfoClient;
  checkArray: string[];
  infoStepForm: InfoStepForm;
  kit: number;
}

export interface BasicInfoClient {
  children: string;
  sport: string;
}
