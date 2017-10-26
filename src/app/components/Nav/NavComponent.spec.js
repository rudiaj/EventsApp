import angular from 'angular';
import 'angular-mocks';
import {NavComponent} from './NavComponent';

describe('NavComponent component', () => {
  beforeEach(() => {
    angular
      .module('navComponent', ['app/components/Nav/NavComponent.html'])
      .component('navComponent', NavComponent);
    angular.mock.module('NavComponent');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<NavComponent></NavComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
