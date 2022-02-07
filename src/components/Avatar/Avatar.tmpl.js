import './Avatar.scss'

export default ({
  name,
  src = '',
  id,
}) => `
      .form__avatar
        img.form__img(src='${src}')
        label.form__load-label-avatar(for='${id}') Сhange avatar
        input.form__load(
          type='file' 
          id='${id}' 
          name='${name}'
        )`
