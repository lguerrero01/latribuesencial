// ======================================
//				Modules
// ======================================
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";

// ======================================
//				Components
// ======================================
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StepperComponent } from "./components/home/stepper/stepper.component";
import { DecorationComponent } from "./components/home/decoration/decoration.component";
import { Step1Component } from "./components/home/step1/step1.component";
import { Step2Component } from "./components/home/step2/step2.component";
import { Step3Component } from "./components/home/step3/step3.component";
import { Step4Component } from "./components/home/step4/step4.component";
import { Form1AdviserComponent } from "./components/adviser/form1-adviser/form1-adviser.component";
import { AdviserComponent } from './components/adviser/adviser.component';
import { Form2AdviserComponent } from "./components/adviser/form2-adviser/form2-adviser.component";
import { Form1ClientComponent } from './components/client/form1-client/form1-client.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    DecorationComponent,
    Form1AdviserComponent,
    Form2AdviserComponent,
    AdviserComponent,
    Form1ClientComponent,
    ClientComponent],
  imports: [
  SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
