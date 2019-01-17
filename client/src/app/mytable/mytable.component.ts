import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MytableDataSource } from './mytable-datasource';

@Component({
  selector: 'my-table',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.scss']
})
export class MytableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MytableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MytableDataSource(this.paginator, this.sort);
  }
}
