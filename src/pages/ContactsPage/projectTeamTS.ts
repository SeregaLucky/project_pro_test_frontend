import Popov from '../../assets/staff/Popov.jpg';
import Shvartsman from '../../assets/staff/Shvartsman.jpg';
import Stryzh from '../../assets/staff/Stryzh.jpg';
import Lutsyshyna from '../../assets/staff/Lutsyshyna.jpg';
import Pushkovskiy from '../../assets/staff/Pushkovskiy.jpg';
import Arkhypchenko from '../../assets/staff/Arkhypchenko.jpg';
import Halat from '../../assets/staff/Halat.jpg';
import Poddubniy from '../../assets/staff/Poddubniy.jpg';
import Manuilenko from '../../assets/staff/Manuilenko.jpg';
import Sariieva from '../../assets/staff/Sariieva.jpg';
import Mazuryk from '../../assets/staff/Mazuryk.jpg';
import Oherchuk from '../../assets/staff/Oherchuk.jpg';
import Plietnikov from '../../assets/staff/Plietnikov.jpg';
import Plaksii1 from '../../assets/staff/Plaksii1.jpg';
import Bezuhla1 from '../../assets/staff/Bezuhla1.jpg';
import Evgeniya from '../../assets/staff/Evgeniya.jpg';

interface IprojectTeam {
  id: number;
  name: string;
  nameRu: string;
  position: string;
  eMail: string;
  imgSrc: any;
  linkedin: string | null;
}

const projectTeam: Array<IprojectTeam> = [
  {
    id: 1,
    name: 'Dmytro Popov',
    nameRu: 'Дмитрий Попов',
    position: 'Project Manager / Product Owner',
    eMail: 'dm87ua@gmail.com',
    imgSrc: Popov,
    linkedin: 'https://www.linkedin.com/in/dm87ua',
  },
  {
    id: 2,
    name: 'Maryna Shvartsman',
    nameRu: 'Марина Шварцман',
    position: 'Project Manager / Product Owner',
    eMail: 'Mary.shvartsman@gmail.com',
    imgSrc: Shvartsman,
    linkedin: 'https://linkedin.com/in/maryna-shvartsman-aa6a331a1',
  },
  {
    id: 3,
    name: 'Sergii Stryzh',
    nameRu: 'Сергей Стриж',
    position: 'Team Lead',
    eMail: 'strizgsergey@gmail.com',
    imgSrc: Stryzh,
    linkedin: 'https://www.linkedin.com/in/stryzg-sergii',
  },
  {
    id: 4,
    name: 'Olha Lutsyshyna',
    nameRu: 'Ольга Луцишина',
    position: 'front end developer',
    eMail: 'olhalutsyshyna@gmail.com',
    imgSrc: Lutsyshyna,
    linkedin: 'https://www.linkedin.com/in/olha-lutsyshyna',
  },
  {
    id: 5,
    name: 'Sergey Pushkovskiy',
    nameRu: 'Сергей Пушковский',
    position: 'front end developer',
    eMail: 'spushkovskiy@gmail.com',
    imgSrc: Pushkovskiy,
    linkedin: 'https://www.linkedin.com/in/sergeypushkovskiy',
  },
  {
    id: 6,
    name: 'Iryna Arkhypchenko',
    nameRu: 'Ирина Архипченко',
    position: 'front end developer',
    eMail: 'arkhypchenko.iryna@gmail.com',
    imgSrc: Arkhypchenko,
    linkedin: 'https://www.linkedin.com/in/iryna-arkhypchenko-91389814b',
  },
  {
    id: 7,
    name: 'Oleh Halat',
    nameRu: 'Олег Галат',
    position: 'front end developer',
    eMail: 'Oleh.Halat@outlook.com',
    imgSrc: Halat,
    linkedin: 'https://www.linkedin.com/in/o-halat',
  },
  {
    id: 8,
    name: 'Sergey Poddubniy',
    nameRu: 'Сергей Поддубный',
    position: 'front end developer',
    eMail: 'sergey_pidd@ukr.net',
    imgSrc: Poddubniy,
    linkedin: null,
  },
  {
    id: 9,
    name: 'Alla Sariieva',
    nameRu: 'Алла Сариева',
    position: 'front end developer',
    eMail: 'alla.cleo@gmail.com',
    imgSrc: Sariieva,
    linkedin: 'http://linkedin.com/in/alla-sariieva-14828a91',
  },
  {
    id: 10,
    name: 'Petro Mazuryk',
    nameRu: 'Петр Мазурык',
    position: 'front end developer',
    eMail: 'p.a.mazuryk@gmail.com',
    imgSrc: Mazuryk,
    linkedin: 'https://www.linkedin.com/in/petro-mazuryk-84b1061a2',
  },
  {
    id: 11,
    name: 'Ihor Oherchuk',
    nameRu: 'Игорь Огерчук',
    position: 'front end developer',
    eMail: 'igor.ogerchuk@gmail.com',
    imgSrc: Oherchuk,
    linkedin: 'https://www.linkedin.com/in/ihor-oherchuk',
  },
  {
    id: 12,
    name: 'Denys Plietnikov',
    nameRu: 'Денис Плетников',
    position: 'front end developer',
    eMail: 'denys.plietnikov.@gmail.com',
    imgSrc: Plietnikov,
    linkedin: 'https://www.linkedin.com/in/denys-plietnikov',
  },
  {
    id: 13,
    name: 'Artur Manuilenko',
    nameRu: 'Артур Мануйленко',
    position: 'front end developer',
    eMail: 'manuilenkoart@gmail.com',
    imgSrc: Manuilenko,
    linkedin: null,
  },
  {
    id: 14,
    name: 'Nataliia Plaksii',
    nameRu: 'Наталия Плаксий',
    position: 'QA Engineer',
    eMail: 'plaksii.natali@gmail.com',
    imgSrc: Plaksii1,
    linkedin: 'https://www.linkedin.com/in/natali-plaksii-6273111a1/',
  },
  {
    id: 15,
    name: 'Yiliia Bezuhla',
    nameRu: 'Юля Безуглая',
    position: 'QA Engineer',
    eMail: 'bezuglaya.u@gmail.com',
    imgSrc: Bezuhla1,
    linkedin: 'https://www.linkedin.com/in/yuliia-bezuhla-054780a8',
  },
  {
    id: 16,
    name: 'Ruzhinskaya Evgeniya',
    nameRu: 'Евгения Ружинская',
    position: 'QA Engineer',
    eMail: 'evakaralina@gmail.com',
    imgSrc: Evgeniya,
    linkedin: null,
  },
];

export default projectTeam;
