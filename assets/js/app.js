/* ============================================================
   APP — rendering + cinematic motion
   ============================================================ */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  if (!hasGSAP) document.body.classList.add("no-gsap");

  /* ---------- RENDER: stats ---------- */
  $("#statsGrid").innerHTML = D.stats.map(s => `
    <div class="stat" data-reveal>
      <div class="stat__num" data-count="${s.value}" data-prefix="${s.prefix || ""}" data-suffix="${s.suffix || ""}">${s.prefix || ""}0${s.suffix || ""}</div>
      <div class="stat__label">${s.label}</div>
    </div>`).join("");

  /* ---------- RENDER: about (word-by-word) ---------- */
  $("[data-words]").innerHTML = D.profile.summary
    .split(" ").map(w => `<span class="word">${w}</span>`).join(" ");

  /* ---------- RENDER: timeline ---------- */
  const track = $("#timelineTrack");
  D.timeline.forEach(t => {
    const node = document.createElement("div");
    node.className = "t-node";
    node.innerHTML = `
      <span class="t-node__dot"></span>
      <div class="t-node__card">
        ${t.current ? `<span class="t-node__badge">PRESENT</span><br>` : ""}
        <div class="t-node__year">${t.year}</div>
        <div class="t-node__blueprint">${t.blueprint}</div>
        <div class="t-node__role">${t.role}</div>
        <div class="t-node__company">${t.company} <span class="t-node__place">· ${t.place} · ${t.span}</span></div>
        <p class="t-node__desc">${t.desc}</p>
        <div class="t-node__tags">${t.tags.map(x => `<span class="t-tag">${x}</span>`).join("")}</div>
      </div>`;
    track.appendChild(node);
  });

  /* ---------- RENDER: AI projects ---------- */
  $("#projectsGrid").innerHTML = D.aiProjects.map((p, i) => `
    <article class="p-card" data-reveal>
      <span class="p-card__num">0${i + 1}</span>
      <div class="p-card__icon">${p.icon}</div>
      <h3 class="p-card__name">${p.name}</h3>
      <div class="p-card__kind">${p.kind}</div>
      <p class="p-card__desc">${p.desc}</p>
      <div class="p-card__stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </article>`).join("");

  // hover spotlight
  $$(".p-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  /* ---------- RENDER: skills ---------- */
  $("#skillsGrid").innerHTML = D.skills.map(s => `
    <div class="skill-block" data-reveal>
      <div class="skill-block__h">${s.group}</div>
      <div class="skill-block__tags">${s.items.map(i => `<span>${i}</span>`).join("")}</div>
    </div>`).join("");

  /* ---------- RENDER: awards + education ---------- */
  $("#awardsList").innerHTML = D.awards.map(a =>
    `<li data-reveal><strong>${a.title}</strong><span>${a.detail}</span></li>`).join("");
  const e = D.education;
  $("#eduBox").innerHTML = `
    <h4>${e.degree}</h4>
    <p>${e.school}</p>
    <p class="edu-span">${e.span}</p>
    <p style="margin-top:14px">${e.detail}</p>`;

  $("#year").textContent = new Date().getFullYear();

  /* ---------- NAV ---------- */
  const nav = $("#nav");
  $("#burger").addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav__links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  /* ---------- SCROLL PROGRESS + nav shrink ---------- */
  const bar = $("#progressBar");
  function onScroll() {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (p * 100) + "%";
    nav.classList.toggle("shrink", h.scrollTop > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- PARTICLE / NEURAL CANVAS ---------- */
  (function particles() {
    if (reduced) return;
    const c = $("#particles"), ctx = c.getContext("2d");
    let w, h, pts, raf;
    const COUNT = window.innerWidth < 700 ? 34 : 70;
    function resize() {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
    }
    function init() {
      pts = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,.65)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${(1 - dist / 140) * .18})`;
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }
    resize(); init(); frame();
    window.addEventListener("resize", () => { resize(); init(); });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else frame();
    });
  })();

  /* ---------- COUNTERS ---------- */
  function animateCount(el) {
    const target = +el.dataset.count;
    const prefix = el.dataset.prefix || "", suffix = el.dataset.suffix || "";
    const dur = 1600; const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(eased * target);
      el.textContent = prefix + val + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- GSAP MOTION ---------- */
  function initMotion() {
    if (!hasGSAP || reduced) {
      // ensure everything visible without GSAP
      $$("[data-reveal]").forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
      $$(".about__text .word").forEach(w => w.classList.add("lit"));
      $$("[data-count]").forEach(animateCount);
      $$(".t-node").forEach(n => n.classList.add("in"));
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // hero intro
    gsap.from(".hero__title .line", { yPercent: 110, opacity: 0, stagger: .12, duration: 1, ease: "power4.out", delay: .2 });

    // generic reveals
    $$("[data-reveal]").forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: .9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });

    // hero reveal items (they live above fold — fire on load)
    gsap.to(".hero [data-reveal]", { opacity: 1, y: 0, duration: 1, stagger: .12, ease: "power3.out", delay: .5 });

    // counters
    $$("[data-count]").forEach(el => {
      ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => animateCount(el) });
    });

    // about word illumination
    const words = $$(".about__text .word");
    ScrollTrigger.create({
      trigger: ".about__text", start: "top 75%", end: "bottom 60%", scrub: true,
      onUpdate: self => {
        const lit = Math.floor(self.progress * words.length);
        words.forEach((w, i) => w.classList.toggle("lit", i <= lit));
      }
    });

    // timeline fill draws with scroll
    gsap.to("#timelineFill", {
      height: "100%", ease: "none",
      scrollTrigger: { trigger: "#timelineTrack", start: "top 60%", end: "bottom 80%", scrub: .5 }
    });

    // timeline nodes pop in
    $$(".t-node").forEach(n => {
      gsap.from(n, {
        opacity: 0, y: 60, duration: .9, ease: "power3.out",
        scrollTrigger: { trigger: n, start: "top 82%" }
      });
      ScrollTrigger.create({ trigger: n, start: "top 70%", end: "bottom 60%",
        onToggle: self => n.classList.toggle("in", self.isActive) });
    });

    // parallax drift on grid backdrop
    gsap.to(".grid-bg", {
      backgroundPositionY: "120px", ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true }
    });

    // section headers subtle parallax
    $$(".section-head__title").forEach(t => {
      gsap.from(t, { letterSpacing: "0.08em", duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: t, start: "top 85%" } });
    });
  }

  /* ---------- PRELOADER → boot ---------- */
  function boot() {
    initMotion();
    if (hasGSAP) ScrollTrigger.refresh();
  }
  window.addEventListener("load", () => {
    const pre = $("#preloader");
    setTimeout(() => {
      pre.classList.add("done");
      boot();
    }, reduced ? 0 : 900);
  });
  // safety: if load already fired
  if (document.readyState === "complete") {
    $("#preloader").classList.add("done"); boot();
  }
})();
