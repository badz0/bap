import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselConfig } from 'ng2-bootstrap/carousel';


@Component({
  selector: 'main-page',
  styleUrls: ['main.scss'],
  templateUrl: 'main.components.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 3500, noPause: true}}]
})
export class MainPageComponent implements OnInit {
  public ngOnInit() {}
}
