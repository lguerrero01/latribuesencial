import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { ClientRoutingModule } from "./client-routing.module";

import { Form1ClientComponent } from "./form1-client/form1-client.component";
import { ClientComponent } from "./client.component";

@NgModule({
  declarations: [Form1ClientComponent, ClientComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ClientRoutingModule,
  ],
})
export class ClientModule {}
