export function debounce(method, delay) {
  let timer = null;
  return function() {
    let that = this
    let args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      method.apply(that, args);
    }, delay);
  };
}
