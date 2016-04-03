import angular from 'angular';
import { demoComponent } from './demo.component';

export const demo = angular.module('demo', [])
.config(($stateProvider) => {
  $stateProvider.state('demo', {
    url: '/demo',
    template: '<demo></demo>'
  });
})
.component('demo', demoComponent);
