import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
