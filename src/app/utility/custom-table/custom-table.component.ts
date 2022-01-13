import { SelectionModel } from '@angular/cdk/collections';
import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';


export interface MatTableColumns {
  name: string;
  label: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.sass']
})
export class CustomTableComponent<T> implements OnInit {

  private _data: T[] = [];
  @Input("data") set data(d: T[]) {
    this._data = d;
    if (this._data) {
      this.dataSource = new MatTableDataSource<T>(this._data);
      this.selectionMode.reset();
    }
  }


  @Input("columns") columns: MatTableColumns[] = [];
  @Input("selectable") selectable: boolean = false;

  @ViewChild('drawer') public drawer!: MatDrawer;
  @ViewChild('drawer', { read: ViewContainerRef, static: true }) drawerRef!: ViewContainerRef;

  @ContentChild("searchComponentTemplate") searchComponentTemplate!: TemplateRef<unknown>;
  @ContentChild("selectedActionTemplate", { static: false }) selectedActionTemplate!: TemplateRef<any>;
  @ContentChild("rowActionTemplate", { static: false }) rowActionTemplate!: TemplateRef<any>;
  @ContentChild("filterActionTemplate", { static: false }) filterActionTemplate!: TemplateRef<any>;

  selectColumnName: string = '__select';
  rowActionColumn: string = '__actions';

  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  labelMap: Map<string, string> = new Map();
  selection = new SelectionModel<T>(true, []);
  selectionMode: FormControl = new FormControl(false);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.columns) {
      Object.entries(this.columns).forEach(([, v]) => {
        this.labelMap.set(v.name, v.label);
      });
    }

    this.selectionMode.valueChanges.subscribe((val: boolean) => {
      this.dataSource.data = val ? this.selectedItems : this._data;
    });

    this.selection.changed.subscribe(val => {
      if (!val.source.hasValue()) {
        this.selectionMode.setValue(false);
      }
    });
  }

  get displayedColumns(): string[] {
    return [...this.selectable ? [this.selectColumnName] : [], ...this.iterateColumns, ...this.rowActionTemplate ? [this.rowActionColumn] : []];
  }

  get iterateColumns(): string[] {
    return [...this.columns.map(x => x.name)];
  }

  isAllSelected(): boolean {
    const selected = this.selectedItems;
    return this.dataSource.data.every(x => selected.includes(x));
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  get selectedItems(): T[] {
    return [...this.selection.selected];
  }

  openSearch() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
