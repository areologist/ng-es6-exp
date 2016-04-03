import angular from 'angular';

// Register angular-ui-bootstrap components here.
import alert from 'angular-ui-bootstrap/src/alert';
import buttons from 'angular-ui-bootstrap/src/buttons';
import dateparser from 'angular-ui-bootstrap/src/dateparser';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
import modal from 'angular-ui-bootstrap/src/modal';
import tooltip from 'angular-ui-bootstrap/src/tooltip';
import typeahead from 'angular-ui-bootstrap/src/typeahead';

export const uiBootstrap = angular.module('ui-bootstrap', [
  alert,
  buttons,
  dateparser,
  datepicker,
  dropdown,
  modal,
  tooltip,
  typeahead
]);
