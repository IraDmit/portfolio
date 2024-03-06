import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    ru: {
      about: "Обо мне",
      projects: "Проекты",
      contacts: "Контакты",
      city: "Живу в <br /> Тольятти, Россия",
      avaliable: "Доступна для <br /> фриланс проектов",
      experience: "ОПЫТ",
      skills: "НАВЫКИ",
      helloTxt:
        "Привет! Меня зовут Ирина Дмитриева, я фронтенд-разработчик из Тольятти, Россия. Мне нравится создавать адаптивные, производительные и визуально приятные веб-сайты.",
      expTxt:
        "Мой опыт разработки около года. У меня также есть около года опыта работы фрилансером.",
      skillsTxt:
        "Имею глубокие знания HTML, CSS и JavaScript. У меня есть опыт работы с Vue.js (2,3) и Nuxt.js (2). Я понимаю принципы отзывчивого и адаптивного дизайна. Разработка и поддержка приложений, интеграция API, модульное тестирование, адаптивный дизайн. Знание таких инструментов разработки, как Webpack, Babel и Git.",
      studyCase: "ПОДРОБНЕЕ",
      now: "Сейчас",
    },
    en: {
      about: "About",
      projects: "Projects",
      contacts: "Contacts",
      city: "Live in <br />Togliatti, Russia",
      avaliable: "Available for <br />freelance projects",
      experience: "Experience",
      skills: "Skills",
      helloTxt:
        "Hello! My name is Irina Dmitrieva, I'm a front-end developer from Togliatti, Russia. I like to create responsive and performant and visually pleasing websites.",
      expTxt:
        "My development experience is about a year. I also have about a year of freelance experience.",
      skillsTxt:
        "I have advanced knowledge of HTML, CSS and JavaScript. I have experience with Vue.js (2,3) and Nuxt.js (2). I understand the principles of responsive and adaptive design. Application development and support, API integration, unit testing, responsive design. Knowledge of development tools such as Webpack, Babel and Git.",
      studyCase: "STUDY CASE",
      now: "Now",
    },
  },
});
