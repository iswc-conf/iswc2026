
import Ivan from "./pictures/Ivan.png";
import Fatima from "./pictures/Fatima.png";
import Roberto from "./pictures/Roberto.jpeg";
import Aidan_Hogan from "./pictures/Aidan_Hogan.png";
import Anna_Lisa_Gentile from "./pictures/Anna_Lisa_Gentile.jpeg";
import Jiaoyan_Chen from "./pictures/Jiaoyan_Chen.png";
import Valentina_Tamma from "./pictures/Valentina_Tamma.jpg";
import ernesto from "./pictures/ernesto.jpeg";
import Claudia from "./pictures/Claudia.jpg";
import Peter_Haase from "./pictures/Peter_Haase.jpg";
import Wen_Zhang from "./pictures/Wen_Zhang.jpeg";
import Andrei_Ciortea from "./pictures/Andrei_Ciortea.jpg"
import Ilaria_Tiddi from "./pictures/Ilaria_Tiddi.png"
import Oshani_Senevi from "./pictures/Oshani-Seneviratne.png"
import Shenghui_Wang from "./pictures/Shenghui Wang.png"
import Maria_Vidal from "./pictures/MariaVidal.jpg"
import Lora_Aroyo from "./pictures/lora.jpeg"
import Jacopo_Beberardinis from "./pictures/jacopo_deberardinis.jpg"
import Juan_Sequeda from "./pictures/Juan_Sequeda.jpeg"
import Marieke_Erp from "./pictures/Marieke.jpg"

const organizers = {
  "General Chair": [
    {
      name: 'Valentina Tamma',
      img: Valentina_Tamma,
      institution: 'University of Liverpool',
      country: 'UK',
    },
  ],
  "Local Chair": [
    {
      name: 'Claudia d\'Amato',
      img: Claudia,
      institution: 'University of Bari',
      country: 'Italy',
    },
  ],
  /*
  "Local Co-Chair": [
    {
      name: 'Ken Fukuda',
      img: ken,
      institution: 'National Institute of Advanced Industrial Science and Technology (AIST)',
      country: 'Japan',
    },
    {
      name: 'Ikki Ohmukai',
      img: ikki,
      institution: 'The University of Tokyo',
      country: 'Japan',
    },
    {
      name: 'Hideaki Takeda',
      img: hideaki,
      institution: 'National Institute of Informatics',
      country: 'Japan',
    },
  ],  */

  "Research Track Chairs": [
    {
      name: 'Manolis Koubarakis',
      img: '',
      institution: 'National and Kapodistrian University of Athens',
      country: 'Greece',
    },
    {
      name: 'Maria-Esther Vidal',
      img: Maria_Vidal,
      institution: 'Leibniz University, Hannover',
      country: 'Germany',
    },
  ],
  "In-Use Application Track Chairs": [
    {
      name: 'Ernesto Jimenez Ruiz',
      img: ernesto,
      institution: 'City St George, University of London',
      country: 'UK',
    },
    {
      name: 'Oshani Seneviratne',
      img: Oshani_Senevi,
      institution: 'Rensselaer Polytechnic Institute',
      country: 'USA',
    },
  ],
  "Resource Track Chairs": [
    {
      name: 'Axel Polleres',
      img: '',
      institution: 'Vienna University of Economics and Business (WU Wien)',
      country: 'Austria',
    },
    {
      name: 'Marieke van Erp',
      img: Marieke_Erp,
      institution: 'KNAW Humanities Cluster',
      country: 'The Netherlands',
    },
  ],
  "Workshop and Tutorials Chairs": [
    {
      name: 'Andrei Ciortea',
      img: Andrei_Ciortea,
      institution: 'University of St. Gallen',
      country: 'Switzerland',
    },
    {
      name: 'Ilaria Tiddi',
      img: Ilaria_Tiddi,
      institution: 'Vrije Universiteit Amsterdam',
      country: 'The Netherlands',
    },
  ],
  "Industry Track Chairs": [
    {
      name: 'Maria Keet',
      img: '',
      institution: 'Meaningfy S.a.r.l',
      country: 'Luxembourg',
    },
    {
      name: 'Daria Stepanova',
      img: '',
      institution: 'Bosch Center for Artificial Intelligence',
      country: 'Germany',
    },
  ],
  "Visionary Ideas Track Chair": [
    {
      name: 'Lora Aroyo',
      img: Lora_Aroyo,
      institution: 'Google',
      country: '',
    },
  ],
  "Doctoral Consortium Chairs": [
    {
      name: 'Anna Lisa Gentile',
      img: Anna_Lisa_Gentile,
      institution: 'IBM',
      country: 'USA',
    },
    {
      name: 'Aidan Hogan',
      img: Aidan_Hogan,
      institution: 'Universidad de Chile',
      country: 'Chile',
    },
  ],
  "Poster, Demo & Lightning Talk Chairs": [
    {
      name: 'Jaoyan Chen',
      img: Jiaoyan_Chen,
      institution: 'University of Manchester',
      country: 'UK',
    },
    {
      name: 'Robert Hoehndorf',
      img: '',
      institution: 'King Abdullah University of Science and Technology',
      country: 'Saudi Arabia',
    },
  ],
  
  "Dagsthul-style workshop Chairs": [
    {
      name: 'Jacopo de Berardinis',
      img: Jacopo_Beberardinis,
      institution: 'University of Liverpool',
      country: 'UK',
    },
  {
      name: 'Shengui Wang',
      img: Shenghui_Wang,
      institution: 'University of Twente',
      country: 'NL'
    }
  ],
  /*
  "Job Fair Chair": [
    {
      name: 'TBD',
      img: '',
      institution: 'TBD',
      country: 'TBD',
    }
  ], */
  "Sponsorship Chairs": [
    {
      name: 'Peter Haase',
      img: Peter_Haase,
      institution: 'Metaphacts GmbH',
      country: 'Germany',
    },
    {
      name: 'Wen Zhang',
      img: Wen_Zhang,
      institution: 'Zhejiang University ',
      country: 'China',
    },
        {
      name: 'Juan Sequeda',
      img: Juan_Sequeda,
      institution: 'ServiceNow',
      country: '',
    },
    ],
   /*
      name: 'Armando Stellato',
      img: armando,
      institution: 'University of Rome Tor Vergata',
      country: 'Italy',
    },
  ],*/
  "Proceedings & Metadata Chairs": [
    {
      name: 'Reham Alharbi',
      img: '',
      institution: 'Taibah University',
      country: ' Saudi Arabia',
    },
    {
      name: 'Roberto Barile',
      img: Roberto,
      institution: 'University of Bari',
      country: 'Italy',
    },
  ],
  /*"Students Grants and Activities Chair": [
    {
      name: 'Atsuko Yamaguchi',
      img: '', // No image available
      institution: 'Tokyo City University',
      country: 'Japan',
    },
    {
      name: 'Ines Akaichi',
      img: ines,
      institution: 'Vienna University of Economics and Business',
      country: 'Austria',
    },
  ],
  */
  "Web Presence & Publicity Chairs": [
    {
      name: 'Fatima Zahra Amara',
      img: Fatima,
      institution: 'University of Bari',
      country: 'Italy',
    },
    {
      name: 'Ivan Diliso',
      img: Ivan,
      institution: 'University of Bari',
      country: 'Italy',
    },
  ],
   /* "Journal Track": [
    {
      name: 'TBD',
      img: '',
      institution: 'TBD',
      country: 'TBD',
    },
  ],*/
};

export default organizers;
