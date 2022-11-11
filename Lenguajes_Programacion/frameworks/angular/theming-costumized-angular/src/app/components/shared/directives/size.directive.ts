import { Directive, ElementRef, Input } from '@angular/core';

//tablas botones ,inputs y text areas
@Directive({
  selector: 'input,button,table[Size]'
})
export class SizeDirective {

  
  size:string = "";

  @Input() set Size(value:string){
    this.size = value ;
  }
  
  constructor(private elemento: ElementRef) {
  }
  ngOnInit(): void {
   this.Change(this.size);
  }

    Change(size:string)
    {
        switch (size) 
        {
          case 'small':
            return this.elemento.nativeElement.style.transform = "scale(.8)"
          case 'medium':
            return this.elemento.nativeElement.style.transform = "scale(1)"
          case 'large':
            return this.elemento.nativeElement.style.transform = "scale(1.2)"
          default:
            return ;
        }
    }
}
