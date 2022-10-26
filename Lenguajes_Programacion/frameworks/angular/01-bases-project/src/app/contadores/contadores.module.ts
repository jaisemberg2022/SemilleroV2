import { NgModule } from "@angular/core";
import { contadorComponent } from "./contador/contador.component";

@NgModule({
    declarations:[
        contadorComponent
    ],

    exports:[
        contadorComponent
    ]
})

export class ContadorModule {}