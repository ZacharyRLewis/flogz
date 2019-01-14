import {NgModule} from '@angular/core';
import {LeftBarComponent} from './left-bar/left-bar.component';
import {RightBarComponent} from './right-bar/right-bar.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    BottomBarComponent,
    LeftBarComponent,
    RightBarComponent,
    TopBarComponent
  ],
  exports: [
    BottomBarComponent,
    LeftBarComponent,
    RightBarComponent,
    TopBarComponent
  ]
})
export class LayoutModule {
}
