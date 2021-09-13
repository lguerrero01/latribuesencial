import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {}

// ======================================
//				Reactive Forms
// ======================================
  public personalInfo: FormGroup = this.formBuilder.group({
    ocupation: ['', [Validators.required]]
  });

  ngOnInit(): void {}

  public next() {
    this.status = true;
    this.step++;
  }

  public previous() {
    this.status = false;
    this.step--;
  }
}
