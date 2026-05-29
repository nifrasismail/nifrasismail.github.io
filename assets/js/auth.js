(function () {
  const HASH = "ca13291769abbe7d6492dcaf567b02a954833e438b2d531bf0b3235ad2e55598";
  const KEY  = "ni_auth";

  async function sha256(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }

  function unlock() {
    const gate = document.getElementById("authGate");
    gate.classList.add("auth-gate--out");
    gate.addEventListener("transitionend", () => gate.remove(), { once: true });
    document.body.style.overflow = "";
  }

  function shake(el) {
    el.classList.remove("auth-shake");
    void el.offsetWidth;
    el.classList.add("auth-shake");
  }

  function init() {
    if (sessionStorage.getItem(KEY) === HASH) { unlock(); return; }

    document.body.style.overflow = "hidden";
    const gate  = document.getElementById("authGate");
    const form  = document.getElementById("authForm");
    const input = document.getElementById("authInput");
    const err   = document.getElementById("authErr");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const h = await sha256(input.value.trim());
      if (h === HASH) {
        sessionStorage.setItem(KEY, h);
        unlock();
      } else {
        err.textContent = "Incorrect password.";
        shake(form);
        input.value = "";
        input.focus();
      }
    });

    gate.style.display = "flex";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
