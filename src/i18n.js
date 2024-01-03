import i18n from 'i18next';
import i18nBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'uz'],
    fallbackLng: 'uz',
    lng: 'uz',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          home: 'Bosh sahifa',
          ourWork: 'Ishlarimiz',
          order: 'Buyurtma',
          about: 'Haqimizda',
          contact: 'Bog`lanish',
        },
      },
      ru: {
        translation: {
          home: 'Главная',
          ourWork: 'Наши Работы',
          order: 'Заказ',
          about: 'О Нас',
          contact: 'Контакты',
        },
      },
    },
    // backend: {
    //   //   loadPath: 'http://localhost:5173/i18n/{{lng}}.json',
    //   loadPath: './src/Translate/{{lng}}.json',
    // },
  });

export default i18n;
