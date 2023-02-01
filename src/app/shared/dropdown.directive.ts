import {Directive,OnInit,HostListener, HostBinding, Input,ElementRef} from '@angular/core'

@Directive({
    selector : '[appDropdown]'
})

export class DropdownDirective implements OnInit {

    ngOnInit(){}

    @HostBinding('class.open') isOpen = false

    // @HostListener('click') clickMe(eventData : Event){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef){}

}