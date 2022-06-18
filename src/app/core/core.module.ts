import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PessoaService } from "../folder/pessoa/pessoa.service";






@NgModule({

    declarations: [],
    imports: [
      RouterModule
    ],
    providers: [
    
  PessoaService,
  HttpClient
    ],
    exports: [],
  
  })
  export class CoreModule{}