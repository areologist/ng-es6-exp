import angular from 'angular';
import 'd3';
import 'nvd3';
import 'angular-nvd3';
import { chartDefaults } from './chart-defaults';
import { ChartFactory } from './chart-factory.service';

/**
 * @desc Module includes d3, nvd3, angular-nvd3, and custom chart factory
 * service.
 */
export const charts = angular.module('app.charts', ['nvd3'])
  .constant('chartDefaults', chartDefaults)
  .service('chartFactory', ChartFactory);
