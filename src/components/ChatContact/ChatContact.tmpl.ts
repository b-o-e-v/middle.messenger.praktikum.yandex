export default `
.chat__contacts-item
  if avatar
    .avatar
      img(src=avatar)
  else
    .chat__contacts-item-avatar
      div
  .chat__contacts-item-info
    .info-name=name
    .info-message-preview=preview
    .info-time=time
    .info-counter=count
`
