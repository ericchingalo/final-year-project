export function getErrorMessage(res: any): string {
  console.log(res);
  return res.error ? res.error.message : 'Error encountered';
}
