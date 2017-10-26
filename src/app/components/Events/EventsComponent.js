class EventsComponentController {
  constructor(eventService) {
    this.eventService = eventService;
    this.showText = false;
  }
}

export const EventsComponent = {
  template: require('./EventsComponent.html'),
  controller: EventsComponentController,
  controllerAs: 'vm'
};

