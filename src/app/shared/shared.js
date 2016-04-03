import angular from 'angular';
import { uiBootstrap } from './ui-bootstrap';
import { navbar } from './navbar/navbar';
import { charts } from './charts/charts';
import { constants } from './constants';

export const shared = angular.module('shared', [
  uiBootstrap.name,
  navbar.name,
  charts.name
])
.constant('constants', constants);
