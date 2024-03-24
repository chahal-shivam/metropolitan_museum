import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../api-handler/http.service'
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/common/loader.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {
  private sink = new Subscription();
  objData: number[] = []
  total: number = 0
  data: any

  constructor(private apiService: HttpService, private loader: LoaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.loader.setLoading(true)
    this.sink.add(this.apiService.get().subscribe((data) => {
      this.data = data
      this.total = data.total
      this.objData = data.objectIDs.slice(0, 30)
      this.loader.setLoading(false)
    }))
  }

  viewMore(): void {
    let more: number[] = this.data.objectIDs.slice(this.objData.length, this.objData.length + 15)
    this.objData = [...this.objData, ...more]
  }

  ngOnDestroy() {
    this.sink.unsubscribe();
  }
  
}
