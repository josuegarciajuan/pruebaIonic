import { NgModule } from '@angular/core';
import { StarshipsComponent } from './starships/starships';
import { FilmsComponent } from './films/films';
import { VehiclesComponent } from './vehicles/vehicles';
@NgModule({
	declarations: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent],
	imports: [],
	exports: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent]
})
export class ComponentsModule {}
