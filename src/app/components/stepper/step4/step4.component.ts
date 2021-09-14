import { Component, OnInit } from '@angular/core';
import { FormsDataService } from '@shared/services/forms-data.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styles: [
  ]
})
export class Step4Component implements OnInit {
  public role!: string;
  constructor(private formService: FormsDataService) { }

  ngOnInit( ): void {
  }
  public roleSelected ($event: string){
    this.role =  $event 
    this.formService.getRole(this.role);
  }
}
