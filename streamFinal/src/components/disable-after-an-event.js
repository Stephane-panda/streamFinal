AFRAME.registerComponent('disable-after-an-event', {
    multiple: true,
    schema: {
        delay : {type: 'number'},
      component: {type: 'string'},
      event: {type: 'string'}
    },
    init: function () {
        console.log("haled")
        this.handler = () => this.disable();
      this.el.addEventListener(this.data.event, this.handler);
      
    },
    disable: function () {

        setTimeout(() => {
            console.log(this.data.component)
            this.el.removeAttribute(this.data.component);
        }, this.data.delay);
        
    },
    remove: function () {
        this.el.sceneEl.removeEventListener(this.data.event, this.handler);
    }
  });