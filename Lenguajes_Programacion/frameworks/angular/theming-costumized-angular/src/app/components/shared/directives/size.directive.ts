import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

//tablas botones ,inputs y text areas
@Directive({
  selector: '[size]',
})
export class SizeDirective implements OnChanges {
  valueElemet:string = ""
  @Input() set size(value:string){
    this.valueElemet = value;
  }

  constructor(private el: ElementRef) {}

  changeZise(){
    this.el.nativeElement.style.lineHeight = "1.75";
    switch (this.valueElemet) {
      case 'small':
        this.el.nativeElement.style.fontSize ='1.3rem';
        this.el.nativeElement.style.padding ='.3rem .9rem';
        return
      case 'medium':
        this.el.nativeElement.style.fontSize ='1.4rem';
        this.el.nativeElement.style.padding ='.5rem 1.5rem';
        return 
      case 'large':
        this.el.nativeElement.style.fontSize ='1.5rem';
        this.el.nativeElement.style.padding ='.8rem 2.2rem';
        return 
      default:
        return;
    }
  }


  ngOnChanges() {
    this.changeZise();
  }
}
