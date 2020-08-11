export function getErrorMessage(res: any): string {
  return res.error ? res.error.message : 'Error encountered';
}
