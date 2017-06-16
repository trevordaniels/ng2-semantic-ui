import { MessageConfig } from "./message-config";
import { SuiActiveMessage } from "./active-message";
import { SuiMessageContainer } from "./message-container";


export class MessageController {
    private _container:SuiMessageContainer;

    public registerContainer(container:SuiMessageContainer):void {
        this._container = container;
    }

    public show(config:MessageConfig):SuiActiveMessage {
        this.throwContainerError();

        return this._container.show(config);
    }

    public dismissAll():void {
        this.throwContainerError();

        return this._container.dismissAll();
    }

    private throwContainerError() {
        if (!this._container) {
            throw new Error("You must pass this controller to a message container.");
        }
    }
}
