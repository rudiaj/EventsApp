import angular from 'angular';
import 'angular-mocks';
import {tasksComponent} from './FormComponent';

describe('tasksComponent component', () => {
  beforeEach(() => {
    angular
      .module('tasksComponent', ['app/components/Form/FormComponent.html'])
      .component('tasksComponent', tasksComponent);
    angular.mock.module('tasksComponent');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tasksComponent></tasksComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
