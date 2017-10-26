export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '',
      component: 'app'
    })
    .state('app.form', {
      url: '/',
      component: 'formComponent'
    })
    .state('app.events', {
      url: '/events',
      component: 'eventsComponent'
    });
}
