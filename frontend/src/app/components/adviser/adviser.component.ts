import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-adviser",
  templateUrl: "./adviser.component.html",
  styleUrls: ["./adviser.component.scss"],
})
export class AdviserComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  public step: number = 1;
  public valid!: boolean;
  status: boolean = false;
  public adviserForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  // ======================================
  //				Reactive Forms
  // ======================================
  public personalInfo: FormGroup = this.fb.group({});
  public nuevaPropiedad: boolean = false;
  ngOnInit(): void {
    this.adviserForm = this.fb.group({
      form1Adviser: this.fb.group({
        ocupation: ["", [Validators.required]],
        maritalStatus: ["", [Validators.required]],
        sons: ["", [Validators.required]],
      }),
      checkArray: this.fb.array([], [Validators.required]),
      form2Adviser: this.fb.group({
        bePart: ["", [Validators.required]],
        desc: ["", [Validators.required]],
      }),
      form3Adviser: this.fb.group({
        card: ["", [Validators.required]],
        working: ["", [Validators.required]],
        help: ["", [Validators.required]],
      }),
    });
  }

  public next() {
    if (this.step == 6) {
      console.log("enviando form de adviser", this.adviserForm.value);
      this.router.navigate(["/despedida"]);
      return;
    }
    this.status = true;
    this.step++;
  }

  public previous() {
    this.status = false;
    this.step--;
  }
  public disabled(field: string) {
    return this.adviserForm.controls[field].valid;
  }
}
