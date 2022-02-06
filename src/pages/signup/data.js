export const data = {
  form: {
    id: 'signup',
    title: 'SIGN UP',
  },
  inputs: [
    {
      title: 'first name',
      name: 'first_name',
      type: 'text',
      required: true,
    },
    {
      title: 'second name',
      name: 'second_name',
      type: 'text',
      required: true,
    },
    {
      title: 'email',
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      title: 'phone',
      name: 'phone',
      type: 'tel',
      required: true,
    },
    {
      title: 'login',
      name: 'login',
      type: 'text',
      required: true,
    },
    {
      title: 'password',
      name: 'password',
      type: 'password',
      required: true,
    },
  ],
  buttons: [
    {
      text: 'SIGN UP',
      type: 'submit',
    },
  ],
  link: {
    text: 'SIGN IN',
    url: '/signin',
  },
}
