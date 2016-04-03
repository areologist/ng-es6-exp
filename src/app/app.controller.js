class AppController {
  constructor() {
    this.links = [
      { name: 'Home', component: 'home' },
      { name: 'Demo', component: 'demo' }
    ];
  }
}

AppController.$inject = [];

export { AppController };
