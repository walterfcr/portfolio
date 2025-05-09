﻿


//declaracion de clases usando constantes
const link = document.querySelectorAll('a');
const menuHome = document.querySelector('.menuHome');
const menuNosotros = document.querySelector('.menuNosotros');
const menuProyectos = document.querySelector('.menuProyectos');
const menuContacto = document.querySelector('.menuContacto');
const TituloPrincipal = document.querySelector('.TituloPrincipal');
const desarrolladorWeb = document.querySelector('.desarrolladorWeb');
const desarrolladorWeb2 = document.querySelector('.desarrolladorWeb2');
const saludo = document.querySelector('.saludo');
const acercaDeMi = document.querySelector('.acercaDeMi');
const acercaIntro = document.querySelector('.acercaIntro');
const herramienta1 = document.querySelector('.herramienta1');
const herramienta2 = document.querySelector('.herramienta2');
const herramienta3 = document.querySelector('.herramienta3');
const acercaDeMiFront = document.querySelector('.acercaDeMiFront');
const acercaDiseno = document.querySelector('.acercaDiseno');
const acercaDeMiDrawing = document.querySelector('.acercaDeMiDrawing');
const proyectosTitulo = document.querySelector('.proyectosTitulo');
const proyectosIntro = document.querySelector('.proyectosIntro');
const proyectoWebsites = document.querySelector('.proyectoWebsites');
const proyectoDesign = document.querySelector('.proyectoDesign');
const proyecto1 = document.querySelector('.proyecto1');
const proyecto2 = document.querySelector('.proyecto2');
const proyecto3 = document.querySelector('.proyecto3');
const proyecto4 = document.querySelector('.proyecto4');
const proyecto5 = document.querySelector('.proyecto5');
const proyecto6 = document.querySelector('.proyecto6');
const proyecto8 = document.querySelector('.proyecto8');
const proyecto7 = document.querySelector('.proyecto7');
const diseno = document.querySelector('.diseno');
const disenoL1 = document.querySelector('.disenoL1');
const disenoL2 = document.querySelector('.disenoL2');
const disenoL3 = document.querySelector('.disenoL3');
const disenoL4 = document.querySelector('.disenoL4');
const dibujo = document.querySelector('.dibujo');
const contacto = document.querySelector('.contacto');
const contactoP1 = document.querySelector('.contactoP1');
const contactoP2 = document.querySelector('.contactoP2');
const nombre = document.querySelector('.nombre');
const mensaje = document.querySelector('.mensaje');


//recorrido del ciclo for-Each 
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÃ‘OL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('data-name');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuNosotros.textContent = changeLanguage[attr].menuNosotros;
        menuProyectos.textContent = changeLanguage[attr].menuProyectos;
        TituloPrincipal.textContent = changeLanguage[attr].TituloPrincipal;
        menuContacto.textContent = changeLanguage[attr].menuContacto;
        desarrolladorWeb.textContent = changeLanguage[attr].desarrolladorWeb;
        desarrolladorWeb2.textContent = changeLanguage[attr].desarrolladorWeb2;
        saludo.textContent = changeLanguage[attr].saludo;
        acercaDeMi.textContent = changeLanguage[attr].acercaDeMi;
        acercaIntro.textContent = changeLanguage[attr].acercaIntro;
        herramienta1.textContent = changeLanguage[attr].herramienta1;
        herramienta2.textContent = changeLanguage[attr].herramienta2;
        herramienta3.textContent = changeLanguage[attr].herramienta3;
        acercaDeMiFront.textContent = changeLanguage[attr].acercaDeMiFront;
        acercaDiseno.textContent = changeLanguage[attr].acercaDiseno;
        acercaDeMiDrawing.textContent = changeLanguage[attr].acercaDeMiDrawing;
        proyectosTitulo.textContent = changeLanguage[attr].proyectosTitulo;
        proyectosIntro.textContent = changeLanguage[attr].proyectosIntro;
        proyectoWebsites.textContent = changeLanguage[attr].proyectoWebsites;
        proyectoDesign.textContent = changeLanguage[attr].proyectoDesign;
        proyecto1.textContent = changeLanguage[attr].proyecto1;
        proyecto2.textContent = changeLanguage[attr].proyecto2;
        proyecto3.textContent = changeLanguage[attr].proyecto3;
        proyecto4.textContent = changeLanguage[attr].proyecto4;
        proyecto5.textContent = changeLanguage[attr].proyecto5;
        proyecto6.textContent = changeLanguage[attr].proyecto6;
        proyecto8.textContent = changeLanguage[attr].proyecto8;
        proyecto7.textContent = changeLanguage[attr].proyecto7;
        diseno.textContent = changeLanguage[attr].diseno;
        disenoL1.textContent = changeLanguage[attr].disenoL1;
        disenoL2.textContent = changeLanguage[attr].disenoL2;
        disenoL3.textContent = changeLanguage[attr].disenoL3;
        disenoL4.textContent = changeLanguage[attr].disenoL4;
        dibujo.textContent = changeLanguage[attr].dibujo;
        contacto.textContent = changeLanguage[attr].contacto;
        contactoP1.textContent = changeLanguage[attr].contactoP1;
        contactoP2.textContent = changeLanguage[attr].contactoP2;
        nombre.textContent = changeLanguage[attr].nombre;
        mensaje.textContent = changeLanguage[attr].mensaje;
        
    });
});


