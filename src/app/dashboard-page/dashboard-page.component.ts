import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  count: number;
  actions: any;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  displayedColumns: string[] = ['name', 'count', 'actions'];
  public RAW_MATERIAL = [
    { count: 20, name: 'RM-1' },
    { count: 20, name: 'RM-2' },
  ];
  public FINISH_PRODUCT = [
    { count: 0, name: 'FP-1' },
    { count: 0, name: 'FP-2' },
  ];
  ngonit() {}
  RawMaterialAdd(event: any) {
    let eleData = event;
    if (eleData) {
      this.RAW_MATERIAL.forEach((ele) => {
        if (eleData === ele.name) {
          ele.count = ele.count + 1;
        }
      });
      console.log(this.RAW_MATERIAL);
    }
  }
  RawMaterialSub(event: any) {
    let eleData = event;
    if (eleData) {
      this.RAW_MATERIAL.forEach((ele) => {
        if (eleData === ele.name) {
          ele.count = ele.count - 1;
        }
      });
      console.log(this.RAW_MATERIAL);
    }
  }
  FinishProductSub(event: any) {
    let checkMinusValue;
    checkMinusValue = this.FINISH_PRODUCT.find((ele) => ele.name === event && ele.count >0);
    if(checkMinusValue!=undefined){
      if (event === 'FP-2') {
        let fp2add: any=false;
        this.RAW_MATERIAL.forEach((ele) => {
          if (ele.name === 'RM-1') {
            ele.count = ele.count + 7;
            fp2add=true;
          }
           if (ele.name === 'RM-2') {
            ele.count = ele.count + 10;
            fp2add=true
          }
        });
        if (fp2add) {
          this.FINISH_PRODUCT.forEach((ele) => {
            if (event === ele.name && ele.count !=0) {
              ele.count = ele.count - 1;
            }
          });
          console.log(this.RAW_MATERIAL);
        }
      } 
      if (event === 'FP-1') {
        let fp1add: any=false;
        this.RAW_MATERIAL.forEach((ele) => {
          if (ele.name === 'RM-1') {
            ele.count = ele.count + 8;
            fp1add=true;
          }
           if (ele.name === 'RM-2') {
            ele.count = ele.count + 5;
            fp1add=true;
          }
          console.log(this.RAW_MATERIAL);
        });
        if (fp1add) {
          this.FINISH_PRODUCT.forEach((ele) => {
            if (event === ele.name && ele.count!=0) {
              ele.count = ele.count - 1;
            }
          });
          console.log(this.RAW_MATERIAL);
        }
      }
    }

  }
  FinishProductAdd(event: any) {    
    let eleData = event;
    let alertWarnmsg: any;
    if (eleData === 'FP-1') {
      let fpadd: any = false;
      this.RAW_MATERIAL.forEach((ele) => {
        if (ele.name === 'RM-1') {
          if (ele.count >= 8) {
            ele.count = ele.count - 8;
            fpadd = true;
          } else {
            alertWarnmsg = true;
          }
        }
        if (ele.name === 'RM-2' && alertWarnmsg != true &&fpadd) {
          if (ele.count >= 5) {
            ele.count = ele.count - 5;
            if (fpadd) {
              this.FINISH_PRODUCT.forEach((ele) => {
                if (eleData === ele.name && ele.count>=0) {
                  ele.count = ele.count + 1;
                } 
              });
            }
          }
        } else {
          if (alertWarnmsg) {
            alert('Raw Material is out of stock.');
          }
        }
      });
    } else if (eleData === 'FP-2') {
      let fpadd1: any = false;
      this.RAW_MATERIAL.forEach((ele) => {
        if (ele.name === 'RM-1') {
          if (ele.count >= 7) {
            ele.count = ele.count - 7;
            fpadd1 = true;
          } else {
            alertWarnmsg = true;
          }
        }
        if (ele.name === 'RM-2' && alertWarnmsg != true &&fpadd1 ) {
          if (ele.count >= 10) {
            ele.count = ele.count - 10;
            if (fpadd1) {
              this.FINISH_PRODUCT.forEach((ele) => {
                if (eleData === ele.name && ele.count>=0) {
                  ele.count = ele.count + 1;
                }
              });
            }
          }
        } else {
          if (alertWarnmsg) {
            alert('Raw Material is out of stock.');
          }
        }
      });
    }
  }
}
