import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
  @Output() messageEvent = new EventEmitter<string>();
  public Data = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder, private diseases: GetDiseasesService) {
    this.Data = this.diseases.Data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
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

  submitForm() {
    this.messageEvent.emit()
    console.log(this.form.value);
  }
}
