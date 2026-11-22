/*
 * Publications list + paper pages ("Folio").
 * - Abs / Bib toggles unfold a panel inside the entry (one open at a time).
 * - BibTeX is fetched from /bibs/ on first open (list) or on load (paper page).
 * - Copy buttons copy the loaded BibTeX, falling back to selecting it.
 * Kept in its own file: the site minifies inline scripts onto one line.
 */
(function () {
  var cache = {};

  function loadBib(url, codeEl) {
    if (!url || !codeEl) return Promise.resolve();
    if (codeEl.getAttribute("data-loaded") === "1") return Promise.resolve();
    var p = cache[url] || (cache[url] = fetch(url, { credentials: "same-origin" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    }));
    return p.then(function (text) {
      codeEl.textContent = text.trim();
      codeEl.setAttribute("data-loaded", "1");
    }).catch(function () {
      codeEl.innerHTML = "";
      var a = document.createElement("a");
      a.href = url;
      a.textContent = "Open the BibTeX file";
      codeEl.appendChild(a);
    });
  }

  function selectText(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function copyFrom(btn) {
    var code = document.getElementById(btn.getAttribute("data-copy"));
    if (!code) return;
    var label = btn.textContent;
    var done = function () {
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = label; }, 1400);
    };
    try {
      navigator.clipboard.writeText(code.textContent).then(done, function () { selectText(code); });
    } catch (e) {
      selectText(code);
    }
  }

  function togglePanel(btn) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    var open = btn.getAttribute("aria-expanded") !== "true";
    var row = btn.parentNode;
    row.querySelectorAll("[aria-controls]").forEach(function (b) {
      b.setAttribute("aria-expanded", "false");
      var other = document.getElementById(b.getAttribute("aria-controls"));
      if (other) other.hidden = true;
    });
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
    if (open && btn.hasAttribute("data-bib")) {
      loadBib(btn.getAttribute("data-bib"), panel.querySelector("code"));
    }
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest(".pub-btn[aria-controls], .pub-copy") : null;
    if (!el) return;
    e.preventDefault();
    if (el.classList.contains("pub-copy")) copyFrom(el);
    else togglePanel(el);
  });

  document.querySelectorAll("[data-bib-autoload]").forEach(function (box) {
    loadBib(box.getAttribute("data-bib-autoload"), box.querySelector("code"));
  });
})();
