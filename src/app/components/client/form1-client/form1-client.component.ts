import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form1-client",
  templateUrl: "./form1-client.component.html",
  styleUrls: ["./form1-client.component.scss"],
})
export class Form1ClientComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  
  constructor(private formBuilder: FormBuilder) {}
  public form1Client: FormGroup = this.formBuilder.group({
    sons: ["", [Validators.required]],
    sport: ["", [Validators.required]]
  });

  ngOnInit(): void {}

  public fieldValid(field: string) {
    return (
      this.form1Client.controls[field].errors &&
      this.form1Client.controls[field].touched
    );
  }
}
