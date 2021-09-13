// ======================================
//				Modules
// ======================================
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

// ======================================
//				Components
// ======================================
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
import { DecorationComponent } from "./components/home/decoration/decoration.component";


@NgModule({
  declarations: [AppComponent, HomeComponent, DecorationComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
