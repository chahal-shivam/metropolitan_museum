import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/api-handler/http.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-museum-card',
  templateUrl: './museum-card.component.html',
  styleUrls: ['./museum-card.component.scss']
})
export class MuseumCardComponent implements OnInit {

  @Input() objectID: any
  private sink = new Subscription()
  cardData: any;
  favsList: any
  constructor(private apiService: HttpService, private router: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.getObjectData();
  }

  getObjectData() {
    this.sink.add(this.apiService.getObjData(this.objectID).subscribe((res) => {
      this.cardData = res
    },
      (err) => {
        console.log(err)
      }))
  }
  goToDetails(objectID: number): void {
    this.router.navigate(['/details', objectID]);
  }
  wishlist(objectID: number): void {
   this.common.wishlist(objectID)
  }
  checkFav(objectID: number): string {
   let src = this.common.checkFav(objectID)
   return src
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }

}
