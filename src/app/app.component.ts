import { Component } from '@angular/core';
import {
  IToasterConfig,
  ToasterConfig,
  BodyOutputType,
  ToasterService,
} from 'angular2-toaster';
import { CounterComponent } from './components/counter/counter.component';
import { Toast } from 'angular2-toaster';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toasterconfig: IToasterConfig = new ToasterConfig({
    animation: 'fade',
    newestOnTop: false,
    positionClass: 'toast-top-right',
    toastContainerId: 2,
    timeout: 0,
    showCloseButton: true,
    tapToDismiss: false,
  });

  constructor(private toasterService: ToasterService) {}

  pop() {
    this.toasterService.pop({
      type: 'success',
      title: 'This is title',
      body: CounterComponent,
      bodyOutputType: BodyOutputType.Component,
    });
  }

  popToastFromObject() {
    var toast: Toast = {
      type: 'info',
      title: 'Test Title',
      body: 'Test Body with hyper link: <a target="_blank" href="https://www.google.com">Here is a Toast Body<a/>',
      onHideCallback: () => console.log(toast.title + ' was closed!'),
    };

    // var toast2: Toast = {
    //   type: 'success',
    //   title: 'Yay',
    //   body: TestComponent,
    //   bodyOutputType: BodyOutputType.Component,
    // };

    var toast3: Toast = {
      type: 'success',
      title: 'close button',
      showCloseButton: true,
    };

    var toastHL: Toast = {
      type: 'warning',
      title: 'Title text',
      body: '<h4>Body text</h4> Test Body with hyper link: <a target="_blank" href="https://www.google.com">Here is a Toast Body',
      bodyOutputType: BodyOutputType.TrustedHtml,
    };

    this.toasterService.pop(toast);
    // this.toasterService.pop(toast2);
    this.toasterService.pop(toast3);

    this.toasterService.pop(toastHL);
  }
}
