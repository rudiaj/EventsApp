const DI = [];
export class EventService {
  constructor() {

    this.events = [];
    this.getStoredEvents();
  }

  getStoredEvents() {
    if (localStorage.getItem('storedEvents')) {
      let storedData = JSON.parse(localStorage.getItem('storedEvents'));
      this.events = storedData;
      console.log(this.events, 'iz servisa form')
    }
    else {
      console.log('nema ga')
    }
  }
  deleteEvent(id){
    // find event by id in model and delete it, then set result to be new model
    this.events = this.events.filter(element => {
      return element.id !== id;

    });

    this.setEventsToStorage(this.events);
  }

  setEventsToStorage(event) {
    localStorage.setItem('storedEvents', JSON.stringify(event));
  }
}

EventService.$inject = DI;
