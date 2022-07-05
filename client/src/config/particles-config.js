const ParticlesConfig = {
  particles: {
   number: {
    value: 43,
    density: {
     enable: true,
     value_area: 1815.039575754227
    }
   },
   color: {
    value: "#ff9500"
   },
   shape: {
    type: "circle",
    stroke: {
     width: 0,
     color: "#000000"
    },
    polygon: {
     nb_sides: 5
    },
    image: {
     src: "img/github.svg",
     width: 100,
     height: 100
    }
   },
   opacity: {
    value: 0.06313181133058181,
    random: false,
    anim: {
     enable: false,
     speed: 0,
     opacity_min: 0.1,
     sync: false
    }
   },
   size: {
    value: 106.5349316203568,
    random: true,
    anim: {
     enable: false,
     speed: 26.373626373626376,
     size_min: 0.1,
     sync: false
    }
   },
   line_linked: {
    enable: false,
    distance: 4,
    color: "#ffffff",
    opacity: 0.4,
    width: 0.31565905665290905
   },
   move: {
    enable: true,
    speed: 3,
    direction: "none",
    random: true,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
     enable: true,
     rotateX: 962.0472365193136,
     rotateY: 641.3648243462092
    }
   }
  },
  interactivity: {
   detect_on: "window",
   events: {
    onhover: {
     enable: true,
     mode: "repulse"
    },
    onclick: {
     enable: false,
     mode: "push"
    },
    resize: true
   },
   modes: {
    grab: {
     distance: 280.1507129632639,
     line_linked: {
      opacity: 1
     }
    },
    bubble: {
     distance: 400,
     size: 40,
     duration: 2,
     opacity: 8,
     speed: 3
    },
    repulse: {
     distance: 200,
     duration: 0.4
    },
    push: {
     particles_nb: 4
    },
    remove: {
     particles_nb: 2
    }
   }
  },
  retina_detect: true
}

export default ParticlesConfig