//objeto de json que asigna los valores a cada clase en espaÃ±ol
let changeLanguage = {

    "spanish":
    {
        "menuHome": "Inicio",
        "menuNosotros": "Acerca",
        "menuProyectos": "Proyectos",
        "menuContacto": "Contacto",
        "TituloPrincipal": "Mi nombre es Walter Fallas",
        "desarrolladorWeb": "Soy un desarrollador web de San José, Costa Rica.",
        "desarrolladorWeb2": "Me gusta crear sitios web modernos y brindar buenas experiencias al usuario. ¡Trabajemos juntos!",
        "saludo": "Ver Trabajos",
        "acercaDeMi": "Acerca de mí",
        "acercaIntro": "Me gusta mucho todo lo que tenga que ver con tecnología y diseño, así que me gusta poder crear artes visuales y además soy un gran apasionado del dibujo tradicional o digital.",
        "herramienta1": "Lenguajes y herramientas",
        "herramienta2": "Herramientas",
        "herramienta3": "Herramientas",
        "acercaDeMiFront": "Me gusta crear sitios web responsivos, con buena apariencia y que cumplan los estándares tanto de usabilidad como de diseño.",
        "acercaDiseno": "La parte visual de un sitio web es muy importante, así que me gusta crear diseños que coincidan con la usabilidad del mismo.",
        "acercaDeMiDrawing": "¡Me apasiona el dibujo! En mi tiempo libre puedo hacer dibujos a lápiz de diferentes estilos o también de forma digital.",
        "proyectosTitulo": "Proyectos",
        "proyectosIntro": "Les presento algunos de mis trabajos, que son varios sitios web responsive, la mayoría creados con el framework Bootstrap y también algunos trabajos de diseño gráfico.",
        "proyectoWebsites": "Sitios Web",
        "proyectoDesign": "Diseño Gráfico",
        "proyecto1": "Sitio web Fullpage de una tienda de trajes de baño con una paleta de colores muy veraniega y llamativa. Creado con HTML, CSS, Javascript y usando el framework Bootstrap.",
        "proyecto2": "Una experiencia de navegación fluida y envolvente creada con React, transformando un Fullpage en componentes interactivos.",
        "proyecto3": "Landing page de un evento ficticio de fiesta de disfraces con estilo Story Telling y un efecto parallax muy mágico. Creado con Bootstrap, HTML, CSS y Javascript.",
        "proyecto4": "One Page de un instituto privado que demuestra que se puede minimizar contenido y navegación sin perder la calidad, usando un diseño plano y moderno.",
        "proyecto5": "Fullpage muy alegre de una juguetería con muchos efectos y técnicas que el propio Bootstrap tiene, y por supuesto, mucho Javascript.",
        "proyecto6": "One Page de un sitio web de equipos de duplicación y fotocopiado con los colores que representan las tintas de impresión. HTML, CSS y Javascript.",
        "proyecto8": "Divertido juego de memoria creado con React. ¡Revela y empareja tus Funkos favoritos mientras pones a prueba tu memoria!",
        "proyecto7": "One Page de un festival de rock ficticio hecho con Bootstrap y una navegación muy fluida gracias a Javascript.",
        "diseno": "Diseño",
        "disenoL1": "Menú para restaurante de comida rápida con un estilo distinto pero acorde a la temática del lugar.",
        "disenoL2": "Invitaciones para boda con temática de Harry Potter, con un estilo muy acorde al tema y una fuente muy acertada.",
        "disenoL3": "Campaña publicitaria de un proyecto de universidad en el que se alienta a reciclar y así ganar entradas para un concierto internacional.",
        "disenoL4": "Banner publicitario para bolsas reciclables. Diseño fresco y colores que representan el medio ambiente.",
        "dibujo": "Dibujo",
        "contacto": "Contacto",
        "contactoP1": "¿Tienes alguna pregunta o propuesta? ¿Te gustaría iniciar un proyecto conmigo?",
        "contactoP2": "¡No dudes en contactarme!",
        "nombre": "Nombre",
        "mensaje": "Mensaje"
      },
      

  //objeto de json que asigna los valores a cada clase en ingles  
    "english":
    {

        "menuHome": "Home",
        "menuNosotros": "About",
        "menuProyectos": "Projects",
        "menuContacto": "Contact",
        "TituloPrincipal": "My name is Walter Fallas",
        "desarrolladorWeb": "I am a web developer from San José, Costa Rica.",
        "desarrolladorWeb2": "I am passionate about creating modern, functional websites and delivering exceptional user experiences. Let's work together and bring your ideas to life!",
        "saludo": "Check my work",
        "acercaDeMi": "About me",
        "acercaIntro": "I really like everything about technology and design so I like being able to create visual arts and I am also very passionate about traditional or digital drawing.",
        "herramienta1": "Languages and tools",
        "herramienta2": "Tools", 
        "herramienta3": "Tools",
        "acercaDeMiFront": "I love creating responsive websites that look good and meet both usability and design standards.",
        "acercaDiseno": "The visual part of a website is very important so I like creating designs that matches with usage.",
        "acercaDeMiDrawing": "I am passionate about drawing! In my free time I can make drawings of different styles using a pencil or digitally.",
        "proyectosTitulo": "Projects",
        "proyectosIntro": "There are some of my works, which are responsive websites, most created with the framework Bootstrap and also some graphic design work.",
        "proyectoWebsites": "Websites",
        "proyectoDesign": "Graphic Design",
        "proyecto1": "Fullpage website of a swimsuit store with a very summery and striking color palette. Created with HTML, CSS, Javascript using Bootstrap.",
        "proyecto2": "A smooth and immersive browsing experience built with React, transforming a Fullpage into interactive components.",
        "proyecto3": "Landing page about a fictional costume party event with Story Telling style and a very magical parallax effect. Bootstrap, HTML, CSS and Javascript.",
        "proyecto4": "One Page from a private institute which demonstrates that content and navigation can be minimized without losing quality.",
        "proyecto5": "Very colorful fullpage of a toy store with many effects and techniques that Bootstrap has and of course a lot of Javascript.",
        "proyecto6": "Website about a company of duplicationg machines and photocopy equipment with colors representing printing inks. HTML, CSS and Javascript.",
        "proyecto8": "Fun memory game created with React! Reveal and match your favorite Funkos while testing your memory!",
        "proyecto7": "One Page for a fictional rock festival made with Bootstrap and featuring very smooth navigation thanks to JavaScript.",
        "diseno": "Design",
        "disenoL1": "Menu of a fast food restaurant with an unusual style that matches with the subject of the place.",
        "disenoL2": "Invitations of a wedding with Harry Potter theme and a style that matches with the subject and the right font. ",
        "disenoL3": "Advertising campaign for a University project that encourages recycling and win tickets to an international concert.",
        "disenoL4": "Advertising banner about recyclable bags with a fresh design and colors that represent the environmen.",
        "dibujo": "Drawing",
        "contacto": "Contact",
        "contactoP1": "Do you have any question or proposal? Would you like to start a new project with me?",
        "contactoP2": "Do not hesitate to contact me!!",
        "nombre": "Name",
        "mensaje": "Message",

    }
}