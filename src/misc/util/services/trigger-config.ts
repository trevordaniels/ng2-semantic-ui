export type OpenTrigger = "hover" | "click";

export const OpenTrigger = {
    Hover: "hover" as OpenTrigger,
    Click: "click" as OpenTrigger
};

export type CloseTrigger = "outsideHover" | "click" | "outsideClick" | "itemClick";

export const CloseTrigger = {
    OutsideHover: "outsideHover" as CloseTrigger,
    Click: "click" as CloseTrigger,
    OutsideClick: "outsideClick" as CloseTrigger,
    ItemClick: "itemClick" as CloseTrigger
};
