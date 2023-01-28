import Component from '@ember/component';

export default Component.extend({
  login: false,
  isOpen: false,

 actions: {
    toggleFlyout(){
      console.log(this.isOpen)
      this.toggleProperty('isOpen');
    }
 }
  
});
