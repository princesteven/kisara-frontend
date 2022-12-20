/**
 * @function
 * @name b64toBlob
 * @description Convert a base64 string in a Blob according to the data and contentType.
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain - application/json etc.)
 * @param sliceSize sliceSize {Int} SliceSize to process the byteCharacters
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Blob
 */
export const b64toBlob = (b64Data:string, contentType:string, sliceSize?:number) => {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, {type: contentType});
}
