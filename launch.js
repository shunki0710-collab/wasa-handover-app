'use strict';
(() => {
  const target = new URL('https://script.google.com/macros/s/AKfycbxMCN0Lw1kdPqfw3uiaue-29NnmwKXvY9VuiXcSWdelEWNDulPxR0o9RRPmqynuBaWT/exec');
  const params = new URLSearchParams(location.search);
  for (const key of ['role','page','entry','id','source_year','realm']) {
    const value = params.get(key);
    if (value && value.length <= 200 && !/[\u0000-\u001f\u007f]/.test(value)) target.searchParams.set(key, value);
  }
  document.getElementById('original-open').href = target.href;
  target.searchParams.set('app', '1');
  const frame = document.getElementById('app');
  const isAppMessage = event => {
    try {
      const host = new URL(event.origin).hostname;
      return event.origin.startsWith('https://') && (host === 'script.googleusercontent.com' || host.endsWith('-script.googleusercontent.com')) && event.source && event.source.top === window;
    } catch { return false; }
  };
  let timeout;
  window.addEventListener('message', event => {
    if (!isAppMessage(event) || !event.data) return;
    if (event.data.type === 'wasa:host-request' && typeof event.data.nonce === 'string' && event.data.nonce.length > 0 && event.data.nonce.length <= 120) {
      event.source.postMessage({type:'wasa:host-approved', nonce:event.data.nonce}, event.origin);
    } else if (event.data.type === 'wasa:ready') {
      clearTimeout(timeout);
      document.body.classList.add('ready');
    }
  });
  timeout = setTimeout(() => {
    document.getElementById('load-state').textContent = '読み込みに時間がかかっています';
  }, 25000);
  frame.src = target.href;
})();
