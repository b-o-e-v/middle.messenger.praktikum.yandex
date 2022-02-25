export default `
div.contacts
  .controls
    !=addChat
  !=contacts
div.container
  div.messages
    !=header
    .messages
      !=messages
  .message__container
    !=message
`
