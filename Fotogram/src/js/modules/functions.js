export function isWebp() {
  function testWebp(callback) {
    const webp = new Image()
    webp.onLoad = webp.onError = function () {
      callback(webp.height == 2);
    }
    // webp.src = ''
  }
  testWebp(function (support){
    const className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className)
  })
}