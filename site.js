document.addEventListener('DOMContentLoaded',()=>{const t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');if(t&&n)t.addEventListener('click',()=>{n.classList.toggle('open');t.setAttribute('aria-expanded',n.classList.contains('open')?'true':'false')});document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());const f=document.querySelector('[data-contact-form]');

if(f){
  f.addEventListener('submit',e=>{
    e.preventDefault();

    const phone=f.dataset.phone;
    const v=new FormData(f);

    const message=
      `Hi Mandarin Loop!\n\n`+
      `Name: ${v.get('name')}\n`+
      `Email: ${v.get('email')}\n\n`+
      `Message: ${v.get('message')}`;

    const url=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url,'_blank');
  });
}})});
