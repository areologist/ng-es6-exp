/**
 * @desc Defines app-default nvd3 chart options by chart type.
 */
const chartDefaults = {
  /**
   * @desc Default options object for pie chart.
   */
  pie: {
    options: {
      chart: {
        type: 'pieChart',
        height: 500,
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: false,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    }
  }
};

export { chartDefaults };
