document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-hover]').forEach(function(el){
    var raw = el.getAttribute('data-hover');
    var pairs = raw.split(';').map(function(s){return s.trim();}).filter(Boolean).map(function(s){
      var i = s.indexOf(':');
      return [s.slice(0,i).trim(), s.slice(i+1).trim()];
    });
    var originals = pairs.map(function(p){ return el.style.getPropertyValue(p[0]); });
    el.addEventListener('mouseenter', function(){
      pairs.forEach(function(p){ el.style.setProperty(p[0], p[1]); });
    });
    el.addEventListener('mouseleave', function(){
      pairs.forEach(function(p, i){
        if (originals[i]) el.style.setProperty(p[0], originals[i]);
        else el.style.removeProperty(p[0]);
      });
    });
  });
});