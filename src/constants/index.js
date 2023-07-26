/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    Propul,
    lunar_phase,
    lmv4,
    emblem,
    vikram,
    ashoka,
    transfer_to_moon,
    propulsionimg,
    logo,
    india,
    transfer,
    centric,
    Pragyan,
    Landing,
    atom,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "TimeLine",
    },
    {
      id: "lvm3",
      title: "LVM3-M4",
    },
    {
      id: "contact",
      title: "Comment",
    },
  ];
  
  const services = [
    {
      title: "Getting a lander to land safely and softly on the surface of the Moon",
      icon: web,
    },
    {
      title: "To place a rover on the moon",
      icon: mobile,
    },
    {
      title: "Observing and demonstrating the rover’s loitering capabilities on the Moon.",
      icon: backend,
    },
    {
      title: "In-site observation & conducting experiments on the materials available",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "ISRO",
      icon: logo,
    },
    {
      name: "Ashoka",
      icon: ashoka,
    },
    {
      name: "ISRO",
      icon: logo,
    },
    {
      name: "Ashoka",
      icon: ashoka,
    },
    {
      name: "ISRO",
      icon: logo,
    },
    {
      name: "Ashoka",
      icon: ashoka,
    },
    {
      name: "ISRO",
      icon: logo,
    },
    {
      name: "Ashoka",
      icon: ashoka,
    },
    {
      name: "ISRO",
      icon: logo,
    },
    {
      name: "Ashoka",
      icon: ashoka,
    },
    {
      name: "ISRO",
      icon: logo,
    },

  ];
  
  const experiences = [
    {
      title: "1. Earth Centric Phase (Phase-1)",
      company_name: "July 14, 2023 - July 25, 2023",
      icon: centric,
      iconBg: "#383E56",
      date: "",
      points: [
        "July 14...LVM3 M4 vehicle successfully launched Chandrayaan-3 into orbit. Chandrayaan-3, in its precise orbit, has begun its journey to the Moon. Health of the Spacecraft is normal.",
        "July 15...The first orbit-raising maneuver (Earthbound firing-1) is successfully performed at ISTRAC/ISRO, Bengaluru. Spacecraft is now in 41762 km x 173 km orbit.",
        "July 17...The second orbit-raising maneuver performed. The spacecraft is now in 41603 km x 226 km orbit.",
        "July 22...The fourth orbit-raising maneuver (Earth-bound perigee firing) is completed. The spacecraft is now in a 71351 km x 233 km orbit.",
        "July 25...Orbit-raising maneuver performed on July 25, 2023. Next firing (TransLunar Injection), is planned for August 1, 2023."
      ],
      image: "",
    },
    {
      title: "Lunar Transfer Phase (Phase-2)",
      company_name: "August 01, 2023 ",
      icon: transfer_to_moon,
      iconBg: "#E6DEDD",
      date: "........will be updated",
      points: [
        "August 1...Transfer Trajectory Phase "
      ],
      image: transfer,
    },
    {
      title: "3. Moon Centric Phase",
      company_name: "August 23, 2023",
      icon: lunar_phase,
      iconBg: "#383E56",
      date: "........will be updated",
      points: [
        "Lunar Orbit Insertion Phase (LOI)-(Phase-3) ",
        "Moon-bound Manoeuvre Phase (Phase-4)",
        "PM and Lunar Module Separation (Phase-5)",
        "De-boost Phase (Phase-6)"
      ],
      image: "",
    },
    {
      title: "Landing Phase ",
      company_name: "........will be updated",
      icon: Landing,
      iconBg: "#E6DEDD",
      date: "........will be updated",
      points: [
        "Pre-landing Phase (Phase-7) ",
        "Landing Phase (Phase-8) ",
        "Normal Phase for Lander and Rover (Phase-9)",
        "De-boost Phase (Phase-6)",
      ],
      image: "",
    },
    {
      title: "Moon Centric Normal Orbit Phase ",
      company_name: "........will be updated",
      icon: atom,
      iconBg: "#E6DEDD",
      date: "........will be updated",
      points: [
        "Moon Centric Normal Orbit Phase (100 km circular orbit) - For Propulsion Module (Phase-10) "
      ],
      image: "",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chandrayaan-3's successful landing on the moon will make India the FIRST nation to land on moon's South Pole.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "ISRO Scientists Visit Tirupati Venkatachalapathy Temple, with a miniature model of Chandrayaan-3 to offer prayers ahead of crucial moon mission",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "With an estimated budget of Rs 615 crore, Chandrayaan-3 is said to be one of the most cost-effective space missions as compared to its predecessors",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Lander 'Vikram'",


      description: 
    '',      
    tags: [
        {
          name: "Mission life : 1 Lunar day (14 Earth days)",
          color: "blue-text-gradient",
        },
        {
          name: "Mass : 1749.86 kg including Rover",
          color: "blue-text-gradient",
        },
        {
          name: "Power : 738 W (Winter solstice)",
          color: "pink-text-gradient",
        },
        {
          name: "Payloads : 3",
          color: "green-text-gradient",
        },
        {
          name: "Dimensions (mm3) : 2000 x 2000 x 1166",
          color: "blue-text-gradient",
        },
        {
          name: "Communication : ISDN, Ch-2 Orbiter",
          color: "blue-text-gradient",
        },
        {
          name: "Rover Landing site : 69.367621 S, 32.348126 E",
          color: "blue-text-gradient",
        },
        {
          name: "Payload 01 : ",
          color: "text-secondary",
        },
        {
          name: "RAMBHA-LP - Langmuir Probe",
          color: "orange-text-gradient",
        },

        {
          name: " Payload 02: ",
          color: "text-secondary",
        },
        {
          name: " Chandra’s Surface Thermophysical Experiment [ ChaSTE ]",
          color: "orange-text-gradient",
        },
        {
          name: " Payload 03 : ",
          color: "text-secondary",
        },
        {
          name: "ILSA Instrument for Lunar Seismic Activity",
          color: "orange-text-gradient",
        },
      ],
      image: vikram,
      source_code_link: "https://www.isro.gov.in/media_isro/pdf/Missions/LVM3/LVM3M4_Chandrayaan3_brochure.pdf",
    },
    {
      name: "Rover Pragyan",
  
      description:
        "",
      tags: [
        {
          name: "Mission Life : 1 Lunar day  (14 Earth days)",
          color: "blue-text-gradient",
        },
       
        {
          name: "Mass : 26 kg",
          color: "blue-text-gradient",
        },
        {
          name: "Power : 50 W",
          color: "pink-text-gradient",
        },
        {
          name: "Payloads : 2",
          color: "green-text-gradient",
        },
        {
          name: "Dimensions (mm3) : 917 x 750 x 397",
          color: "blue-text-gradient",
        },
        {
          name: "Communication : Lander",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "          ",
          color: "blue-text-gradient",
        },
        {
          name: "Payload 01 : ",
          color: "text-secondary",
        },
        {
          name: "APXS Alpha Particle X-Ray  Spectrometer", 
          color: "orange-text-gradient",
        },

        {
          name: " Payload 02: ",
          color: "text-secondary",
        },
        {
          name: " LIBS Laser Induced Breakdown Spectroscope",
          color: "orange-text-gradient",
        },
      ],
      image: Pragyan,
      source_code_link: "https://www.isro.gov.in/media_isro/pdf/Missions/LVM3/LVM3M4_Chandrayaan3_brochure.pdf",
    },
    {
      name: "Propulsion Module Payload",
      description:
        "",
      tags: [
        {
          name: "Spectro-polarimetry of HAbitable Planet Earth (SHAPE)",
          color: "orange-text-gradient",
        },
        {
          name: "Future discoveries of smaller planets in reflected light would allow us to probe into variety of Exo-planets which would qualify for habitability (or for presence of life).",
          color: "blue-text-gradient",
        },
      ],
      image: Propul,
      source_code_link: "https://github.com/",
    },
  ];

  
  const propulsion = [
    {
      name: "Propulsion Module",
      description:
        "",
      tags: [
        {
          name: "Propellant Mass :  1696.39 kg",
          color: "blue-text-gradient",
        },
        {
          name: "Total PM Mass :  2145.01 kg",
          color: "green-text-gradient",
        },
        {
          name: "Power Generation :  738 W, Summer solistices and with bias",
          color: "pink-text-gradient",
        },
        {
          name: "Communication :  S-Band Transponder (TTC) – with IDSN",
          color: "pink-text-gradient",
        },
        {
          name: "Attitude Sensors :  CASS, IRAP, Micro star sensor",
          color: "green-text-gradient",
        },
        {
          name: "Propulsion System :  Bi-Propellant Propulsion System (MMH + MON3)",
          color: "blue-text-gradient",
        },
      ],
      image: propulsionimg,
      source_code_link: "https://www.isro.gov.in/media_isro/pdf/Missions/LVM3/LVM3M4_Chandrayaan3_brochure.pdf",
    },
  ];

  const lvm3 = [
    {
      name: "LVM3-M4",
      description:
        "LVM3 has proved its versatility to undertake most complex missions like: ",
      tags: [
        {
          name: "Injecting multi-satellites ",
          color: "blue-text-gradient",
        },
        {
          name: "Mission planning to ensure safe relative distance among separated satellites through re-orientation and velocity addition maneuvers.", color: "green-text-gradient",
        },
        {
          name: "Multi orbit (LEO, MEO, GEO) and execute interplanetary missions.",
          color: "pink-text-gradient",
        },
        {
          name: "India’s largest and heaviest launch vehicle ferrying indian and international customer satellites.",
          color: "orange-text-gradient",
        },
      ],
      image: lmv4,
      source_code_link: "https://www.isro.gov.in/media_isro/pdf/Missions/LVM3/LVM3M4_Chandrayaan3_brochure.pdf",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, propulsion ,lvm3};