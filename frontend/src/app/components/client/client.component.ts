import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  // ======================================
  //				Atributes
  // ======================================
  public step: number = 1;
  public valid!: boolean;
  public status: boolean = false;
  public clientForm!: FormGroup;
  // ======================================
  //				Constructor
  // ======================================
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormsDataService
  ) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      basicInfoClient: this.fb.group({
        sons: ["", [Validators.required]],
        sport: ["", [Validators.required]],
      }),
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  public next() {
    this.status = true;
    console.log(this.clientForm.value);
    if (this.step == 3) {
      console.log("enviando form de cliente", this.clientForm.value);
      this.formService.sendForm(this.clientForm.value);
      this.router.navigate(["/despedida"]);
      return;
    }
    this.step++;
  }

  public previous() {
    this.status = false;
    this.step--;
  }
}
