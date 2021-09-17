import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
// ======================================
//				servives
// ======================================
import { GetDiseasesService } from "@shared/services/get-diseases.service";
// ======================================
//				Components
// ======================================
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormGroupDirective,
} from "@angular/forms";

@Component({
  selector: "app-diseases",
  templateUrl: "./diseases.component.html",
  styleUrls: ["./diseases.component.scss"],
})
export class DiseasesComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  @Input() checkArray!: string;
  public Data = [];
  formArray!: FormArray;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rootFormGroup: FormGroupDirective,
    private diseases: GetDiseasesService
  ) {
    this.Data = this.diseases.Data;
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    this.formArray = this.form.get(this.checkArray) as FormArray;
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get("checkArray") as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
