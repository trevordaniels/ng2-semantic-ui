import { ElementRef,Output,EventEmitter } from "@angular/core";
import { OpenTrigger,CloseTrigger } from "misc/util/services/trigger-config";
import { HandledEvent } from "misc";

export class TriggeringService {
    public readonly anchor: ElementRef;
    public readonly subject: ElementRef;

    @Output("open")
    public onOpen: EventEmitter<void>;

    @Output("close")
    public onClose: EventEmitter<void>;

    private _openingTimeout: any;
    private _closingTimeout: any;

    public hoverOpenDelay: number;
    public hoverCloseDelay: number;

    // Sets the "open" trigger of the  - i.e. what user action causes it to open.
    public openTrigger: OpenTrigger;
    // Sets the "close" triggers of the  - i.e. what user actions cause it to close.
    public closeTriggers: CloseTrigger[];

    private _placement: string;

    public get placement(): string {
        return this._placement;
    }

    public set placement(placement: string) {
        this._placement = placement;
    }

    constructor(anchor: ElementRef,subject: ElementRef,arrowSelector?: string) {
        this.anchor = anchor;
        this.subject = subject;
        this._placement = "placement";

        this.hoverOpenDelay = 100;
        this.hoverCloseDelay = 500;
        this.openTrigger = OpenTrigger.Click;
        this.closeTriggers = [CloseTrigger.Click,CloseTrigger.ItemClick,CloseTrigger.OutsideClick];

        this.onOpen = new EventEmitter<void>();
        this.onClose = new EventEmitter<void>();
    }

    public handleClick(e: HandledEvent): void {
        if (e.eventHandled) {
            return;
        }
        e.eventHandled = true;
        if (this.openTrigger === OpenTrigger.Click && !this.isOpen) {
            this.onOpen.emit();
        } else if (this.isOpen && this.closeTriggers.indexOf(CloseTrigger.Click) > -1) {
            this.onClose.emit();
        }
    }
}
