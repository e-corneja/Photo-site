import { validateForms } from "../functions/validate-forms";

const rules1 = [
  {
    ruleSelector: ".input-mail1",
    tel: true,
    telError: "Введите корректный Email",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните Email!",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный Email!",
      },
    ],
  },
];

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "customRegexp",
        value: /[а-я]/gi,
        errorMessage: "Недопустимый формат",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    tel: true,
    telError: "Введите корректный Email",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните Email!",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный Email!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".form1", rules1, afterForm);
validateForms(".form", rules, afterForm);
