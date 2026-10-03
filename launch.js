'use strict';
(() => {
  const target = new URL('https://script.google.com/macros/s/AKfycbxMCN0Lw1kdPqfw3uiaue-29NnmwKXvY9VuiXcSWdelEWNDulPxR0o9RRPmqynuBaWT/exec');
  const params = new URLSearchParams(location.search);
  for (const key of ['role','page','entry','id','source_year','realm']) {
    const value = params.get(key);
    if (value && value.length <= 200 && !/[\u0000-\u001f\u007f]/.test(value)) target.searchParams.set(key, value);
  }
  document.getElementById('original-open').href = target.href;
  const standalone = navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
  if (params.get('install') !== '1' || standalone) window.location.replace(target.href);
})();
