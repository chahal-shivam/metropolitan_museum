import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
  }
  getLoading(): boolean {
    return this.loader.getLoading();
  }

}
