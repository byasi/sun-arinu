const progress = document.getElementById('progress');
if (progress) { window.addEventListener('scroll', () => { const h = document.documentElement; const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100; progress.style.width = p + '%'; }) }
const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in', 'visible'); } }) }, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const cio = new IntersectionObserver((entries) => { entries.forEach(en => { if (!en.isIntersecting) return; const el = en.target; const target = parseFloat(el.dataset.count); const isDec = (el.dataset.count.indexOf('.') > -1); let cur = 0; const step = target / 50; const t = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = isDec ? cur.toFixed(1) : Math.floor(cur); }, 24); cio.unobserve(el); }) }, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
document.querySelectorAll('.tab-btn, .event-tab button').forEach(btn => { btn.addEventListener('click', () => { const target = btn.dataset.tab; const parent = btn.parentElement.parentElement; parent.querySelectorAll('.tab-btn, .event-tab button').forEach(b => b.classList.remove('active')); parent.querySelectorAll('.tab-panel, .event-list-panel').forEach(p => p.classList.remove('active')); btn.classList.add('active'); const panel = document.getElementById(target); if (panel) panel.classList.add('active'); }) });
const form = document.getElementById('applyForm'); const btn = document.getElementById('submitBtn');
if (form && btn) { form.addEventListener('submit', () => { btn.disabled = true; btn.textContent = 'Sending...'; }) }
if (window.location.hash === '#applied') { const success = document.getElementById('successMsg'); if (success) { success.classList.add('show'); } const apply = document.getElementById('apply'); if (apply) { apply.scrollIntoView({ behavior: 'smooth' }); } }
document.querySelectorAll('.gitem').forEach(item => { item.addEventListener('click', () => { const img = item.querySelector('img'); if (!img) return; const box = document.createElement('div'); box.style.cssText = 'position:fixed;inset:0;background:rgba(11,58,30,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:40px;cursor:zoom-out;'; const bigImg = document.createElement('img'); bigImg.src = img.src; bigImg.style.cssText = 'max-width:100%;max-height:100%;object-fit:contain;box-shadow:0 30px 60px rgba(0,0,0,0.5);'; box.appendChild(bigImg); box.addEventListener('click', () => box.remove()); document.body.appendChild(box); }) });
document.querySelectorAll('.plogo .logo-img, .inst .logo-img').forEach(img => { const parent = img.parentElement; img.addEventListener('error', () => parent.classList.add('no-logo'), { once: true }); img.addEventListener('load', () => parent.classList.remove('no-logo')); if (!img.getAttribute('src') || (img.complete && img.naturalWidth === 0)) { parent.classList.add('no-logo'); } });
// Mobile hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}