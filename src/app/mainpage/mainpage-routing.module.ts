import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpagePage } from './mainpage.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: MainpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainpagePageRoutingModule {}
