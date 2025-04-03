import { Routes } from '@angular/router';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';

export const routes: Routes = [
  { path: '', component: CharacterlistComponent },
  { path: 'filter', component: CharacterFilterComponent },
  { path: 'character/:id', component: CharacterDetailsComponent }
];