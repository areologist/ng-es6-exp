import angular from 'angular';
import { home } from './home/home';
import { demo } from './demo/demo';

export const components = angular.module('app.components', [
  home.name,
  demo.name
]);
