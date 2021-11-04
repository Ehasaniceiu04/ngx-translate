import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer.routing.module";

@NgModule({
    declarations: [
      CustomerComponent
    ],
    imports: [
      CommonModule,
      TranslateModule,
      CustomerRoutingModule
    ],
    providers: [],
    
  })
  export class CustomerModule { }