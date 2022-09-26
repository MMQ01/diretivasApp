
import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color:string = 'red'
  private _mensaje: string = 'Este campo es requerido'

  htmlElement : ElementRef<HTMLElement>

  @Input() set color(valor:string){
     
    // this.htmlElement.nativeElement.style.color = valor
    this._color=valor
    this.setColor()
  }


  @Input() set mensaje(valor:string){
      // this.htmlElement.nativeElement.innerText = valor
      this._mensaje=valor
      this.setMensaje()
    }
  @Input() set valido(valor:boolean){
      // this.htmlElement.nativeElement.innerText = valor
      if(valor){
        this.htmlElement.nativeElement.classList.add('hidden')
      }else{
        this.htmlElement.nativeElement.classList.remove('hidden')

      }
    }

  constructor(private el : ElementRef<HTMLElement>) { 

    this.htmlElement=el
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['mensaje']){
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje
    // }
  
    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color
    // }
  }


  ngOnInit(): void {

     
    this.setColor()
    this.setMensaje()
    this.setStyle()
  }

  setStyle(){
    
    this.htmlElement.nativeElement.classList.add('form-text')
  }
  setColor(){
    this.htmlElement.nativeElement.style.color = this._color
  }
  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
