import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  HostListener,
} from '@angular/core';

//tablas botones ,inputs y text areas
@Directive({
  selector: '[size]',
})
export class SizeDirective implements OnChanges {
  valueElemet: string = '';
  @Input() set size(value: string) {
    this.valueElemet = value;
  }

  sizeProperties: any = {
    0: 'small',
    1: 'medium',
    2: 'large',
  };
  specificsElements: any = {
    0: 'TABLE',
  };

  constructor(private el: ElementRef) {}

  changeZise() {
    this.el.nativeElement.style.lineHeight = '1.75';
    switch (this.valueElemet) {
      case 'small':
        this.el.nativeElement.style.fontSize = '1.3rem';
        this.el.nativeElement.style.padding = '.3rem .9rem';
        this.editSpecificElement(this.el.nativeElement);
        return;
      case 'medium':
        this.el.nativeElement.style.fontSize = '1.4rem';
        this.el.nativeElement.style.padding = '.5rem 1.5rem';
        return;
      case 'large':
        this.el.nativeElement.style.fontSize = '1.5rem';
        this.el.nativeElement.style.padding = '.8rem 2.2rem';
        return;
      default:
        return;
    }
  }
  editSpecificElement(el: HTMLElement) {
    if (el.tagName === 'TABLE') 
    {
      let tr: any = el.querySelectorAll('tr');
      for (let i = 0; i < tr.length; i++) 
      {
        tr[i].style.height = '3.5rem';
      }
      let p: any = el.querySelectorAll('p');
      for (let i = 0; i < p.length; i++) 
      {
        p[i].style.fontSize = '1.3rem';
        p[i].style.margin = 'auto';
      }
    }
  }
  ngAfterViewInit() {
    this.changeZise();
  }
  ngOnChanges() {}
}
