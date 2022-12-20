export const userIdentifier = (username: string) => {
  return username
    .split(' ')
    .map(word => word[0])
    .join('');
}
