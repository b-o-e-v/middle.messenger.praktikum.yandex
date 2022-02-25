export default function checkInputValid (validity: ValidityState, type?: string) {
  const error = (isError: boolean, errorText: string) => {
    return { isError, errorText }
  }
  console.log(type)
  if (validity.valid) {
    return error(false, '')
  } else if (validity.valueMissing) {
    return error(true, 'required field')
  } else if (validity.tooShort) {
    return error(true, 'too short')
  } else if (validity.tooLong) {
    return error(true, 'too long')
  } else if (validity.patternMismatch) {
    switch (type) {
      case 'email':
        return error(true, 'enter email')
      case 'tel':
        return error(true, 'enter the phone number in the format +71234567890')
      default:
        return error(true, 'incorrect format')
    }
  }
}
