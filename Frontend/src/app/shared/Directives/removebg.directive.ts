import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRemovebg]',
})
export class RemovebgDirective implements OnInit {
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor="transparent"
  }
}
