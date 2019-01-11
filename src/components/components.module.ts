import { NgModule } from '@angular/core';
import { StarshipsComponent } from './starships/starships';
import { FilmsComponent } from './films/films';
import { VehiclesComponent } from './vehicles/vehicles';
import { ItemComponent } from './item/item';
import { CharactersComponent } from './characters/characters';
@NgModule({
	declarations: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent,
    CharactersComponent],
	imports: [],
	exports: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent,
    CharactersComponent]
})
export class ComponentsModule {}
