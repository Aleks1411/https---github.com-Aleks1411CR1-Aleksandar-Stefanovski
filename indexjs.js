// (async () => {

//     const { value: email } = await Swal.fire({
//       title: 'Input email address',
//       input: 'email',
//       inputLabel: 'Your email address',
//       inputPlaceholder: 'Enter your email address'
//     })
    
//     if (email) {
//         const { value: password } = await Swal.fire({
//             title: 'Enter your password',
//             input: 'password',
//             inputLabel: 'Password',
//             inputPlaceholder: 'Enter your password',
//             inputAttributes: {
//               maxlength: 10,
//               autocapitalize: 'off',
//               autocorrect: 'off'
//             }
//           })
          
//           if (password) {
//             Swal.fire(`Entered password: ${password}`)
//             console.log("hello");
//           }
//     }
    
//     })()
    
    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#d6167c"},"shape":{"type":"star","stroke":{"width":3,"color":"#232fd9"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.299330445057109,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7.877116975187079,"random":false,"anim":{"enable":false,"speed":40,"size_min":33.20832962102007,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ed5218","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"left","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

