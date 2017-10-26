import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {FormComponent} from './app/components/Form/FormComponent';
import {EventsComponent} from './app/components/Events/EventsComponent';
import {NavComponent} from './app/components/Nav/NavComponent';
import {EventService} from './app/services/eventService';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('formComponent', FormComponent)
  .component('eventsComponent', EventsComponent)
  .component('navComponent', NavComponent)
  .service('eventService', EventService);

