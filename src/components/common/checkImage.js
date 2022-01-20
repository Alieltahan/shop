/** Helper function to confirm whether Image exists or not
 * @param {String} url
 * @returns {Boolean}
 */
export function checkIfImageExists(url) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    return true;
  } else {
    img.onload = () => {
      return true;
    };

    img.onerror = () => {
      return false;
    };
  }
}
