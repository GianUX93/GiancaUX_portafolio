
(function(){
  var STR = {
    es: {
      navSobre: 'Sobre mí', navProyectos: 'Proyectos', navContacto: 'Contacto', navHablemos: 'Hablemos',
      avail: 'Disponible para trabajar', holaSoy: 'Hola soy',
      heroSubtext1: 'Diseñador', heroSubtext2: 'de producto | UX/UI',
      heroCta: 'Conoce más de mí', scrollCue: 'DESPLAZA PARA EXPLORAR',
      marquee: 'PRODUCT DESIGNER ✳ UX/UI ✳ DIRECCIÓN DE ARTE ✳ VIBE CODING ✳',
      availImmediate: 'Disponibilidad inmediata', location: 'Lima, Perú 🇵🇪', englishLevel: 'Inglés intermedio',
      cvButton: 'Descargar mi CV', introText: 'Mi nombre es Gian Carlos Chavez, pero todos me dicen',
      bioBold: 'Diseñador de Productos Digitales (UX/UI) con ADN de diseñador gráfico',
      bioRest: 'y amante de la naturaleza en todas sus expresiones.',
      bioPara2: 'El trabajo remoto me ha dado la fortuna de recorrer 23 departamentos del Perú y 3 países, enseñándome a entender la vida a través de distintas culturas. Creo firmemente que la creatividad florece cuando salimos de la zona de confort y nos exponemos a nuevos estímulos.',
      bioPara3: 'El aprendizaje continuo guía mi día a día. Creo experiencias web y móviles fusionando investigación, interfaces intuitivas y estrategia de negocio. Además, potencio mi proceso con Inteligencia Artificial para prototipar a gran velocidad, manteniendo siempre el criterio humano como filtro final para simplificar la complejidad y conectar con las personas.',
      valueTitle1: 'Simplificación estratégica', valueDesc1: 'Flujos complejos traducidos a experiencias que cualquier usuario pueda entender en segundos.',
      valueTitle2: 'Co-creación con ingeniería', valueDesc2: 'Sistemas de diseño robustos que hablan el idioma del dev: tokens, componentes, handoff limpio. Compresión básica de lenguajes html 5 y CSS',
      expLabel: 'Experiencia', expHeadlinePre: '14 años trabajando en', expHeadlineHl: 'la industria digital',
      eduLabel: 'Formación académica', eduHeadlinePre: 'El aprendizaje continuo es parte de', eduHeadlineHl: 'mi día a día',
      certPlaceholder: 'Certificado', inProgress: 'En construcción',
      testimonialsLabel: 'Recomendaciones', testimonialsHeadline: 'Lo que opinan mis colegas sobre mi trabajo',
      contactA: '¿Tienes una idea', contactB: 'en mente?', contactC: 'démosle', contactD: 'juntos un gran diseño',
      letsTalk: 'Conversemos', footerTagline: 'Diseñador en Figma y vibecodeado con Claude por Gian Carlos Chávez Sánchez.',
      exploreLabel: 'Explorar', findMeLabel: 'Encuéntrame aquí', findMeMobile: 'Conoce más de mí aquí', vibecoded: 'Diseñado y vibecodeado con mucho ♥', backToTop: 'Volver al inicio'
    },
    en: {
      navSobre: 'About', navProyectos: 'Projects', navContacto: 'Contact', navHablemos: "Let's talk",
      avail: 'Available for work', holaSoy: "Hi, I'm",
      heroSubtext1: 'Product', heroSubtext2: 'Designer | UX/UI',
      heroCta: 'Get to know me', scrollCue: 'SCROLL TO EXPLORE',
      marquee: 'PRODUCT DESIGNER ✳ UX/UI ✳ ART DIRECTION ✳ VIBE CODING ✳',
      availImmediate: 'Available immediately', location: 'Lima, Peru 🇵🇪', englishLevel: 'Intermediate English',
      cvButton: 'Download my CV', introText: 'My name is Gian Carlos Chavez, but everyone calls me',
      bioBold: "Digital Product Designer (UX/UI) with a graphic designer's DNA",
      bioRest: 'and a lover of nature in all its forms.',
      bioPara2: 'Remote work has given me the fortune of traveling through 23 regions of Peru and 3 countries, teaching me to understand life through different cultures. I firmly believe creativity flourishes when we step out of our comfort zone and expose ourselves to new stimuli.',
      bioPara3: 'Continuous learning guides my everyday life. I create web and mobile experiences by blending research, intuitive interfaces, and business strategy. I also power my process with AI to prototype at high speed, always keeping human judgment as the final filter to simplify complexity and connect with people.',
      valueTitle1: 'Strategic simplification', valueDesc1: 'Complex flows translated into experiences any user can understand in seconds.',
      valueTitle2: 'Co-creation with engineering', valueDesc2: "Robust design systems that speak the dev's language: tokens, components, clean handoff. Basic understanding of HTML5 and CSS.",
      expLabel: 'Experience', expHeadlinePre: '14 years working in', expHeadlineHl: 'the digital industry',
      eduLabel: 'Education', eduHeadlinePre: 'Continuous learning is part of', eduHeadlineHl: 'my everyday life',
      certPlaceholder: 'Certificate', inProgress: 'In progress',
      testimonialsLabel: 'Recommendations', testimonialsHeadline: 'What my colleagues say about my work',
      contactA: 'Got an idea', contactB: 'in mind?', contactC: "let's build", contactD: 'a great design together',
      letsTalk: "Let's talk", footerTagline: 'Designed in Figma and vibe-coded with Claude by Gian Carlos Chávez Sánchez.',
      exploreLabel: 'Explore', findMeLabel: 'Find me here', findMeMobile: 'Get to know me here', vibecoded: 'Designed and vibe-coded with a lot of ♥', backToTop: 'Back to top'
    }
  };

  var EDUCATION = [
    { title: { es: 'Inteligencia Artificial para UX/UI Designers', en: 'AI for UX/UI Designers' }, org: 'uxcristopher', year: '2026', certs: [
      { img: 'assets/certs/uxcristopher-ia-uxui.webp', label: 'Certificado de finalización' }
    ] },
    { title: { es: 'Code 101 — Elemental Software Development', en: 'Code 101 — Elemental Software Development' }, org: 'Enter Tech School', year: '2026', certs: [
      { img: 'assets/certs/enter-code101.webp', label: 'Code 101' }
    ] },
    { title: { es: 'Métricas y Estrategias de Producto', en: 'Product Metrics & Strategy' }, org: 'Repensar', year: '2025', certs: [
      { img: 'assets/certs/repensar-metricas-completado.webp', label: 'Certificado de estudios', rot: -8, dx: -50, dy: 10, z: 1 },
      { img: 'assets/certs/repensar-metricas-top3.webp', label: 'Reconocimiento Top 3', rot: 0, dx: 0, dy: -4, z: 2 },
      { img: 'assets/certs/repensar-metricas-ganador.webp', label: 'Equipo ganador — caso real', rot: 8, dx: 50, dy: 10, z: 3 }
    ] },
    { title: { es: 'Programa Design System', en: 'Design System Program' }, org: 'Repensar', year: '2024–2025', certs: [
      { img: 'assets/certs/repensar-design-system.webp', label: 'Certificado de estudios', rot: -7, dx: -46, dy: 8, z: 1 },
      { img: 'assets/certs/repensar-design-system-top3.webp', label: 'Reconocimiento Top 3', rot: 6, dx: 46, dy: -8, z: 2 }
    ] },
    { title: { es: 'Advanced Prototyping with Figma', en: 'Advanced Prototyping with Figma' }, org: 'UI Designers', year: '2023', certs: [
      { img: 'assets/certs/ui-prototyping.webp', label: 'Advanced Prototyping with Figma' }
    ] },
    { title: { es: 'Diseño de Dashboards', en: 'Dashboard Design' }, org: 'Comunicación Numérica', year: '2022', certs: [
      { img: 'assets/certs/dashboards.webp', label: 'Diseño de Dashboards' }
    ] },
    { title: { es: 'Diseño UX/UI', en: 'UX/UI Design' }, org: 'Coderhouse', year: '2021', certs: [
      { img: 'assets/certs/coderhouse-uxui.webp', label: 'Diseño UX/UI' }
    ] },
    { title: { es: 'Taller de Dirección de Arte', en: 'Art Direction Workshop' }, org: 'La Escuela de Ideas', year: '2021', certs: [
      { img: 'assets/certs/escuela-ideas-direccion-arte.webp', label: 'Taller de Dirección de Arte' }
    ] },
    { title: { es: 'Dirección de Arte', en: 'Art Direction' }, org: 'Brother — Escuela de Creativos', year: '2021', certs: [
      { img: 'assets/certs/brother-direccion-arte.webp', label: 'Dirección de Arte' }
    ] },
    { title: { es: 'UX & UI Designer: Diseño de Experiencia de Usuario', en: 'UX & UI Designer: User Experience Design' }, org: 'Toulouse Lautrec', year: '2019', certs: [
      { img: 'assets/certs/toulouse-uxui.webp', label: 'Diploma UX & UI Designer' }
    ] }
  ];

  var EXPERIENCE = [
    { top: 100, num: '01', role: { es: 'Diseñador gráfico & UI Jr.', en: 'Graphic & UI Designer Jr.' }, companyList: ['Liquid', 'cooltrends', 'Blue Red', 'Funciton'], period: '2012–2016',
      description: { es: 'En estos primeros años construí mis bases sólidas en diseño gráfico, identidad visual e ilustración. En Function tuve mi primer acercamiento al diseño UI para apps de Smart TV, trabajando en múltiples agencias y marcas de manera simultánea.', en: 'In these early years I built solid foundations in graphic design, visual identity and illustration. At Function I had my first approach to UI design for Smart TV apps, working across multiple agencies and brands simultaneously.' },
      tools: [ 'Photoshop', 'Illustrator', 'CorelDRAW', 'InDesign' ].map(iconTool) },
    { top: 120, num: '02', role: { es: 'Diseñador gráfico senior e ilustrador 2D', en: 'Senior Graphic Designer & 2D Illustrator' }, companyList: ['Five condoms', 'Oris spa', 'Blend Digital', 'Docente'], period: '2016–2019',
      description: { es: 'En estos años puse mucho enfoque a mi desarrollo en identidad corporativa, campañas 360° (ATL/BTL) y dirección de arte. Posteriormente pude compartir mi conocimiento siendo docente de diseño gráfico e informática en una escuela privada. En Blend Digital elaboré propuestas audiovisuales, editorial y memorias anuales.', en: 'During these years I focused heavily on corporate identity, 360° campaigns (ATL/BTL) and art direction. Later I shared my knowledge as a graphic design and computing teacher at a private school. At Blend Digital I produced audiovisual, editorial and annual-report proposals.' },
      tools: [ 'Photoshop', 'Illustrator', 'Premiere', 'After Effects', 'InDesign' ].map(iconTool) },
    { top: 140, num: '03', role: { es: 'Director de arte y diseñador UX/UI', en: 'Art Director & UX/UI Designer' }, companyList: ['Ingenia', 'Cubo Rojo', 'Bankea.app'], period: '2019–2022',
      description: { es: 'Salto hacia el diseño de interfaces de usuario. En bankea.app lideré la identidad visual completa, campañas digitales, animaciones 2D para RRSS, landing page y rediseño de la app. Primer rol formal de UX/UI con Figma como herramienta central.', en: 'Jump into user interface design. At bankea.app I led the full visual identity, digital campaigns, 2D animations for social media, landing page and app redesign. My first formal UX/UI role with Figma as the central tool.' },
      tools: [ 'Figma', 'Whimsical', 'Miro', 'After Effects' ].map(iconTool) },
    { top: 160, num: '04', role: { es: 'Diseñador UX/UI', en: 'UX/UI Designer' }, companyList: ['Dacodes', 'dd3 hipotecaria', 'Freelance'], period: '2022–2024',
      description: { es: 'Obtuve mucho aprendizaje del sector hipotecario e inmobiliario. Realizando research continuo de competencia, flujos complejos e iterativos, prototipos para validar con stakeholders. Comunicación constante con el equipo de desarrollo y product owner.', en: 'I gained a lot of learning from the mortgage and real-estate sector, running continuous competitor research, complex and iterative flows, and prototypes to validate with stakeholders. Constant communication with the development team and product owner.' },
      tools: [ 'Figma', 'Tailwind', 'Miro', 'Jira', 'Slack' ].map(iconTool) },
    { top: 180, num: '05', role: { es: 'Diseñador de producto senior', en: 'Senior Product Designer' }, companyList: ['dd3 hipotecaria', 'DD360 Platform', 'Corp. Mexicana de Valuación'], period: '2024–hoy',
      description: { es: 'Fui internalizado directamente por valor estratégico hacia el cliente. Diseñé el sistema de digitalización de avalúos B2B que redujo el procesamiento de 3 días a 24 horas. Colaboración directa con C-level para definir roadmap de producto y arquitectura de plataformas, desarrollo web no-code asistido por IA. El Ownership me dió mucha participación para el desarrollo de propuestas ', en: 'I was internalized directly for strategic value to the client. I designed the B2B appraisal digitization system that cut processing time from 3 days to 24 hours. Direct collaboration with C-level to define product roadmap and platform architecture, AI-assisted no-code web development. Ownership gave me a lot of involvement in developing proposals.' },
      tools: [ 'Figma', 'HTML5', 'CSS', 'JavaScript', 'GitHub', 'Visual Studio Code', 'Claude', 'Jitter', 'Miro', 'Lovable' ].map(iconTool) }
  ];

  function iconTool(name) {
    var map = { 'Photoshop':'photoshop','Illustrator':'illustrator','CorelDRAW':'corel-draw','InDesign':'indesign','Premiere':'premiere','After Effects':'after-effects','Figma':'figma','Whimsical':'whimsical','Miro':'miro','Tailwind':'tailwind','Jira':'jira','Slack':'slack','HTML5':'html','CSS':'css','JavaScript':'js','GitHub':'github','Visual Studio Code':'vscode','Claude':'claude','Jitter':'jitter','Lovable':'lovable' };
    return { name: name, icon: 'assets/icons/' + (map[name] || name.toLowerCase()) + '.svg' };
  }

  var T1 = [
    { avatar: 'assets/testimonials/arturo-diaz.webp', name: 'Arturo Diaz Reynoso', role: 'Senior Product Manager | MBA (HEC Paris)', linkedin: 'https://www.linkedin.com/in/arturodiazr/',
      quote: { es: '"Lo que más me impresionó fue su capacidad de tomar un problema ambiguo o mal definido y bajarlo a diseños concretos con flujos claros, sin perder velocidad. Propone ideas en lugar de esperar... eso lo convierte en un socio de producto, no solo en un ejecutor."', en: '"What impressed me most was his ability to take an ambiguous or poorly defined problem and turn it into concrete designs with clear flows, without losing speed. He proposes ideas instead of waiting... that makes him a product partner, not just an executor."' } },
    { avatar: 'assets/testimonials/jose-felix.webp', name: 'Jose Antonio Felix Ballesteros', role: 'Tech Lead at DD360', linkedin: 'https://www.linkedin.com/in/antonio-ballesteros-550/',
      quote: { es: '"Pocas veces uno conoce a personas con una creatividad, iniciativa y dedicación como la de él. Su habilidad para investigar, entender el problema de negocio y aterrizarlo en un diseño concreto es espectacular, incluso en flujos críticos y complejos."', en: '"Rarely do you meet people with his creativity, initiative and dedication. His ability to research, understand the business problem and turn it into a concrete design is remarkable, even in critical and complex flows."' } },
    { avatar: 'assets/testimonials/herzon-carranza.webp', name: 'Herzon Carranza', role: 'Head of Marketing & Design @ Monopolio · Product Maker', linkedin: 'https://www.linkedin.com/in/herzon-carranza/',
      quote: { es: '"Es de esas personas que no esperan que les digan qué hacer, simplemente lo hacen. Estuvo en proyectos importantes aportando siempre desde el diseño con criterio y mucha iniciativa. Si buscas un Product Designer que realmente mueva el equipo, Gian es la persona."', en: "\"He's one of those people who don't wait to be told what to do, they just do it. He was part of important projects, always contributing thoughtful design and a lot of initiative. If you're looking for a Product Designer who truly moves the team, Gian is the one.\"" } },
    { avatar: 'assets/testimonials/daniel-alvarez.webp', name: 'Daniel Álvarez', role: 'UX Lead en John Deere', linkedin: 'https://www.linkedin.com/in/dasalvar/',
      quote: { es: '"Siempre destacó por su creatividad, actitud positiva y ganas de aprender. Es alguien que no solo busca soluciones, sino que también aporta valor en cada proyecto. Se convirtió en un recurso clave para el equipo."', en: '"He always stood out for his creativity, positive attitude and eagerness to learn. He is someone who not only seeks solutions but also adds value to every project. He became a key resource for the team."' } }
  ];
  var T2 = [
    { avatar: 'assets/testimonials/itzel-quiroz.webp', name: 'Itzel Quiroz Ortega', role: 'Senior Project Manager | Delivery Manager | PMO', linkedin: 'https://www.linkedin.com/in/itzel-quiroz-ortega-22386613/',
      quote: { es: '"Gian Carlo siempre ha mostrado una actitud proactiva y positiva, siempre abierto a escuchar y mejorar. Es una persona responsable, comprometida y con una muy buena comunicación."', en: '"Gian Carlo has always shown a proactive and positive attitude, always open to listening and improving. He is a responsible, committed person with very good communication."' } },
    { avatar: 'assets/testimonials/ana-reyes.webp', name: 'Ana Silvia Reyes Pérez', role: 'Ops Manager @ Revolut', linkedin: 'https://www.linkedin.com/in/anasilviareyes/',
      quote: { es: '"Siempre resuelve los problemas de forma rápida y eficiente, manteniendo una actitud positiva en todo momento. Puedes contar con él para obtener resultados de calidad mientras mantiene un ambiente de trabajo ameno y colaborativo."', en: '"He always solves problems quickly and efficiently, keeping a positive attitude at all times. You can count on him for quality results while keeping the work environment pleasant and collaborative."' } },
    { avatar: 'assets/testimonials/lucila-martinez.webp', name: 'Lucila Martínez', role: 'Senior Product Designer', linkedin: 'https://www.linkedin.com/in/lucilamreyes/',
      quote: { es: '"Tiene mucha facilidad de adaptación y aprender de los retos. Comprende lo que es llevar y ejecutar un proceso de diseño para lograr entregables de calidad y valor al producto. Su buena actitud ayuda a entablar buenas relaciones entre stakeholders."', en: '"He adapts easily and learns quickly from challenges. He understands how to lead and execute a design process to deliver quality outcomes and value to the product. His good attitude helps build strong relationships among stakeholders."' } },
    { avatar: 'assets/testimonials/alexander-guilarte.webp', name: 'Alexander Guilarte', role: 'Sr. Product Designer @ Híbrids', linkedin: 'https://www.linkedin.com/in/alexanderguil/',
      quote: { es: '"Sus habilidades, toma de decisiones y aprendizaje constante es algo totalmente impresionante. Trabajar en equipo con él es una de las experiencias más fantásticas del mundo Tech y de Product Design."', en: '"His skills, decision-making and constant learning are truly impressive. Working as a team with him is one of the most fantastic experiences in the Tech and Product Design world."' } }
  ];

  var PROJECTS = [
    { num: '01', href: 'proyectos/editor-dd3land.html', cover: 'assets/case-editor-dd3/editor-city-materials.webp', title: 'Editor DD3.land', tag: 'Product · Web app',
      description: { es: 'Software de automatización de flujos internos para el equipo operativo.', en: 'Internal workflow automation software for the operations team.' } },
    { num: '02', href: 'proyectos/dd3land.html', cover: 'assets/case-dd3land/aerial-city-cdmx.png', title: 'DD3.land', tag: 'Branding · 3D',
      description: { es: 'Metaverso del ecosistema de productos hipotecarios de la marca.', en: "The brand's mortgage product ecosystem metaverse." } },
    { num: '03', href: 'proyectos/builder.html', cover: 'assets/case-builder/components-overview.webp', title: 'Builder', tag: 'Design system',
      description: { es: 'Sistema de diseño escalable para la plataforma DD360.', en: 'Scalable design system for the DD360 platform.' } },
    { num: '04', href: 'proyectos/revisores.html', cover: 'assets/case-revisores/revisores-05.png', title: 'Revisores', tag: 'B2B · UX',
      description: { es: 'Digitalización de procesos B2B para Corporación Mexicana de Valuación.', en: 'B2B process digitization for Corporación Mexicana de Valuación.' } },
    { num: '05', href: '#proyectos', noCover: true, title: 'DD360 platform', tag: 'UX/UI · Fintech',
      description: { es: 'Gestión integral de créditos hipotecarios de principio a fin.', en: 'End-to-end mortgage loan management.' } },
    { num: '06', href: '#proyectos', noCover: true, title: 'Perú clima', tag: 'Mobile app',
      description: { es: 'App de control climático para turistas locales y extranjeros.', en: 'Weather-tracking app for local and foreign tourists.' } }
  ];

  var state = { lang: 'es', modalIndex: -1 };

  function esc(s) { return (s || '').toString(); }

  function certFlatList() {
    var list = [];
    EDUCATION.forEach(function(course) {
      course.certs.forEach(function(cert) {
        list.push({ img: cert.img, label: cert.label, courseTitle: course.title[state.lang], org: course.org, year: course.year });
      });
    });
    return list;
  }

  function renderBio() {
    var s = STR[state.lang];
    document.getElementById('bio-text').innerHTML =
      '<p><b>' + s.bioBold + '</b> ' + s.bioRest + '</p><p>' + s.bioPara2 + '</p><p>' + s.bioPara3 + '</p>';
  }

  function renderExperience() {
    var lang = state.lang;
    var html = EXPERIENCE.map(function(job) {
      var tools = job.tools.map(function(tool) {
        return '<div style="position:relative;display:flex;align-items:center;justify-content:center;padding:4px;--tip-o:0;--tip-y:4px" data-hover="--tip-o:1;--tip-y:0px">' +
          '<img src="' + tool.icon + '" alt="' + tool.name + '" style="width:28px;height:28px;filter:brightness(0) invert(1);opacity:.45;transition:opacity .2s ease;pointer-events:none" data-hover="opacity:.7">' +
          '<span style="position:absolute;bottom:calc(100% + 6px);left:50%;white-space:nowrap;background:#B8EA07;color:#010A00;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:11px;padding:5px 9px;border-radius:2px;opacity:var(--tip-o);transform:translate(-50%,var(--tip-y));transition:opacity .15s ease,transform .15s ease;pointer-events:none;z-index:2">' + tool.name + '</span>' +
        '</div>';
      }).join('');
      var companies = job.companyList.map(function(c) {
        return '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:11.5px;color:#a1a1aa;text-transform:uppercase;letter-spacing:.04em;border:1px solid rgba(255,255,255,.15);padding:5px 11px;border-radius:2px">' + c + '</span>';
      }).join('');
      return '<div style="position:sticky;top:' + job.top + 'px;background:#070d05;background-image:radial-gradient(ellipse 500px 300px at 100% 0%,rgba(184,234,7,.1),transparent 70%),repeating-linear-gradient(135deg,rgba(255,255,255,.025) 0px,rgba(255,255,255,.025) 1px,transparent 1px,transparent 14px);border:1px solid rgba(255,255,255,.1);box-shadow:0 -24px 60px rgba(0,0,0,.55);overflow:hidden" class="djobrow">' +
        '<div style="padding:44px 48px">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:18px">' +
            '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:300;font-size:clamp(38px,3.4vw,52px);line-height:1;color:rgba(184,234,7,.5)">' + job.num + '</span>' +
            '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:13px;color:#B8EA07;background:rgba(184,234,7,.1);border:1px solid rgba(184,234,7,.3);padding:6px 14px;border-radius:999px;white-space:nowrap">' + job.period + '</span>' +
          '</div>' +
          '<h3 style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:clamp(22px,2.2vw,30px);margin:0 0 14px;max-width:520px">' + job.role[lang] + '</h3>' +
          '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px">' + companies + '</div>' +
          '<p style="margin:0;font-size:14.5px;line-height:1.75;color:#a1a1aa;max-width:640px;border-top:1px solid rgba(255,255,255,.08);padding-top:20px">' + job.description[lang] + '</p>' +
          '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:24px">' + tools + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    document.getElementById('experience-list').innerHTML = html;
    attachHover(document.getElementById('experience-list'));
  }

  function renderEducation() {
    var lang = state.lang;
    var flat = certFlatList();
    var idx = 0;
    var html = EDUCATION.map(function(course, ci) {
      var dir = (ci % 2 === 0) ? 'left' : 'right';
      var certsHtml = course.certs.map(function(cert) {
        var myIndex = idx++;
        var rot = cert.rot || 0, dx = cert.dx || 0, dy = cert.dy || 0, z = cert.z || 1;
        return '<img src="' + cert.img + '" alt="' + cert.label + '" title="' + cert.label + '" data-cert-index="' + myIndex + '" style="position:absolute;left:0;bottom:0;width:158px;height:112px;object-fit:cover;border:2px solid #010A00;box-shadow:0 14px 34px rgba(0,0,0,.55);transform:rotate(calc(' + rot + 'deg * (1 - var(--spread)))) translate(calc(var(--spread) * ' + dx + 'px), calc(var(--spread) * ' + dy + 'px)) scale(calc(1 + var(--spread) * 0.05));transition:transform .4s cubic-bezier(.2,.8,.2,1);z-index:' + z + ';cursor:pointer">';
      }).join('');
      return '<div style="position:relative;border:1px solid rgba(255,255,255,.1);padding:26px;padding-bottom:172px;overflow:visible;--spread:0" data-hover="--spread:1" data-reveal-x="' + dir + '" class="dedu-card">' +
        '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:12px;color:#B8EA07;letter-spacing:.04em">' + course.year + '</span>' +
        '<h3 style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:18px;margin:8px 0 4px;max-width:220px">' + course.title[lang] + '</h3>' +
        '<p style="margin:0;font-size:13px;color:#71717a">' + course.org + '</p>' +
        '<div style="position:absolute;left:26px;right:26px;bottom:26px;height:132px" class="dcert-stack">' + certsHtml + '</div>' +
      '</div>';
    }).join('');
    var grid = document.getElementById('education-grid');
    grid.innerHTML = html;
    attachHover(grid);
    observeRevealX(grid);
    grid.querySelectorAll('[data-cert-index]').forEach(function(img) {
      img.addEventListener('click', function() { openModal(parseInt(img.getAttribute('data-cert-index'), 10)); });
    });
  }

  function renderProjects() {
    var lang = state.lang;
    var html = PROJECTS.map(function(p, i) {
      var mediaHtml = p.noCover
        ? '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#0c1408">' +
            '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(184,234,7,.5)" stroke-width="1.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>' +
            '<span style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:12px;color:rgba(255,255,255,.4);letter-spacing:.04em;text-transform:uppercase">' + STR[lang].inProgress + '</span>' +
          '</div>'
        : '<img src="' + p.cover + '" alt="' + p.title + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(var(--img-scale));transition:transform .6s ease">';
      var dir = (i % 2 === 0) ? 'left' : 'right';
      return '<a href="' + p.href + '" data-reveal-x="' + dir + '" style="position:relative;height:300px;overflow:hidden;border:1px solid rgba(255,255,255,.1);display:block;--img-scale:1;--scrim-o:.55;--info-y:0px;transition:border-color .3s ease" data-hover="--img-scale:1.06;--scrim-o:.8;--info-y:-6px;border-color:#B8EA07" class="dprojcard">' +
        mediaHtml +
        '<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(1,10,0,.85) 0%,rgba(1,10,0,var(--scrim-o)) 45%,transparent 85%);transition:background .4s ease"></div>' +
        '<span style="position:absolute;top:20px;left:20px;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:13px;color:#B8EA07;letter-spacing:.04em">' + p.num + '</span>' +
        '<span style="position:absolute;top:20px;right:20px;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:600;font-size:12px;color:#FFFFFF;background:rgba(1,10,0,.85);border:1px solid rgba(255,255,255,.25);padding:5px 11px;backdrop-filter:blur(4px)">' + p.tag + '</span>' +
        '<div style="position:absolute;left:24px;right:24px;bottom:24px;transform:translateY(var(--info-y));transition:transform .4s ease">' +
          '<h3 style="font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:22px;margin:0;color:#FFFFFF">' + p.title + '</h3>' +
          '<p style="margin:8px 0 0;font-size:13.5px;color:#d4d4d8;line-height:1.55">' + p.description[lang] + '</p>' +
        '</div>' +
      '</a>';
    }).join('');
    var grid = document.getElementById('projects-grid');
    grid.innerHTML = html;
    attachHover(grid);
    observeRevealX(grid);
  }

  function testimonialCardHtml(t, lang, dir) {
    return '<div data-reveal-x="' + dir + '" style="width:380px;height:200px;flex-shrink:0;background:#070d05;border:1px solid rgba(255,255,255,.1);padding:24px;display:flex;flex-direction:column" class="dtesticard">' +
      '<p style="margin:0 0 16px;font-size:12.5px;line-height:1.55;color:#d4d4d8;flex:1;overflow:hidden">' + t.quote[lang] + '</p>' +
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<img src="' + t.avatar + '" alt="' + t.name + '" style="width:48px;height:48px;border-radius:50%;object-fit:cover;flex-shrink:0">' +
        '<div style="min-width:0">' +
          '<span style="display:block;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:14px;color:#FFFFFF;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + t.name + '</span>' +
          '<span style="display:block;font-size:12px;color:#71717a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + t.role + '</span>' +
        '</div>' +
        '<a href="' + t.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn" style="margin-left:auto;flex-shrink:0;opacity:.6;transition:opacity .2s ease" data-hover="opacity:1">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="#a1a1aa"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>' +
        '</a>' +
      '</div>' +
    '</div>';
  }

  function renderTestimonials() {
    var lang = state.lang;
    var row1 = T1.concat(T1).map(function(t, i) { return testimonialCardHtml(t, lang, i % 2 === 0 ? 'left' : 'right'); }).join('');
    var row2 = T2.concat(T2).map(function(t, i) { return testimonialCardHtml(t, lang, i % 2 === 0 ? 'right' : 'left'); }).join('');
    var r1 = document.getElementById('testi-row-1');
    var r2 = document.getElementById('testi-row-2');
    r1.innerHTML = row1;
    r2.innerHTML = row2;
    attachHover(r1);
    attachHover(r2);
    observeRevealX(r1);
    observeRevealX(r2);
  }

  function observeRevealX(root) {
    var els = root.querySelectorAll('[data-reveal-x]:not(.reveal-x-bound)');
    els.forEach(function(el) {
      el.classList.add('reveal-x-bound');
      revealXObserver.observe(el);
    });
  }
  var revealXObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealXObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  function renderMarquee() {
    var text = STR[state.lang].marquee;
    document.getElementById('marquee-track').innerHTML = new Array(4).fill(
      '<span class="dmarqitem" style="padding:0 22px;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:clamp(18px,2.2vw,26px);color:#010A00">' + text + '</span>'
    ).join('');
  }

  function applyStaticI18n() {
    var s = STR[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (s[key] === undefined) return;
      if (el.children.length > 0) {
        var textNode = null;
        for (var i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === 3) { textNode = el.childNodes[i]; break; }
        }
        if (textNode) textNode.textContent = s[key];
        else el.insertBefore(document.createTextNode(s[key]), el.firstChild);
      } else {
        el.textContent = s[key];
      }
    });
    document.documentElement.lang = state.lang;
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var isActive = btn.getAttribute('data-lang') === state.lang;
      btn.style.color = isActive ? '#FFFFFF' : 'rgba(255,255,255,.4)';
      btn.style.fontWeight = isActive ? '800' : '600';
      btn.style.borderBottomColor = isActive ? '#B8EA07' : 'transparent';
    });
  }

  function attachHover(root) {
    root.querySelectorAll('[data-hover]').forEach(function(el) {
      if (el._hoverAttached) return;
      el._hoverAttached = true;
      var raw = el.getAttribute('data-hover');
      var pairs = raw.split(';').map(function(s){return s.trim();}).filter(Boolean).map(function(s){
        var i = s.indexOf(':');
        return [s.slice(0,i).trim(), s.slice(i+1).trim()];
      });
      var originals = pairs.map(function(p){ return el.style.getPropertyValue(p[0]); });
      el.addEventListener('mouseenter', function(){ pairs.forEach(function(p){ el.style.setProperty(p[0], p[1]); }); });
      el.addEventListener('mouseleave', function(){
        pairs.forEach(function(p, i){
          if (originals[i]) el.style.setProperty(p[0], originals[i]); else el.style.removeProperty(p[0]);
        });
      });
    });
  }

  function renderAll() {
    applyStaticI18n();
    renderBio();
    renderExperience();
    renderEducation();
    renderProjects();
    renderTestimonials();
    renderMarquee();
    updateLangButtons();
  }

  function setLang(lang) {
    state.lang = lang;
    renderAll();
  }

  // Modal
  function openModal(index) {
    state.modalIndex = index;
    var flat = certFlatList();
    var cert = flat[index];
    if (!cert) return;
    document.getElementById('modal-img').src = cert.img;
    document.getElementById('modal-img').alt = cert.label;
    document.getElementById('modal-title').textContent = cert.courseTitle;
    document.getElementById('modal-org').textContent = cert.org + ' · ' + cert.year;
    document.getElementById('cert-modal').style.display = 'flex';
  }
  function closeModal() {
    state.modalIndex = -1;
    document.getElementById('cert-modal').style.display = 'none';
  }
  function navModal(dir) {
    var flat = certFlatList();
    state.modalIndex = (state.modalIndex + dir + flat.length) % flat.length;
    openModal(state.modalIndex);
  }

  document.addEventListener('DOMContentLoaded', function() {
    renderAll();

    // Mobile menu
    var menu = document.getElementById('mobile-menu');
    document.getElementById('menu-toggle-btn').addEventListener('click', function() {
      var open = menu.classList.toggle('open');
      document.getElementById('menu-bar-top').style.transform = open ? 'translateY(4.75px) rotate(45deg)' : 'none';
      document.getElementById('menu-bar-mid').style.opacity = open ? '0' : '1';
      document.getElementById('menu-bar-bottom').style.transform = open ? 'translateY(-4.75px) rotate(-45deg)' : 'none';
    });
    function closeMenu() {
      menu.classList.remove('open');
      document.getElementById('menu-bar-top').style.transform = 'none';
      document.getElementById('menu-bar-mid').style.opacity = '1';
      document.getElementById('menu-bar-bottom').style.transform = 'none';
    }
    document.getElementById('menu-close-btn').addEventListener('click', closeMenu);
    menu.querySelectorAll('.mobile-menu-link').forEach(function(a) { a.addEventListener('click', closeMenu); });

    // Lang buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { setLang(btn.getAttribute('data-lang')); });
    });

    // Modal controls
    document.getElementById('cert-modal').addEventListener('click', function(e) { if (e.target.id === 'cert-modal') closeModal(); });
    document.getElementById('modal-close-btn').addEventListener('click', function(e) { e.stopPropagation(); closeModal(); });
    document.getElementById('modal-prev-btn').addEventListener('click', function(e) { e.stopPropagation(); navModal(-1); });
    document.getElementById('modal-next-btn').addEventListener('click', function(e) { e.stopPropagation(); navModal(1); });
    document.getElementById('modal-content').addEventListener('click', function(e) { e.stopPropagation(); });

    attachHover(document);

    // Header / scroll / particle logic (adapted from original)
    var header = document.getElementById('site-header');
    var spacer = document.getElementById('header-spacer');
    var avail = document.getElementById('avail-badge');
    var track = document.getElementById('scroll-progress-track');
    var bar = document.getElementById('scroll-progress-bar');
    if (header && spacer) spacer.style.height = header.getBoundingClientRect().height + 'px';

    function alignSubtext() {
      var headline = document.getElementById('hero-headline');
      var subtext = document.getElementById('hero-subtext');
      if (headline && subtext) {
        var hr = headline.getBoundingClientRect();
        var heroEl2 = document.getElementById('hero');
        var heroRect = heroEl2.getBoundingClientRect();
        var cue = document.querySelector('.dscrollcue');
        var cueWidth = cue ? (heroRect.right - cue.getBoundingClientRect().left) + 24 : 0;
        subtext.style.right = Math.max(heroRect.right - hr.right, cueWidth) + 'px';
        subtext.style.top = (hr.bottom - heroRect.top + 18) + 'px';
        subtext.style.whiteSpace = 'nowrap';
        subtext.style.maxWidth = 'none';
        subtext.style.visibility = 'visible';
      }
    }
    alignSubtext();
    window.addEventListener('resize', alignSubtext, { passive: true });

    var heroEl3 = document.getElementById('hero');
    var portraitImg = document.getElementById('hero-portrait-img');
    var portraitCanvas = document.getElementById('hero-portrait-canvas');
    var glitchInterval = null, particles = null, particleRAF = null, baseCache = null, pad = 160, pointer = null, holeRadius = 0;

    function setupParticles() {
      if (!portraitImg || !portraitCanvas || !portraitImg.complete) return;
      var w = portraitImg.clientWidth, h = portraitImg.clientHeight;
      if (!w || !h) return;
      var off = document.createElement('canvas');
      off.width = w; off.height = h;
      var octx = off.getContext('2d');
      octx.filter = 'grayscale(1) contrast(1.15) brightness(1.02)';
      octx.drawImage(portraitImg, 0, 0, w, h);
      var step = 4;
      var data = octx.getImageData(0, 0, w, h).data;
      var pts = [];
      for (var y = 0; y < h; y += step) {
        for (var x = 0; x < w; x += step) {
          var i = (y * w + x) * 4;
          var a = data[i + 3];
          if (a < 40) continue;
          pts.push({ x0: x + pad, y0: y + pad, x: x + pad, y: y + pad, vx: (Math.random() - 0.5) * 60, vy: (Math.random() - 0.5) * 60, r: data[i], g: data[i + 1], b: data[i + 2], a: a / 255 });
        }
      }
      portraitCanvas.width = w + pad * 2; portraitCanvas.height = h + pad * 2;
      portraitCanvas.style.width = (w + pad * 2) + 'px';
      portraitCanvas.style.height = (h + pad * 2) + 'px';
      portraitCanvas.style.left = -pad + 'px';
      portraitCanvas.style.top = -pad + 'px';
      particles = pts;
      baseCache = off;
    }

    function drawParticles(t, holeTarget) {
      if (!particles || !portraitCanvas || !baseCache) return;
      var ctx = portraitCanvas.getContext('2d');
      ctx.clearRect(0, 0, portraitCanvas.width, portraitCanvas.height);
      var radius = 130;
      holeRadius += (holeTarget - holeRadius) * 0.18;
      ctx.drawImage(baseCache, pad, pad);
      if (pointer && holeRadius > 1) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        var grad = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, holeRadius);
        grad.addColorStop(0, 'rgba(0,0,0,1)');
        grad.addColorStop(0.65, 'rgba(0,0,0,1)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, holeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        var tx = p.x0, ty = p.y0;
        if (pointer) {
          var dx = p.x0 - pointer.x, dy = p.y0 - pointer.y;
          var dist = Math.hypot(dx, dy);
          if (dist > radius + 60) continue;
          if (dist < radius) {
            var force = (1 - dist / radius) * t;
            var ang = Math.atan2(dy, dx);
            tx = p.x0 + Math.cos(ang) * force * 55 + p.vx * force;
            ty = p.y0 + Math.sin(ang) * force * 55 + p.vy * force;
          }
        } else if (Math.abs(p.x - p.x0) < 0.3 && Math.abs(p.y - p.y0) < 0.3) {
          continue;
        }
        p.x += (tx - p.x) * 0.2;
        p.y += (ty - p.y) * 0.2;
        ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.a + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    var isMobileParticles = window.matchMedia('(max-width: 640px)').matches;
    if (heroEl3 && !isMobileParticles) {
      heroEl3.addEventListener('mouseenter', function() {
        heroEl3.classList.add('hero-hover');
        glitchInterval = setInterval(function() {
          var hl = document.getElementById('hero-headline');
          if (hl) { hl.style.animation = 'none'; void hl.offsetWidth; hl.style.animation = ''; }
        }, 1400);
        setupParticles();
        if (particles) {
          portraitImg.style.opacity = '0';
          portraitCanvas.style.opacity = '1';
          if (particleRAF) cancelAnimationFrame(particleRAF);
          (function loop() { drawParticles(1, 130); particleRAF = requestAnimationFrame(loop); })();
        }
      });
      function onPortraitMove(e) {
        var r = portraitCanvas.getBoundingClientRect();
        pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      }
      portraitCanvas.addEventListener('mousemove', onPortraitMove);
      portraitImg.addEventListener('mousemove', onPortraitMove);
      heroEl3.addEventListener('mouseleave', function() {
        heroEl3.classList.remove('hero-hover');
        if (glitchInterval) clearInterval(glitchInterval);
        if (particleRAF) cancelAnimationFrame(particleRAF);
        if (particles) {
          (function loop() {
            drawParticles(0, 0);
            var stillMoving = particles.some(function(p) { return Math.abs(p.x - p.x0) > 0.3 || Math.abs(p.y - p.y0) > 0.3; }) || holeRadius > 1;
            if (stillMoving) { particleRAF = requestAnimationFrame(loop); }
            else {
              pointer = null;
              portraitImg.style.opacity = '1';
              portraitCanvas.style.opacity = '0';
            }
          })();
        }
      });
    }

    function onScroll() {
      var heroEl = document.getElementById('hero');
      var compact = heroEl ? heroEl.getBoundingClientRect().bottom <= 0 : window.scrollY > 400;
      var scrolled = window.scrollY > 20;
      var headlineEl = document.getElementById('hero-headline');
      if (heroEl && headlineEl) {
        var hr = heroEl.getBoundingClientRect();
        var progress = Math.min(1, Math.max(0, -hr.top / hr.height));
        headlineEl.style.transform = 'skewX(' + (progress * 4) + 'deg) scale(' + (1 + progress * 0.06) + ')';
        headlineEl.style.opacity = String(Math.max(0, 1 - progress * 1.4));
        var holaSoy = document.getElementById('hero-hola-soy');
        var subtext = document.getElementById('hero-subtext');
        var fadeOut = String(Math.max(0, 1 - progress * 1.4));
        if (holaSoy) holaSoy.style.opacity = fadeOut;
        if (subtext) subtext.style.opacity = fadeOut;
      }
      if (header) {
        header.style.top = '0px';
        header.style.left = '0px';
        header.style.width = 'auto';
        header.style.maxWidth = 'none';
        header.style.borderRadius = '0px';
        header.style.padding = '20px clamp(20px,4vw,56px)';
        header.style.background = scrolled ? 'rgba(1,10,0,.7)' : 'rgba(1,10,0,.55)';
        header.style.border = 'none';
        header.style.borderBottom = scrolled ? '1px solid rgba(184,234,7,.25)' : '1px solid rgba(255,255,255,.1)';
        header.style.boxShadow = 'none';
      }
      if (avail) avail.style.display = 'flex';
      var blurEl = document.getElementById('sobre-card-blur');
      var cardEl = document.querySelector('[data-sobre-card]');
      if (blurEl && cardEl) {
        var ct = cardEl.getBoundingClientRect().top;
        var p2 = Math.min(1, Math.max(0, (300 - ct) / (300 - 236)));
        blurEl.style.opacity = String(p2);
        blurEl.style.transform = 'translateY(' + ((1 - p2) * 28) + 'px) scale(' + (1 + (1 - p2) * 0.12) + ')';
      }
      if (track) track.style.opacity = scrolled ? '1' : '0';
      if (bar) {
        var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var viewH = window.innerHeight || document.documentElement.clientHeight;
        var max = docH - viewH;
        var pct = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;
        bar.style.width = pct + '%';
      }
      var ids = ['contacto', 'proyectos', 'sobre-mi'];
      var active = '';
      for (var ii = 0; ii < ids.length; ii++) {
        var sec = document.getElementById(ids[ii]);
        if (sec && sec.getBoundingClientRect().top <= 130) { active = ids[ii]; break; }
      }
      document.querySelectorAll('[data-nav-id]').forEach(function(a) {
        var isActive = a.getAttribute('data-nav-id') === active;
        a.style.color = isActive ? '#B8EA07' : '#FFFFFF';
        a.style.fontWeight = isActive ? '700' : '500';
        a.style.borderBottomColor = isActive ? '#B8EA07' : 'transparent';
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    if (window.location.hash) {
      setTimeout(function() {
        var target = document.querySelector(window.location.hash);
        if (target) {
          var top = target.getBoundingClientRect().top + document.body.scrollTop - 20;
          document.body.scrollTop = top;
          document.documentElement.scrollTop = top;
          window.scrollTo(0, top);
        }
      }, 60);
    }

    var els = document.querySelectorAll('[data-reveal]');
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function(el) { io.observe(el); });
  });
})();
