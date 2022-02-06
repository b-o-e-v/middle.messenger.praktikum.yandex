export const data = {
  form: {
    id: 'signin',
    title: 'SIGN IN'
  },
  inputs: [
    {
      title: 'login',
      name: 'login',
      type: 'text',
      required: true
    },
    {
      title: 'password',
      name: 'password',
      type: 'password',
      required: true
    }
  ],
  buttons: [
    {
      text: 'SIGN IN',
      type: 'submit',
    }
  ],
  link: {
    text: 'SIGN UP',
    url: '/signup'
  }
}
