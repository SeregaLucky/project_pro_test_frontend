interface Book {
  name: string;
  author: string;
}

interface UsefulLink {
  name: string;
  link: string;
}

export const literature: Book[] = [
  {
    name:
      'Тестирование программного обеспечения. Фундаментальные концепции менеджмента бизнес-приложений.',
    author: 'Сэм Канер',
  },
  { name: 'Тестирование dot com.', author: 'Роман Савин' },
  {
    name: 'Быстрое тестирование.',
    author: 'Роберт Калбертсон, Крис Браун, Гэри Кобб',
  },
  { name: 'Психбольница в руках пациентов.', author: 'Алан Купер' },
  {
    name: 'Как тестируют в Google.',
    author: 'Джеймс А. Уиттакер, Джейсон Арбон, Джефф Каролло',
  },
  {
    name: 'Scrum и Kanban: выжимаем максимум.',
    author: 'Хенрик Книберг, Маттиас Скарин',
  },
];

export const sources: UsefulLink[] = [
  { name: 'dou.ua', link: 'https://dou.ua/' },
  { name: 'habr.com', link: 'https://habr.com/' },
  { name: 'qablog.practitest.com', link: 'https://qablog.practitest.com' },
  { name: 'software-testing.ru', link: 'https://software-testing.ru/' },
  {
    name: 'softwaretestingmagazine.com',
    link: 'https://www.softwaretestingmagazine.com/',
  },
  { name: 'blog.qamentor.com', link: 'http://blog.qamentor.com/' },
  {
    name: 'softwaretestinghelp.com',
    link: 'https://www.softwaretestinghelp.com/',
  },
  {
    name: 'tproger.ru',
    link: 'https://tproger.ru/digest/free-software-testing-books/',
  },
  {
    name: 'training.epam.ua',
    link: 'https://www.training.epam.ua/#!/News/97?lang=ua',
  },
];

export const employments: UsefulLink[] = [
  { name: 'djinni.co', link: 'https://djinni.co' },
  { name: 'jobs.dou.ua', link: 'https://jobs.dou.ua/vacancies/?category=QA' },
  { name: 'linkedin.com', link: 'https://linkedin.com' },
  { name: 'rabota.ua', link: 'https://rabota.ua' },
  { name: 'hh.ua', link: 'https://hh.ua' },
  { name: 'work.ua', link: 'https://work.ua' },
];
