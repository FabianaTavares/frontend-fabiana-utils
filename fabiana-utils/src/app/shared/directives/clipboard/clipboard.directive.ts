import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appClipboard]'
})
export class ClipboardDirective {

  @Input() public copyClipBoard: string;

  @Output() public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {

    event.preventDefault();
    if(!this.copyClipBoard)
      return

    const listener = (e: ClipboardEvent) => {
      const clipboard = e.clipboardData || window['clipboardData'];
      clipboard.setData('text', this.copyClipBoard.toString());
      e.preventDefault();

      this.copied.emit(this.copyClipBoard);
    };

    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);
  }


}
