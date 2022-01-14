import { SelectionModel } from '@angular/cdk/collections';
import { ComponentType } from '@angular/cdk/portal';
import { Component, ContentChild, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RowActionDirective } from './row-action.directive';
import { SelectedActionDirective } from './selected-action.directive';
import { TableFilterDirective } from './table-filter.directive';


export interface MatTableColumns<T> {
  name: string;
  label: string;
  display: (element: T) => string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.sass']
})
export class CustomTableComponent<T> implements OnInit {

  @Input() tableHeader: string = '';
  @Input() columns: MatTableColumns<T>[] = [];
  @Input() selectable: boolean = false;
  @Input() paginate: boolean = true;
  @Input() recordsPerPage: number = 10;
  @Input() sortable: boolean = true;
  @Input() customSearchComponent!: ComponentType<unknown>;

  @ViewChild('drawer') public drawer!: MatDrawer;

  @ContentChild(SelectedActionDirective) selectedAction!: SelectedActionDirective;
  @ContentChild(RowActionDirective) rowAction!: RowActionDirective;
  @ContentChild(TableFilterDirective) tableFilter!: TableFilterDirective;

  @ViewChild('customSearchPlaceholder', { read: ViewContainerRef, static: true }) customSearchPlaceholderRef!: ViewContainerRef;

  @ViewChild(MatPaginator, { static: false }) set paginator(matpaginator: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = matpaginator;
    }
  }

  @ViewChild(MatSort, { static: false }) set sort(matsort: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = matsort;
    }
  }

  selectColumnName: string = '__select';
  rowActionColumn: string = '__actions';

  dataSource: MatTableDataSource<T> = new MatTableDataSource();
  labelMap: Map<string, string> = new Map();
  selection = new SelectionModel<T>(true, []);
  selectionMode: FormControl = new FormControl(false);

  private _data: T[] = [];

  constructor() { }

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

    this.setupCustomSearchPlaceholder();
  }

  private setupCustomSearchPlaceholder() {
    this.customSearchPlaceholderRef.clear();
    this.customSearchPlaceholderRef.createComponent(this.customSearchComponent);
  }

  @Input() set data(d: T[]) {
    this._data = d;
    if (this._data) {
      this.dataSource = new MatTableDataSource<T>(this._data);
      this.selectionMode.reset();
    }
  }

  get displayedColumns(): string[] {
    return [...this.selectable ? [this.selectColumnName] : [], ...this.iterateColumns, ...this.rowAction ? [this.rowActionColumn] : []];
  }

  get pageSizeOptions(): number[] {
    const lastOptionRequired: number = this._data.length + (this.recordsPerPage-1);
    return [1, 2, 3, 4, 5].map(num => num * this.recordsPerPage).filter(num => num <= lastOptionRequired);
  }

  private get iterateColumns(): string[] {
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
