class DemoController {
  constructor() {
    this.title = 'Bootstrap Customization';
  }

  $onInit() {
    this.dt = new Date();
    this.format = 'dd-MMMM-yyyy';
  }

  openDatePicker() {
    this.pickerOpened = true;
  }
}

export { DemoController };
