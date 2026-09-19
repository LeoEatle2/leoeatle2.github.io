const fs = require('fs');
const path = require('path');

const ALICE_MOBILE_LOADER = ";(function(){\n  if(!window.matchMedia || !window.matchMedia('(max-width:480px)').matches) return;\n  if(!/^\\/alice\\/?$/.test(location.pathname)) return;\n  function loadAliceMobile(){\n    if(document.querySelector('script[data-alice-mobile-loader]')) return;\n    var s=document.createElement('script');\n    s.setAttribute('data-alice-mobile-loader','1');\n    s.src='/alice-mobile.js?v=20260919-mobile-lift';\n    s.async=true;\n    document.body.appendChild(s);\n  }\n  if(document.body) loadAliceMobile();\n  else document.addEventListener('DOMContentLoaded', loadAliceMobile);\n})();\n";

hexo.extend.filter.register('before_exit', function () {
  const registerFile = path.join(this.public_dir, 'sw-register.js');
  if (fs.existsSync(registerFile)) {
    const current = fs.readFileSync(registerFile, 'utf8');
    if (!current.includes('data-alice-mobile-loader')) {
      fs.appendFileSync(registerFile, '\n' + ALICE_MOBILE_LOADER + '\n');
    }
  }

  const aliceFile = path.join(this.public_dir, 'alice', 'index.html');
  if (!fs.existsSync(aliceFile)) return;

  const html = fs.readFileSync(aliceFile, 'utf8');
  if (html.includes('/alice-mobile.js')) return;

  const patched = html.replace('</body>', '<script async src="/alice-mobile.js?v=20260919-mobile-lift"></script></body>');
  fs.writeFileSync(aliceFile, patched);
}, 20);
