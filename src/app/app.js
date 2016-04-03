import './app.less';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import { shared } from './shared/shared';
import { components } from './components/components';
import { appComponent } from './app.component';

angular.module('app', [
  uiRouter,
  ngAnimate,
  shared.name,
  components.name
])
.config(($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
})
.component('app', appComponent);
