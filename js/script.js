console.log("Funciona por dios");

// inicializar flickity 

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    pauseAutoPlayOnHover: false
  });

  $('.card-slider').flickity({
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
   
  });

  // formulario zodiaco
  function zodiac(){
    var birthmonth = document.getElementById("month").value;
     var birthday = document.getElementById("day").value;
   var result = " unknown because you didn't put a valid date.";
  
  
  if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
      ){
          result = ("Aquarius");
       document.getElementById("photo").innerHTML="<img src='media/ACUARIO.jpg'>";
     document.getElementById("characteristic").innerHTML="Los acuario son extremadamente vulnerables y sensibles. Aunque a menudo se les ve rodeados de amigos, en realidad tienen pocos cercanos y conocidos. Acuario es un signo universal que los convierte en personas públicas. Por eso, suelen estar ligados a clubes, organizaciones y foros, participando con entusiasmo en debates intelectuales. Los acuarianos son grandes comunicadores siempre que se mantengan en su ámbito mental.";
    
      }
  
      if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
         result = ("Pisces");
         document.getElementById("photo").innerHTML="<img src='media/PISCIS.jpg'>";
        document.getElementById("characteristic").innerHTML="Los piscis viven en un mundo imaginario que apenas se conecta con la realidad. Les encanta observar el mundo a través de un cristal rosado. Cuando la realidad los desafía, los piscianos tienden a refugiarse en su mundo de fantasía.";
        
      }
     if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
         result = ("Aries");
        document.getElementById("photo").innerHTML="<img src='media/ARIES.jpg'>";
       document.getElementById("characteristic").innerHTML="Los aries demuestran una personalidad fuerte. Tienen grandes cualidades de liderazgo, son honestos y directos. A menudo muestran una fuerte determinación y no se dejan desalentar por los fracasos. Los arianos siempre están listos para la acción y asumen el liderazgo de forma espontánea. Sin embargo, no evalúan los pros y los contras de una situación antes de actuar, lo que también los hace vulnerables.";
     }
    
      if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
          result = ("Taurus");
         document.getElementById("photo").innerHTML="<img src='media/TAURO.jpg'>";
         document.getElementById("characteristic").innerHTML="Los tauro se destacan por su determinación y entusiasmo. No es fácil desviar a un taurino de su objetivo una vez que ha fijado su meta. Se mantiene enfocado y lucha continuamente por alcanzarla. Los taurinos valoran mucho la simplicidad y la funcionalidad. A menudo llevan una vida sencilla y alejada de los lujos.";
        
      }
    
      if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
       ){
          result = ("Gemini");
         document.getElementById("photo").innerHTML="<img src='media/GEMINIS.jpg'>";
        document.getElementById("characteristic").innerHTML="Los geminis están llenos de dualidad. Siempre ven una situación desde dos perspectivas. Se caracterizan por su inconstancia y naturaleza dual, lo que los lleva a estar confundidos sobre sus sentimientos. Sin embargo, los geminianos son comunicadores hábiles y tienen un gran dominio del lenguaje. A menudo poseen conocimientos de varios idiomas.";
       
      }
    
      if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
          result = ("Cancer");
         document.getElementById("photo").innerHTML="<img src='media/CANCER.jpg'>";
        document.getElementById("characteristic").innerHTML="Los cancer son emocionales. Sus vidas suelen estar marcadas por cambios de humor. Es común ver a un canceriano en diferentes estados de ánimo incluso en un solo día. Sin embargo, su verdadera emoción está oculta tras su compostura. Son seres sensibles que pueden lastimarse fácilmente con palabras crueles. Las personas de este signo son propensas a la depresión y otros problemas mentales. Aun así, los cancerianos son excelentes personas de familia y disfrutan estar rodeados de grandes familias.";
        
      }
      if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
          result = ("Leo");
         document.getElementById("photo").innerHTML="<img src='media/LEO.jpg'>";
              document.getElementById("characteristic").innerHTML="Los leo tienen un espíritu cálido. Están llenos de energía y siempre están listos para actuar. Desean reconocimiento y admiración, y les encanta ser el centro de atención. Se esfuerzan por llegar a la cima en todo lo que hacen. Los leoninos disfrutan estar rodeados de multitudes y admiradores. Sin embargo, suelen ser poco tolerantes con las críticas y no toman a la ligera las palabras de los críticos. Son muy ambiciosos y eligen cuidadosamente a sus conocidos. Aspiran al reconocimiento social.";
        
      }
      if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
          result = ("Virgo");
         document.getElementById("photo").innerHTML="<img src='media/VIRGO.jpg'>";
          document.getElementById("characteristic").innerHTML="Los virgo tienen un agudo sentido del bien y el mal, lo que los hace altamente discriminativos. Poseen una intuición natural para identificar malas intenciones en las personas, por lo que actúan con extrema cautela en todo lo que hacen. La virgen representa pureza, y por ello tienen la habilidad de distinguir lo bueno de lo malo. Además, los virginianos suelen ser obsesivos con la limpieza. A pesar de su inteligencia, a menudo se sienten confundidos sobre las decisiones que toman en su vida. Tampoco es común verlos llenos de actividades.";
      }
      if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        result = ("Libra");
         document.getElementById("photo").innerHTML="<img src='media/LIBRA.jpg'>";
          document.getElementById("characteristic").innerHTML="Libra es un signo activo y sus miembros están dotados de alta energía. Sin embargo, los libranos tienden a agotar su energía rápidamente. Libra es el ‘balance’, y las personas nacidas bajo este signo tienen una mente muy equilibrada. A menudo se les encuentra resolviendo disputas. Los libranos siempre intentan mantener la armonía y el equilibrio. Son muy ecuánimes y tienen un agudo sentido de la justicia, por lo que sus sugerencias son muy valoradas por sus amigos y familiares. Los libranos son de carácter dual; poseen tanto alegría como oscuridad. Tienen períodos de gran actividad, pero también pueden caer fácilmente en fases de completa inactividad y apatía.";
      }
      if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
         result = ("Scorpio");
         document.getElementById("photo").innerHTML="<img src='media/SCORPIO.jpg'>";
          document.getElementById("characteristic").innerHTML="Los escorpio son los más diversos por naturaleza, lo que los convierte en un estudio fascinante. Los escorpios guardan rencor y esperan pacientemente el momento adecuado para actuar. No suelen olvidar ningún acto de traición o deslealtad. Para ellos, lo implícito es más fascinante que lo evidente. A menudo se les describe como egoístas. Sin embargo, algunas de las cualidades positivas de los escorpios son: diplomacia, intuición, inteligencia, carisma, determinación, espiritualidad y sensibilidad.";
      }
      if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
          result = ("Sagittarius");
         document.getElementById("photo").innerHTML="<img src='media/SAGITARIO.jpg'>";
          document.getElementById("characteristic").innerHTML="Los sagitario son los optimistas incurables. Siempre ven el lado positivo de las cosas. Su optimismo no se ve afectado por las dificultades o resultados negativos. Los sagitarianos suelen ser personas amantes del aire libre. Se interesan por todo tipo de deportes y actividades al aire libre. También son aventureros por naturaleza. Aunque son fieles a sus defectos, también pueden volverse completamente indiferentes a las críticas y rechazar sugerencias.";
      }
    
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
   
          result = ("Capricorn");
       document.getElementById("photo").innerHTML="<img src='media/CAPRICORN.jpg'>";
       document.getElementById("characteristic").innerHTML="Los miembros de este signo tienen un deseo insaciable de ascender y, en el proceso, pueden volverse egoístas y no dudar en sacrificar los intereses de los demás para cumplir sus objetivos. Los capricornios pueden parecer reacios a los riesgos, pero en realidad, planean cuidadosamente todos sus movimientos con antelación y los ensayan a la perfección.";
      }else if (birthmonth>12||birthday>31){
         alert("Please enter an accurate date ! ");
      }
   document.getElementById("output").innerHTML= result;
  }


  // modal con jquery
  
  $(document).ready(function () {
    // Click en imagen
    $('.modal-toggle').on('click', function (e) {
      e.preventDefault();
  
      // Identificar el modal correspondiente
      const targetModal = $(this).data('target');
  
      // Cambiar clase
      $(targetModal).toggleClass('is-visible');
    });
  
    // Cerrar el modal 
    $('.modal').on('click', function (e) {
      if ($(e.target).is('.modal') || $(e.target).is('.close-button')) {
        $(this).removeClass('is-visible');
      }
    });
    // navegar entre modales 
    $('.modal-nav').on('click', function (e) {
      e.preventDefault();
    
      // Encuentra el modal actual usando la clase is-visible
      const currentModal = $('.modal.is-visible'); 
      const targetModal = $(this).data('target'); 
    
      currentModal.removeClass('is-visible'); 
      $(targetModal).addClass('is-visible'); 
    });
  });

  //partciclesssss
  particlesJS("particles-js", {"particles":{"number":{"value":270,"density":{"enable":true,"value_area":800}},"color":{"value":"#efeada"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":12,"size_min":34.11,"sync":false}},"line_linked":{"enable":true,"distance":80,"color":"#efeada","opacity":0.1,"width":0.9},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":133.9851235911262,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;