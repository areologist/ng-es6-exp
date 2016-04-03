/**
 * Provides methods for creating nvd3 chart options objects with app defaults
 * and custom selector predicates for data.
 * Also contains some BS data access code that won't survive long..
 */
class ChartFactory {
  constructor($http, constants, chartDefaults) {
    this.$http = $http;
    this.constants = constants;
    this.chartDefaults = chartDefaults;
  }

  /**
   * Builds nvd3 pie chart `options` object using app defaults and provided
   * selector predicates.
   * @param {Function} keyPredicate A function that when applied to a data
   * list item, returns the value to be used as a key.
   * @param {Function} valuePredicate A function that when applied to a data
   * list item, returns the scalar value that pairs with the key.
   * @returns {Object} A pie chart `options` object to be used in initializing
   * a nvd3 chart directive.
   */
  createPieChart(keyPredicate, valuePredicate) {
    const selector = {
      x: keyPredicate,
      y: valuePredicate
    };
    const options = this.chartDefaults.pie.options;
    return {
      chart: Object.assign({}, options.chart, selector)
    };
  }

  /**
   * Just some temporary bullshit to be replaced with real data access
   * infrastructure elsewhere.
   * @todo get rid of this crap, and the `$http` and `constants` dependencies.
   */
  getTestData() {
    const testDataUrl = `${this.constants.api_url}/test-data`;
    return this.$http.get(testDataUrl).then(({ data }) => data);
  }
}

ChartFactory.$inject = ['$http', 'constants', 'chartDefaults'];

export { ChartFactory };
