import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-tabeldash',
  templateUrl: './tabeldash.component.html',
  styleUrls: ['./tabeldash.component.scss']
})
export class TabeldashComponent implements OnInit {
  @Input() dataSource: any = [];

  @Input() displayedColumns = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }

}
