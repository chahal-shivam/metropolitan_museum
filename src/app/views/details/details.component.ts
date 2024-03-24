import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/api-handler/http.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/common/loader.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private sink = new Subscription()
  objId:any;
  objData:any
  constructor(private apiService : HttpService,private route: ActivatedRoute, private loader: LoaderService, private common:CommonService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.objId = +params['itemId']; // Convert to number
    });
    this.getDetails()

  }

  getDetails(){
    this.loader.setLoading(true)
    this.sink.add(this.apiService.getObjData(this.objId).subscribe((data)=>{
      this.objData = data
      if(data.primaryImage && data.additionalImages.length >0){
        data.additionalImages.push(data.primaryImage)
      }
      this.loader.setLoading(false)
    })
  )
  }
  wishlist(objectID: number): void {
    this.common.wishlist(objectID)
   }
   checkFav(objectID: number): string {
    let src = this.common.checkFav(objectID)
    return src
   }

  showImage(imgUrl: string): void {
    
    const mainImage = document.querySelector('.main-image img') as HTMLImageElement;
    if (mainImage) {
      mainImage.src = imgUrl;
    }
  }
  

}
