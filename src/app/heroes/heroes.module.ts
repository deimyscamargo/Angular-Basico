import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    /*mis componentes*/
    HeroeComponent,
    ListadoComponent
  ],
  exports:[/*que cosa quiero hacer publicas*/
    ListadoComponent
  ],
  imports:[/*modulos*/
    CommonModule
  ]
})
export class HeroesModule{

}
