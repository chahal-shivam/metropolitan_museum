import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  wishlist(objectID: number): void {
    let favsList = localStorage.getItem("favs")
    let newFav;
    if (favsList != null || favsList != undefined) {
      favsList = JSON.parse(favsList)
      if (Array.isArray(favsList)) {
        favsList.map(Number)
        if (favsList?.includes(objectID?.toString())) {
          newFav = favsList.filter(item => item != objectID);
        }
        else {
          favsList.push(objectID?.toString())
          newFav = favsList
        }
      }

    }
    else {
      let fav = []
      fav.push(objectID.toString())
      newFav = fav
    }
    localStorage.setItem("favs", JSON.stringify(newFav))
  }
  checkFav(objectID: number): string {
    let favsList = localStorage.getItem("favs")
    if (favsList != null || favsList != undefined) {
      favsList = JSON.parse(favsList)
      if (favsList?.includes(objectID?.toString())) {
        return "/assets/lover.png"
      }
      else {
        return "/assets/favourite.png"
      }
    }
    else {
      return "/assets/favourite.png"
    }
  }
}
