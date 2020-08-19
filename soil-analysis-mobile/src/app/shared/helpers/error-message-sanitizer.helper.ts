export function getSanitizedErrorMessage(res: any): string {
  return res.error ? res.error.message : 'Error encountered';
}
