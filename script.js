// Hero gallery rotator
(function(){
  const slides = document.querySelectorAll('#heroGallery .gallery-slide');
  const dotsEl = document.getElementById('heroDots');
  let cur = 0;
  slides.forEach((_,i)=>{
    const d = document.createElement('button');
    d.className='gallery-dot'+(i===0?' active':'');
    d.setAttribute('aria-label','Go to slide '+(i+1));
    d.onclick=()=>go(i);
    dotsEl.appendChild(d);
  });
  function go(n){
    slides[cur].classList.remove('active');
    dotsEl.children[cur].classList.remove('active');
    cur=n;
    slides[cur].classList.add('active');
    dotsEl.children[cur].classList.add('active');
  }
  setInterval(()=>go((cur+1)%slides.length),3800);
})();

// Year tabs
(function(){
  const tabs = document.querySelectorAll('.ytab');
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      const y = tab.dataset.year;
      document.querySelectorAll('.ytab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.year-pane').forEach(p=>p.classList.remove('visible'));
      tab.classList.add('active');
      document.getElementById('pane-'+y).classList.add('visible');
    });
  });
})();
