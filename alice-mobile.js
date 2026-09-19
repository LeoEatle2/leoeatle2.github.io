;(function(){
  var ALICE_MOBILE_SCRIPT='/alice-mobile.js';
  if(!window.matchMedia || !window.matchMedia('(max-width:480px)').matches) return;
  if(!/^\/alice\/?$/.test(location.pathname)) return;

  var styleDone=false;
  function injectStyle(){
    if(styleDone || document.querySelector('style[data-alice-mobile]')) return;
    styleDone=true;
    fetch('/alice-mobile.css?v=20260919-mobile-lift', {cache:'no-store'})
      .then(function(res){ return res.ok ? res.text() : ''; })
      .then(function(css){
        if(!css || document.querySelector('style[data-alice-mobile]')) return;
        var st=document.createElement('style');
        st.setAttribute('data-alice-mobile','1');
        st.textContent=css;
        document.body.appendChild(st);
      })
      .catch(function(){ styleDone=false; });
  }

  var tries=0;
  function applyAliceMobile(){
    tries++;
    injectStyle();
    if(!window.Reveal || !Reveal.isReady || !Reveal.isReady()){
      if(tries < 80) return setTimeout(applyAliceMobile, 50);
      return;
    }
    Reveal.configure({
      width:390,
      height:844,
      margin:0,
      minScale:0.2,
      maxScale:1.25,
      mobileViewDistance:2,
      scrollActivationWidth:0
    });
    if(Reveal.layout) Reveal.layout();
    var hint=document.querySelector('.cover .hint');
    if(hint) hint.innerHTML='<span>左右滑动切换章节</span><span>上下滑动查看本章细节</span><span>点右下角箭头也可以翻页</span>';
  }
  applyAliceMobile();
})();
