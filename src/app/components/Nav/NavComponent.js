class NavComponentController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const NavComponent = {
  template: require('./NavComponent.html'),
  controller: NavComponentController,
  controllerAs: 'vm'
};

