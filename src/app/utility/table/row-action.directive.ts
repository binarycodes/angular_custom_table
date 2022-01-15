import { Directive, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: '[bnRowAction]'
})
export class RowActionDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}