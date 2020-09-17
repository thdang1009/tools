import { ControlType } from './common-model';

export interface PopUpDetail {
    controls: PopupControl[];
}
export interface PopupControl {
    id: number;
    name: string;
    type: ControlType;
    ngModel: string;
    label: string;
    regexTrue: string;

}
export interface Functions {


}
