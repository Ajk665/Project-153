AFRAME.registerComponent("island-rotation-reader", { schema: { speedOfRotation: { type: "number", default: 0 }, },
init: function () { window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { 
        if (this.data.speedOfRotation < 0.1) { this.data.speedOfRotation += 0.01; } 
    } 
    if (e.key === "ArrowLeft") { 
        if (this.data.speedOfRotation > -0.1) { this.data.speedOfRotation -= 0.01; } 
    } 
}); },tick: function () 
{ 
    var mapRotation = this.el.getAttribute("rotation");
    mapRotation.y += this.data.speedOfRotation; 
    this.el.setAttribute("rotation", { x: mapRotation.x, y: mapRotation.y, z: mapRotation.z, });
},
});



AFRAME.registerComponent('scuba-rotation-reader', {
    schema: {
      speedOfRotation: {type: 'number', default: 0},
      speedOfAscent: {type: 'number', default: 0}
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            this.data.speedOfRotation = this.el.getAttribute("rotation");
            this.data.speedOfAscent = this.el.getAttribute("position");
            var scubaRotation = this.data.speedOfRotation;
            var scubaPosition = this.data.speedOfAscent;

            if(e.key === "ArrowRight"){
                if(scubaRotation.x < 10){
                    scubaRotation.x = scubaRotation.x + 0.5;
                    this.el.setAttribute("rotation", scubaRotation);
                }
            }

            if(e.key === "ArrowLeft"){
                if(scubaRotation.x > -10){
                    scubaRotation.x = scubaRotation.x - 0.5;
                    this.el.setAttribute("rotation", scubaRotation);
                }
            }
            
            if(e.key === "ArrowUp"){
                if(scubaRotation.z < 20){
                    scubaRotation.z = scubaRotation.z + 0.5;
                    this.el.setAttribute("rotation", scubaRotation);
                }
                if(scubaPosition.y < 20){
                    scubaPosition.y = scubaPosition.y + 0.5;
                    this.el.setAttribute("position", scubaPosition);
                }
            }

            if(e.key === "ArrowDown"){
                if(scubaRotation.z > -20){
                    scubaRotation.z = scubaRotation.z - 0.5;
                    this.el.setAttribute("rotation", scubaRotation);
                }
                if(scubaPosition.y > -20){
                    scubaPosition.y = scubaPosition.y - 0.5;
                    this.el.setAttribute("position", scubaPosition);
                }
            }
        });
      }
  });