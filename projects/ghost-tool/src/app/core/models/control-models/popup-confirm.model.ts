import { PopupAction, RichText } from './common-model';

export interface PopUpConfirm {
    title: string;
    context: RichText[];
    action: PopupAction;
}
