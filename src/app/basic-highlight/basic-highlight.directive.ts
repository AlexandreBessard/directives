import {Directive, ElementRef, OnInit} from "@angular/core";
/*
In simple terms, a "Directive" in Angular is used to add special behavior or styling to elements in your application's HTML.
It's like a set of instructions that tells Angular how to interact with and manipulate certain elements.

You can attach this directive to HTML
elements to apply specific behaviors or styles to those elements. For example, it could be used to change the color of
an element when the mouse hovers over it...

So, in summary, a "Directive" is like a tool that helps you enhance the behavior and appearance of elements in your web application.
 */
@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  // Create a property elementRef
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
