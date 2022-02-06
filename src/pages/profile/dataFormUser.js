export const data = {
  form: {
    id: 'changedata',
    title: 'Display Name'
  },
  avatar: {
    name: 'avatar',
    id: 'load_avatar'
  },
  inputs: [
    {
      title: 'first name',
      name: 'first_name',
      type: 'text',
      required: true,
      disabled: true
    },
    {
      title: 'second name',
      name: 'second_name',
      type: 'text',
      required: true,
      disabled: true
    },
    {
      title: 'display name',
      name: 'display_name',
      type: 'text',
      required: true,
      disabled: true
    },
    {
      title: 'login',
      name: 'login',
      type: 'text',
      required: true,
      disabled: true
    },
    {
      title: 'email',
      name: 'email',
      type: 'text',
      required: true,
      disabled: true
    },
    {
      title: 'phone',
      name: 'phone',
      type: 'tel',
      required: true,
      disabled: true
    }
  ],
  buttons: [
    {
      text: 'Сhange data',
      className: '.empty.blue.data',
      type: 'button'
    },
    {
      text: 'Сhange password',
      className: '.empty.blue.password',
      type: 'button'
    },
    {
      text: 'Sign out',
      className: '.empty.red.signout',
      type: 'button'
    }
  ]
}
