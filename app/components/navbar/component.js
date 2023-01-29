import Component from '@ember/component';

export default Component.extend({
  isOpen: false,

 actions: {
    toggleFlyout(){
      this.toggleProperty('isOpen');
    }
 }
  
});
