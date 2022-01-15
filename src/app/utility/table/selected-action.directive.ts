import { Directive, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: '[bnSelectedAction]'
})
export class SelectedActionDirective {
    constructor(public templateRef: TemplateRef<any>) { }
}