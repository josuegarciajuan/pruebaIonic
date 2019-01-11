import { NgModule } from '@angular/core';
import { StarshipsComponent } from './starships/starships';
import { FilmsComponent } from './films/films';
import { VehiclesComponent } from './vehicles/vehicles';
import { ItemComponent } from './item/item';
import { CharactersComponent } from './characters/characters';
import { ChampValueComponent } from './champ-value/champ-value';
@NgModule({
	declarations: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent,
    CharactersComponent,
    ChampValueComponent],
	imports: [],
	exports: [StarshipsComponent,
    FilmsComponent,
    VehiclesComponent,
    ItemComponent,
    CharactersComponent,
    ChampValueComponent]
})
export class ComponentsModule {}
