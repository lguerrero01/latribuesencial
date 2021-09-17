import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { FormsDataService } from "@shared/services/forms-data.service";

@Component({
  selector: "app-step4",
  templateUrl: "./step4.component.html",
  styles: [],
})
export class Step4Component implements OnInit {
  // ======================================
  //				Inputs y Outputs
  // ======================================
  @Input() formGroupName: string;
  @Output() messageEvent = new EventEmitter<string>();
  // ======================================
  //				Attributes
  // ======================================
  public role: string = "";
  public selected: boolean = true;
  public client: boolean = false;
  public adviser: boolean = false;

  constructor(private formService: FormsDataService) {}

  ngOnInit(): void {}

  public roleSelected($event: string) {
    if ($event.includes("cliente")) {
      this.client = true;
      this.adviser = false;
      this.messageEvent.emit($event);
    }
    {
      if ($event.includes("asesor")) {
        this.client = false;
        this.adviser = true;
        this.messageEvent.emit($event);
      }
    }

    // this.formService.getRole($event);
  }
}
