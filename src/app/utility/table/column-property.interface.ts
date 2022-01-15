export interface ColumnProperty<T> {
    property: keyof T & string;
    label: string;
    display: (element: T) => string;
}