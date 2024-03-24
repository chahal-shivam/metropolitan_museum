import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumsComponent } from './views/museums/museums.component';
import { DetailsComponent } from './views/details/details.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';


const routes: Routes = [
  {
    path:"",
    component:MuseumsComponent,
    data:{
      title:"Museums"
    }
  },
  { 
    path: 'details/:itemId', 
    component: DetailsComponent,
    data:{
      title:"Details"
    }
  },
  {
    path:"wishlist",
    component:WishlistComponent,
    data:{
      title:"Wishlist"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
