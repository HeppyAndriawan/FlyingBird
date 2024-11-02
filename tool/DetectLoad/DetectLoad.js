import $ from "jquery";

export const DetectLoad = function (selector, callback) {
  if ($(selector).length) {
    callback();
  } else {
    setTimeout(function () {
      DetectLoad(selector, callback);
    }, 100);
  }
};
