import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsDataService } from "@shared/services/forms-data.service";
import { GetKitsService } from "@shared/services/get-kits.service";

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
  public disabled: boolean = true;
  // ======================================
  //				Constructor
  // ======================================
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormsDataService,
    private getKits: GetKitsService
  ) {}

  ngOnInit(): void {
    this.formService.disableNext$.subscribe((rest) => {
      this.disabled = rest;
    });
    
    this.clientForm = this.fb.group({
      basicInfoClient: this.fb.group({
        children: ["", [Validators.required]],
        sport: ["", [Validators.required]],
      }),
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  public next() {
    this.status = true;
    console.log(this.clientForm.value);
    if (this.step == 2) {
      this.getKits.getKitsByDiseases(this.clientForm.value.checkArray);
    }

    if (this.step == 3) {
     
      console.log("enviando form de cliente", this.clientForm.value);
      this.formService.sendFormClient(this.clientForm.value);
      // this.router.navigate('');
      window.location.href = 'https://www.doterra.com/US/en/selectRegion/WC/8619844';
      return;
    }
    this.step++;
  }

  public previous() {
    this.status = false;
    this.step--;
  }
  public getValid($event: boolean) {
    this.valid = $event;
  }
}
