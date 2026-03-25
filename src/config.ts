export const siteConfig = {
  name: "Dr. Christopher Butler",
  fullName: "Dr. Christopher Oskar Butler Vallejo",
  title: "Médico Cardiólogo",
  description: "Dr. Christopher Butler — Médico Cardiólogo en Lima. Clínica SANNA, Hospital Lima Este Vitarte. Miembro de la European Society of Cardiology. CMP 38578, RNE 027649.",

  credentials: {
    cmp: "38578",
    rne: "027649",
  },

  colors: {
    primaryDark: "#0A1628",
    primary: "#1E3A5F",
    primaryLight: "#2D5F8A",
    accent: "#06B6D4",
    surface: "#0F2136",
    surfaceLight: "#162D4A",
  },

  tagline: "Cardiólogo con alcance internacional y vocación de servicio",

  stats: [
    { value: "24+", label: "Años de Experiencia" },
    { value: "84", label: "Congresos y Cursos" },
    { value: "6", label: "Sociedades Internacionales" },
    { value: "5", label: "Países de Formación" },
  ],

  dondeAtiendo: [
    {
      tipo: "Privada",
      nombre: "Clínica SANNA",
      cargo: "Médico-Cardiólogo",
      periodo: "2019 — Actualidad",
      destacado: "Me encuentran aquí",
    },
    {
      tipo: "Pública",
      nombre: "Hospital de Lima Este - Vitarte",
      cargo: "Cardiólogo",
      periodo: "Actualidad",
      destacado: "Servicio de Cardiología",
    },
  ],

  aboutMe: "Del Liceo Naval Almirante Guise a la European Society of Cardiology. Más de dos décadas dedicadas al cuidado del corazón, formándome en Perú, España, Argentina, Colombia y Estados Unidos. Hoy comparto esa experiencia atendiendo pacientes en Clínica SANNA y en el sector público, y formando a la próxima generación de médicos como docente universitario.",

  especialidades: [
    "Cardiología Clínica",
    "Ecocardiografía Doppler",
    "Ecocardiografía Transesofágica",
    "Insuficiencia Cardíaca",
    "Hipertensión Arterial",
  ],

  alcanceInternacional: [
    {
      pais: "Perú",
      bandera: "🇵🇪",
      instituciones: ["USMP", "UNFV", "INCOR", "Hospital Almenara", "Marina de Guerra"],
    },
    {
      pais: "España",
      bandera: "🇪🇸",
      instituciones: ["Homologación Médica (2006)"],
    },
    {
      pais: "Argentina",
      bandera: "🇦🇷",
      instituciones: ["Eco Doppler — Bioimágenes", "Eco Transesofágica — U. del Salvador", "Fundación Favaloro", "SAC · ICBA"],
    },
    {
      pais: "Colombia",
      bandera: "🇨🇴",
      instituciones: ["Fundación SHAIO — Electrofisiología", "CardioLili Cali"],
    },
    {
      pais: "Estados Unidos",
      bandera: "🇺🇸",
      instituciones: ["Schneider Children's Hospital, NY", "George Washington University", "AHA · ACC"],
    },
  ],

  sociedades: [
    { sigla: "ESC", nombre: "European Society of Cardiology", tipo: "Professional Member" },
    { sigla: "HFA", nombre: "Heart Failure Association (ESC)", tipo: "Regular Member" },
    { sigla: "SAC", nombre: "Sociedad Argentina de Cardiología", tipo: "Miembro Activo" },
    { sigla: "SOCIMECAR", nombre: "Soc. Científica de Medicina Cardiovascular del Perú", tipo: "Miembro Activo" },
    { sigla: "SISIAC", nombre: "Soc. de Imágenes Cardiovasculares Interamericana", tipo: "Miembro Activo" },
    { sigla: "SPC", nombre: "Sociedad Peruana de Cardiología", tipo: "Miembro Asociado" },
  ],

  experiencia: [
    {
      institucion: "Marina de Guerra del Perú",
      cargo: "Médico Cardiólogo — Departamento de Cardiología",
      periodo: "2003 — 2023",
      duracion: "20 años",
      destacado: true,
      detalle: "Policlínico Naval de San Borja, Hospital Naval, Fuerza de Aviación Naval. Dos décadas de servicio ininterrumpido en la institución donde se formó como cardiólogo.",
    },
    {
      institucion: "Clínica SANNA",
      cargo: "Médico-Cardiólogo",
      periodo: "2019 — Actualidad",
      destacado: true,
      detalle: "Red de salud privada más grande del Perú.",
    },
    {
      institucion: "Hospital de Lima Este - Vitarte",
      cargo: "Cardiólogo",
      periodo: "2024 — Actualidad",
      detalle: "Servicio de Cardiología del sector público.",
    },
    {
      institucion: "Centro Médico Peruano-Suizo (Suiza Lab)",
      cargo: "Coordinador del Área de Cardiología",
      periodo: "2009 — 2013",
      detalle: "Angamos, Miraflores.",
    },
    {
      institucion: "Callao Salud S.A.C.",
      cargo: "Cardiólogo",
      periodo: "2014 — 2017",
    },
  ],

  trayectoria: [
    { año: "2024", titulo: "Docente — U. Científica del Sur", desc: "Medicina Humana" },
    { año: "2023", titulo: "Eco Transesofágica", desc: "U. del Salvador, Buenos Aires" },
    { año: "2022", titulo: "Eco Doppler Avanzada", desc: "Bioimágenes, Buenos Aires" },
    { año: "2019", titulo: "Clínica SANNA", desc: "Médico-Cardiólogo" },
    { año: "2016", titulo: "Maestría en Cardiología", desc: "USMP" },
    { año: "2009", titulo: "Stage Internacional", desc: "NY (USA) + Bogotá (Colombia)" },
    { año: "2007", titulo: "Especialidad Cardiología", desc: "UNFV (2007-2010)" },
    { año: "2006", titulo: "Homologación en España", desc: "Título profesional europeo" },
    { año: "2003", titulo: "Marina de Guerra del Perú", desc: "Inicio de 20 años de servicio" },
    { año: "2002", titulo: "Médico Cirujano — USMP", desc: "SERUMS Base Naval de Paita" },
    { año: "1981", titulo: "Liceo Naval Almirante Guise", desc: "Formación desde primaria" },
  ],

  investigacion: {
    titulo: "Consumo de Betabloqueadores y Síntomas Depresivos en Adultos Mayores Hipertensos",
    tipo: "Estudio Multicéntrico",
    año: "2025",
    revista: "Archivos Peruanos de Cardiología y Cirugía Cardiovascular",
    otrosTrabajos: 3,
  },

  docencia: [
    { universidad: "Universidad Científica del Sur", area: "Medicina Humana", periodo: "2024-2025" },
    { universidad: "Universidad de Piura", area: "Medicina Humana", periodo: "2019" },
    { universidad: "Universidad Peruana de Ciencias Aplicadas (UPC)", area: "Medicina Humana", periodo: "2017" },
  ],

  social: {
    email: "chrisbutler75@yahoo.com",
    linkedin: "https://www.linkedin.com/in/christopher-butler-4ab382175/",
    whatsapp: "51999434491",
  },

  contacto: {
    telefono: "999 434 491",
    ubicacion: "San Borja, Lima",
  },
};
