import { InfoStepForm } from "./InfoStepForm.interface";

export interface AdviserForm {
  form1Adviser: Form1Adviser;
  checkArray: string[];
  form2Adviser: Form2Adviser;
  form3Adviser: Form3Adviser;
  kit: number;
  infoStepForm: InfoStepForm;
}

export interface Form1Adviser {
  ocupation: string;
  maritalStatus: string;
  childrenAdviser: string;
}

export interface Form2Adviser {
  bePart: string;
  desc: string;
}

export interface Form3Adviser {
  card: string;
  workingStatus: string;
  help: string;
}
