/**
 * @function
 * @name blobTob64
 * @description Function to convert blob file i.e image etc to base 64
 * @param blob The blob image
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns String
 */

export const blobTob64 = (blob: any) => {
  if (!blob) {
    return ''
  }
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
