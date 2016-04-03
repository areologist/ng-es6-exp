class DemoController {
  constructor(chartFactory) {
    this.chartFactory = chartFactory;
    this.title = 'Customize the Styles';
  }

  $onInit() {
    this.dt = new Date();
    this.format = 'dd-MMMM-yyyy';

    this.options = this.chartFactory.createPieChart(x => x.key, x => x.y);
    this.chartFactory.getTestData()
      .then(data => (this.data = data))
      .finally(() => this.api.refresh());
  }

  openDatePicker() {
    this.pickerOpened = true;
  }
}

DemoController.$inject = ['chartFactory'];

export { DemoController };
