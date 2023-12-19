


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
const diseno = document.querySelector('.diseno');
const dibujo = document.querySelector('.dibujo');
const contacto = document.querySelector('.contacto');
const contactoP1 = document.querySelector('.contactoP1');
const contactoP2 = document.querySelector('.contactoP2');
const nombre = document.querySelector('.nombre');
const mensaje = document.querySelector('.mensaje');


//recorrido del ciclo for-Each 
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
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
        diseno.textContent = changeLanguage[attr].diseno;
        dibujo.textContent = changeLanguage[attr].dibujo;
        contacto.textContent = changeLanguage[attr].contacto;
        contactoP1.textContent = changeLanguage[attr].contactoP1;
        contactoP2.textContent = changeLanguage[attr].contactoP2;
        nombre.textContent = changeLanguage[attr].nombre;
        mensaje.textContent = changeLanguage[attr].mensaje;
        
    });
});


//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {

    "spanish":
    {

        "menuHome": "Inicio",
        "menuNosotros": "Acerca",
        "menuProyectos": "Proyectos",
        "menuContacto": "Contácto",
        "TituloPrincipal": "Mi nombre es Walter Fallas",
        "desarrolladorWeb": "Soy un desarrollador web de San José, Costa Rica.",
        "desarrolladorWeb2": "Me gusta crear sitios web modernos y brindar buenas experiencias al usuario. Trabajemos juntos!!",
        "saludo": "Ver Trabajos",
        "acercaDeMi": "Acerca de mi",
        "herramienta1": "Lenguajes y herramientas",
        "herramienta2": "Herramientas",
        "herramienta3": "Herramientas",
        "acercaDeMiFront": "Me gusta crear sitios web responsivos, con buena apariencia y que cumpla los estándares tanto de usabilidad como de diseño.",
        "acercaDiseno": "La parte visual de un sitio web es muy importante así que me gusta crear diseños que coincidan con la usabilidad del mismo.",
        "acercaDeMiDrawing": "Me apasiona el dibujo! En mi tiempo libre puedo hacer dibujos a lápiz de diferentes estilos o también de forma digital.",
        "proyectosTitulo": "Proyectos",
        "proyectosIntro": "Les presento algunos de mis trabajos que son varios sitios web responsive, la mayoría creados con el framework Bootstrap y también algunos trabajos de diseño gráfico.",
        "proyectoWebsites": "Sitios Web",
        "proyectoDesign": "Diseño Gráfico",
        "proyecto1": "Sitio web Fullpage de una tienda de trajes de baño con una paleta de colores muy veraniega y llamativa. Creado con HTML, CSS, Javascript y usando el framework bootstrap.",
        "proyecto2": "Fullpage creado con Bootstrap y que demuestra el gran poder que tiene Javascript para convertir un sitio web simple en algo muy dinámico.",
        "proyecto3": "Landing page de un evento ficticio de fiesta de disfraces con estilo Story Telling y un efecto parallax muy mágico. Creado con Bootstrap, HTML, CSS y Javascript.",
        "proyecto4": "One Page de un instituto privado que demuestra que se puede minimizar contenido y navegación sin perder la calidad y usando un diseño plano y moderno.",
        "proyecto5": "Fullpage muy alegre de una juguetería con muchos efectos y técnicas que el propio Bootstrap tiene y por supuesto mucho Javascript.",
        "proyecto6": "One Page de un sitio web de equipos de duplicación y fotocopiado con los colores que representan las tintas de impresión. HTML, CSS y Javascript.",
        "diseno": "Diseño",
        "dibujo": "Dibujo",
        "contacto": "Contácto",
        "contactoP1": "Tienes alguna pregunta o propuesta? Te gustaría iniciar un proyecto conmigo?",
        "contactoP2": "No dudes en contactarme!",
        "nombre": "Nombre",
        "mensaje": "Mensaje",
        

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
        "desarrolladorWeb2": "I love creating modern websites and provide good user experiences. Let´s work together",
        "saludo": "Check my work",
        "acercaDeMi": "About me",
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
        "proyecto2": "Fullpage created with Bootstrap  which demonstrates the great power that Javascript has to turn a simple website into something very dynamic.",
        "proyecto3": "Landing page about a fictional costume party event with Story Telling style and a very magical parallax effect. Bootstrap, HTML, CSS and Javascript.",
        "proyecto4": "One Page from a private institute which demonstrates that content and navigation can be minimized without losing quality and using a flat and modern design.",
        "proyecto5": "Very colorful fullpage of a toy store with many effects and techniques that Bootstrap has and of course a lot of Javascript.",
        "proyecto6": "Website about a company of duplicationg machines and photocopy equipment with colors representing printing inks. HTML, CSS and Javascript.",
        "diseno": "Design",
        "dibujo": "Drawing",
        "contacto": "Contact",
        "contactoP1": "Do you have any question or proposal? Would you like to start a new project with me?",
        "contactoP2": "Do not hesitate to contact me!!",
        "nombre": "Name",
        "mensaje": "Message",

    }
}