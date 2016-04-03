/* eslint-disable no-undef, max-len */
jest.unmock('../../src/app/shared/charts/chart-factory.service');
jest.unmock('../../src/app/shared/charts/chart-defaults');

import { ChartFactory } from '../../src/app/shared/charts/chart-factory.service';
import { chartDefaults } from '../../src/app/shared/charts/chart-defaults';

describe('chartFactory', () => {
  let sut;

  beforeEach(() => (sut = new ChartFactory(null, null, chartDefaults)));

  it('is object', () => {
    expect(typeof sut).toBe('object');
  });

  it('has expected interface', () => {
    expect(typeof sut.createPieChart).toBe('function');
  });

  describe('createPieChart', () => {
    let predicates;

    beforeEach(() => {
      predicates = {
        key: x => x.key,
        val: x => x.val
      };
    });

    it('returns an object', () => {
      const result = sut.createPieChart(predicates.key, predicates.val);
      expect(typeof result).toBe('object');
    });

    it('`chart` object field as expected', () => {
      const result = sut.createPieChart(predicates.key, predicates.val);
      expect(typeof result.chart).toBe('object');
    });

    it('`chart` has correct `type` value', () => {
      const result = sut.createPieChart(predicates.key, predicates.val);
      expect(result.chart.type).toBe('pieChart');
    });

    it('returned predicates match provided arguments', () => {
      const result = sut.createPieChart(predicates.key, predicates.val);
      expect(result.chart.x).toEqual(predicates.key);
      expect(result.chart.y).toEqual(predicates.val);
    });
  });
});
