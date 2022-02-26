export default `
div.contacts
  .controls
    !=addChat
  !=contacts
div.container
  div.messages
    !=header
    .messages__scroll
      !=messages
  .message__container
    !=message
`
