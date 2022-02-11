import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CompactType, Draggable, GridsterConfig, GridsterItem, GridType, Resizable } from 'angular-gridster2';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface MySafe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
}
@Component({
  selector: 'app-grid-layout-sample',
  templateUrl: './grid-layout-sample.component.html',
  styleUrls: ['./grid-layout-sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridLayoutSampleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  options!: MySafe;
  dashboard!: Array<GridsterItem>;

  ngOnInit(): void {
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      minCols: 4,
      minRows: 3,
      maxCols: 4,
      maxRows: 100,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    // this.dashboard = [
    //   { cols: 2, rows: 1, y: 0, x: 0 },
    //   { cols: 2, rows: 2, y: 0, x: 2 },
    //   { cols: 1, rows: 1, y: 0, x: 4 },
    //   { cols: 3, rows: 2, y: 1, x: 4 },
    //   { cols: 1, rows: 1, y: 4, x: 5 },
    //   { cols: 1, rows: 1, y: 2, x: 1 },
    //   { cols: 2, rows: 2, y: 5, x: 5 },
    //   { cols: 2, rows: 2, y: 3, x: 2 },
    //   { cols: 2, rows: 1, y: 2, x: 2 },
    //   { cols: 1, rows: 1, y: 3, x: 4 },
    //   { cols: 1, rows: 1, y: 0, x: 6 }
    // ];
    this.httpClient.post("/mockapi/PocBankInitial", {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      })
    }).subscribe((res) => {
      this.dashboard = [
        { cols: 1, rows: 1, y: 0, x: 0, cardName: "graph" }
      ];
    });
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
  getPosition(): void {
    this.dashboard.forEach((ele, index) => {
      console.log("cardName : " + ele.cardName + " card X axial : " + ele.x +
        " card Y axial : " + ele.y)
    });
  }
  keepPosition(): void {
    this.dashboard.forEach((ele, index) => {
      console.log(JSON.stringify(ele));
    });
  }
}
