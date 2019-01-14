import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FoodListComponent} from './components';

const routes: Routes = [
  {path: 'foods', component: FoodListComponent},
  {path: '', redirectTo: 'foods', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
