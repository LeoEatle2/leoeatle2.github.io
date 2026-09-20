const fs = require('fs');
const path = require('path');

const ALICE_MOBILE_INLINE = ";(function(){\n  var ALICE_MOBILE_SCRIPT='/alice-mobile.js';\n  if(!window.matchMedia || !window.matchMedia('(max-width:480px)').matches) return;\n  if(!/^\\/alice\\/?$/.test(location.pathname)) return;\n\n  var styleDone=false;\n  function injectStyle(){\n    if(styleDone || document.querySelector('style[data-alice-mobile]')) return;\n    styleDone=true;\n    fetch('/alice-mobile.css?v=20260919-mobile-lift', {cache:'no-store'})\n      .then(function(res){ return res.ok ? res.text() : ''; })\n      .then(function(css){\n        if(!css || document.querySelector('style[data-alice-mobile]')) return;\n        var st=document.createElement('style');\n        st.setAttribute('data-alice-mobile','1');\n        st.textContent=css;\n        document.body.appendChild(st);\n      })\n      .catch(function(){ styleDone=false; });\n  }\n\n  var tries=0;\n  function applyAliceMobile(){\n    tries++;\n    injectStyle();\n    if(!window.Reveal || !Reveal.isReady || !Reveal.isReady()){\n      if(tries < 80) return setTimeout(applyAliceMobile, 50);\n      return;\n    }\n    Reveal.configure({\n      width:390,\n      height:844,\n      margin:0,\n      minScale:0.2,\n      maxScale:1.25,\n      mobileViewDistance:2,\n      scrollActivationWidth:0\n    });\n    if(Reveal.layout) Reveal.layout();\n    var hint=document.querySelector('.cover .hint');\n    if(hint) hint.innerHTML='<span>\\u5de6\\u53f3\\u6ed1\\u52a8\\u5207\\u6362\\u7ae0\\u8282</span><span>\\u4e0a\\u4e0b\\u6ed1\\u52a8\\u67e5\\u770b\\u672c\\u7ae0\\u7ec6\\u8282</span><span>\\u70b9\\u53f3\\u4e0b\\u89d2\\u7bad\\u5934\\u4e5f\\u53ef\\u4ee5\\u7ffb\\u9875</span>';\n  }\n  applyAliceMobile();\n})();\n";

hexo.extend.filter.register('before_exit', function () {
  const aliceFile = path.join(this.public_dir, 'alice', 'index.html');
  if (!fs.existsSync(aliceFile)) return;

  const html = fs.readFileSync(aliceFile, 'utf8');
  if (html.includes('data-alice-mobile-inline')) return;

  const patched = html.replace('</body>', '<script data-alice-mobile-inline="1">' + ALICE_MOBILE_INLINE + '</script></body>');
  fs.writeFileSync(aliceFile, patched);
}, 20);
