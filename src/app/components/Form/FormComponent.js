class FormComponentController {
  constructor(eventService) {
    this.eventService = eventService;
    this.newEvent = {
      name: '',
      id: '',
      date_start: '',
      date_end: '',
      description: '',
      text: ''
    };

  }

  addEvent() {
    this.newEvent.id = Date.now();
    this.eventService.events.push(this.newEvent);
    this.eventService.setEventsToStorage(this.eventService.events);
    this.newEvent = {
      name: '',
      id: '',
      date_start: '',
      date_end: '',
      description: '',
      text: '',

    };
  }

}

export const FormComponent = {
  template: require('./FormComponent.html'),
  controller: FormComponentController,
  controllerAs: 'vm'
};

