import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() type: 'success' | 'info' | 'warning' | 'error';
  @Input() label: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
