import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion: boolean){
    if(condicion){
      this.viewContainer.createEmbeddedView(this.templateRed)
    }else{
      this.viewContainer.clear()
    }
  }
  constructor( private templateRed: TemplateRef<HTMLElement>,
              private viewContainer: ViewContainerRef) { }



}
