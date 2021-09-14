import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

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
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      basicInfoClient: this.fb.group({
        sons: ["", [Validators.required]],
        sport: ["", [Validators.required]],
      }),
      checkArray: this.fb.array([], [Validators.required]),
    });
    console.log(this.clientForm);
  }

  public next() {
    this.status = true;
    if (this.step == 3) {
      this.router.navigate(["/last"]);
      return;
    }
    this.step++;
  }

  public previous() {
    this.status = false;

    this.step--;
  }
}
