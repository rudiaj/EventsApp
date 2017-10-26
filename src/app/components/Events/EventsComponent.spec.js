import angular from 'angular';
import 'angular-mocks';
import {eventsComponent} from './EventsComponent';

describe('eventsComponent component', () => {
  beforeEach(() => {
    angular
      .module('eventsComponent', ['app/components/Events/EventsComponent.html'])
      .component('eventsComponent', eventsComponent);
    angular.mock.module('eventsComponent');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<eventsComponent></eventsComponent>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
