import { Component, OnInit } from '@angular/core';
import { FormsDataService } from '@shared/services/forms-data.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent implements OnInit {

  constructor(private formService: FormsDataService) { }

  ngOnInit(): void {
  }

}
