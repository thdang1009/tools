import { Component, OnInit } from '@angular/core';
import { LifeFactor } from '../../core/models';
import { AppSettings } from '../../../configs/config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'my-org-life-circle-drawer',
  templateUrl: './life-circle-drawer.component.html',
  styleUrls: ['./life-circle-drawer.component.scss']
})
export class LifeCircleDrawerComponent implements OnInit {

  // flag
  isHotReload: boolean = false;
  isRunning: boolean = false;

  // list
  listFactor: LifeFactor[] = [];

  // var
  editField: string;

  // modal
  modalConfirmResetRef: any;


  constructor(
    private modalService: NgbModal,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.initSource();
  }

  initSource() {
    this.listFactor = JSON.parse(JSON.stringify(AppSettings.FactorInit));
  }

  addFactor() {
    // not implemented yet !
  }

  removeFactor() {
    // not implemented yet !
  }

  updatePreview() {
    this.isRunning = true;

    setTimeout(() => {
      this.isRunning = false;
    }, 1000);
  }

  exportLCtoPNG() {
    // not implemented yet !
  }

  reset() {
    this.listFactor = [...AppSettings.FactorInit];
    this.isRunning = false;
  }

  // open popup function
  openPopupReset(template: any) {
    this.isRunning = true;
    this.modalConfirmResetRef = this.modalService.open(template);
  }

  // table function

  // side function
  setFocus(elementId: string) {
    // console.log(elementId);
    const element: any = document.getElementById(elementId) as HTMLElement;
    setTimeout(() => element.focus())
  }

}
