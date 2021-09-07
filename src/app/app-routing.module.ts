import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';

const routes = [
  {path:'' ,component:TopheadingComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
