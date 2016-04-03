import angular from 'angular';
import { uiBootstrap } from './ui-bootstrap';
import { navbar } from './navbar/navbar';
import { constants } from './constants';

export const shared = angular.module('shared', [
  uiBootstrap.name,
  navbar.name
])
.constant('constants', constants);
