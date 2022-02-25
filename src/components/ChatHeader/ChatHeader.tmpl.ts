export default `
section.chat-header
  .content
    if avatar
      .avatar
        img(src=avatar)
    else
      .chat-header-item-avatar 
    span=title
    .menu
      !=button
`
