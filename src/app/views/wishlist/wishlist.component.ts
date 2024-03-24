import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../api-handler/http.service'
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/common/loader.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  private sink = new Subscription();
  objData: number[] = []
  total: number = 0
  data: any

  constructor(private apiService: HttpService, private loader: LoaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.favouritesList();
  }

  favouritesList(): void {
    this.loader.setLoading(true)
    let favsList = localStorage.getItem("favs")
    if (favsList != null || favsList != undefined) {
      favsList = JSON.parse(favsList)
      if (Array.isArray(favsList)) {
        this.objData = favsList.map(Number);
        this.total = favsList.length
        this.loader.setLoading(false)

      }
    }
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

}
