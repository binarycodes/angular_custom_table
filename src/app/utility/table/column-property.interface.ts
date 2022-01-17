export interface ColumnProperty<T> {
    column: keyof T & string;
    label: string;
    display: (element: T) => string;
}