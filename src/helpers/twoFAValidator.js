export function twoFAValidator(twoFA) {
  if (!twoFA) return "2FA can't be empty."
  if (twoFA.length < 6) return '2FA must be at least 6 characters long.'
  return ''
}
