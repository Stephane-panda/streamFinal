AFRAME.registerComponent('sound-manager', {
    schema: {
      
    },
    init: function() {this.handl_theme1 = () => this.playTheme1()

        this.el.addEventListener('sound-loaded', (evt) => {
            if (evt.detail.id == "ambiant") {
                document.body.addEventListener('mousedown', this.handl_theme1);
                console.log("loading")
            }
        });},
    

        playTheme1: function() {
            // I need to do this to workaround a bug in case it appears
            this.el.components.sound__ambiant.pauseSound()
            this.el.components.sound__ambiant.playSound()
            document.body.removeEventListener('mousedown', this.handl_theme1)
            console.log("playpliz");
        }
  });

