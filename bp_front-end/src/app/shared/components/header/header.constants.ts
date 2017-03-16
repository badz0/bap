import { Injectable } from '@angular/core';

@Injectable()
export class HeaderConstants {
  public get regularPages(){
    return {
      main: 'main-page',
      auction: 'auction-demo',
    };
  }
  public get logedInPages() {
    return {
      main: 'auction',
      auction: 'auction'
    };
  }
}
