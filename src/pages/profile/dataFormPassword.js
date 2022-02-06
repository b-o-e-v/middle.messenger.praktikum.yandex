export default {
  form: {
    id: 'changepassword',
    title: 'Display Name',
  },
  avatar: {
    src: '',
  },
  inputs: [
    {
      title: 'old password',
      name: 'oldPassword',
      type: 'password',
      required: true,
    },
    {
      title: 'new password',
      name: 'newPassword',
      type: 'password',
      required: true,
    },
    {
      title: 'repeat new password',
      name: 'repeat_newPassword',
      type: 'password',
      required: true,
    },
  ],
  buttons: [
    {
      text: 'Go back',
      className: '.empty.blue.goback',
      type: 'button',
    },
    {
      text: 'Change password',
      type: 'submit',
    },
  ],
}
