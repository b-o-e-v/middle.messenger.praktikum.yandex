import IComponentProps from '../interfaces/IComponentProps'

import Field from '../components/Field'

export default (fields: string[], disabled?: boolean) => {
  const data: {
    [key: string]: IComponentProps
  } = {
    avatar: new Field({
      input: {
        label: 'avatar',
        attributes: {
          id: 'avatar',
          class: 'form__avatar',
          disabled,
          type: 'file',
          name: 'avatar'
        }
      }
    }),
    firstName: new Field({
      input: {
        label: 'first name',
        attributes: {
          id: 'first-name',
          minlength: '1',
          maxlength: '50',
          required: true,
          disabled,
          name: 'first_name'
        }
      }
    }),
    secondName: new Field({
      input: {
        label: 'second name',
        attributes: {
          id: 'second-name',
          minlength: '1',
          maxlength: '50',
          required: true,
          disabled,
          name: 'second_name'
        }
      }
    }),
    displayName: new Field({
      input: {
        label: 'display name',
        attributes: {
          id: 'display-name',
          minlength: '1',
          maxlength: '20',
          required: true,
          disabled,
          name: 'display_name'
        }
      }
    }),
    login: new Field({
      input: {
        label: 'login',
        attributes: {
          id: 'login',
          minlength: '3',
          maxlength: '20',
          required: true,
          disabled,
          name: 'login',
          pattern: '[a-zA-Z0-9-_]{3,20}'
        }
      }
    }),
    email: new Field({
      input: {
        label: 'email',
        attributes: {
          id: 'email',
          minlength: '1',
          maxlength: '50',
          required: true,
          disabled,
          name: 'email',
          type: 'email',
          pattern: '[^@\\s]+@[^@\\s]+\\.[^@\\s]+'
        }
      }
    }),
    phone: new Field({
      input: {
        label: 'phone',
        attributes: {
          id: 'phone',
          minlength: '10',
          maxlength: '15',
          required: true,
          disabled,
          name: 'phone',
          type: 'tel',
          pattern: '[/+]{0,1}[0-9]{11}'
        }
      }
    }),
    password: new Field({
      input: {
        label: 'password',
        attributes: {
          class: 'field__input',
          id: 'password',
          type: 'password',
          minlength: '8',
          maxlength: '40',
          required: true,
          disabled,
          name: 'password',
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
        }
      }
    }),
    oldPassword: new Field({
      input: {
        label: 'old password',
        attributes: {
          class: 'field__input',
          id: 'oldPassword',
          type: 'password',
          minlength: '8',
          maxlength: '40',
          required: true,
          disabled,
          name: 'oldPassword',
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
        }
      }
    }),
    newPassword: new Field({
      input: {
        label: 'new password',
        attributes: {
          class: 'field__input',
          id: 'newPassword',
          type: 'password',
          minlength: '8',
          maxlength: '40',
          required: true,
          disabled,
          name: 'newPassword',
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
        }
      }
    }),
    repeatNewPassword: new Field({
      input: {
        label: 'repeat new password',
        attributes: {
          class: 'field__input',
          id: 'repeat-new-password',
          type: 'password',
          minlength: '8',
          maxlength: '40',
          required: true,
          disabled,
          name: 'repeatNewPassword',
          pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'
        }
      }
    }),
    message: new Field({
      input: {
        label: 'message',
        attributes: {
          class: 'message__input',
          id: 'message',
          required: true,
          disabled,
          name: 'message'
        }
      }
    })
  }

  return fields.reduce((previousValue: { [key: string]: any }, currentValue) => {
    previousValue[currentValue] = data[currentValue]
    return previousValue
  }, {})
}

export function getFieldsContent (fields: { [key: string]: any }) {
  const obj: { [key: string]: any } = {}
  Object.keys(fields).forEach((key) => {
    obj[key] = typeof fields[key] !== 'string'
      ? fields[key].getContent()
      : fields[key]
  })
  return obj
}
