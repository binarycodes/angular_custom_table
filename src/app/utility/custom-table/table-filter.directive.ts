import { Directive, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: '[bnTableFilter]'
})
export class TableFilterDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}