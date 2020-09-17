export interface PopupAction {
    functionConfirm: () => {};
    functionCancel: () => {};
    successText: string;
    failureText: string;
}
export interface RichText {
    arr: TextElement[];
}
export interface TextElement {
    context: string;
    style: string;
}
export enum ControlType {
    PCT_SIMPLE_INPUT = 1,
    PCT_COMBO_BOX = 2,
    PCT_CHECK_BOX = 3,
    PCT_TEXT_AREA = 4,
}
export enum FieldType {
    FT_TEXT = 1,
    FT_NUMBER = 2,
    FT_TIMESTAMP = 3,
    FT_ACTION = 4,
    FT_STATUS = 5,
}
