import { Component, AfterViewInit, ViewChild, TemplateRef } from "@angular/core";
import { SuiMessageContainer } from "../../../../../components/message/message-container";
import { MessageConfig, MessageState } from "../../../../../components/message/message-config";
import { MessageController } from "../../../../../components/message/message-controller";

@Component({
    selector: "demo-page-test",
    templateUrl: "./test.page.html"
})
export class TestPage {
    public controller:MessageController;

    constructor() {
        this.controller = new MessageController();
    }

    public open():void {
        const message = new MessageConfig(null, MessageState.Default, Date.now().toString());
        message.state = MessageState.Success;

        this.controller.show(message);
    }
}
