import { NgModule } from '@angular/core';
import { StarshipsComponent } from './starships/starships';
import { FilmsComponent } from './films/films';
import { VehiclesComponent } from './vehicles/vehicles';
import { ItemComponent } from './item/item';
@NgModule({
	declarations: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent],
	imports: [],
	exports: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent]
})
export class ComponentsModule {}
