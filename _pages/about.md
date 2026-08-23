---
permalink: /
title: "Hello!"
description: "Andrea D'Angelo — DDSA Postdoc at Aarhus University working on Machine Unlearning, Trustworthy AI, and GDPR right to be forgotten. Creator of the ERASURE framework. Published at IJCAI, CIKM, Springer Machine Learning."
keywords: "Andrea D'Angelo, Andrea D Angelo, machine unlearning, trustworthy AI, GDPR right to be forgotten, privacy-preserving machine learning, ERASURE framework, Aarhus University"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-container">
  <div class="main-bio" markdown="1">

<div style="line-height: 1.8; font-size: 1.05em;">
I’m a <strong>DDSA Postdoc</strong> at <a href="https://cs.au.dk/">Aarhus University</a> 🇩🇰, working on <strong>Robust Graph Unlearning</strong>.
<br><br>
My research focuses on <strong>Privacy-Preserving Machine Learning</strong> and <strong>Machine Unlearning</strong>. I have published papers at EMNLP, IJCAI, CIKM, and Springer’s Machine Learning, among others.
</div>

<div class="highlight-card-wrap">
<a class="highlight-card" href="https://cs.au.dk/news-events/news/show-news/artikel/ddsa-postdoc-fellowship-for-andrea-dangelo" target="_blank" rel="noopener"><span class="highlight-rail"></span><img class="au-seal-light" src="images/au-logo-inv.svg" alt="Aarhus University"><img class="au-seal-dark" src="images/au-logo.svg" alt="Aarhus University"><span class="highlight-body"><span class="highlight-kicker">News · June 2026</span><span class="highlight-title">DDSA Postdoc Fellowship for Andrea D’Angelo</span><span class="highlight-sub">Aarhus University · Dept. of Computer Science</span><span class="highlight-cta">Read the article <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span></a>
</div>

### 🌟 Selected Highlights (among other things)

| Year | Achievement |
|------|--------------|
| 2026 | 📘 Published at **EMNLP 2026 Findings** |
|2026 | 🏅 Awarded a **DDSA Postdoc** grant on *Robust Graph Unlearning* (Danish Data Science Academy) |
| 2026 | 📘 Published in **Springer's Machine Learning Journal**, ECML-PKDD 2026 Journal track |
|2026 | 🏅 Won a Postdoc position at **University of Aarhus** |
| 2026 | 🎓 Defended my Ph.D. **cum Laude** with **Doctor Europaeus** distinction! |
| 2025 | 📘 Published in **Springer's Machine Learning Journal** |
| 2025 | 👥 Hosted WIPE-OUT, a Workshop on *Machine Unlearning* at **ECML-PKDD 2025** |
| 2025 | 📘 Published at **IJCAI 2025 Demo**, **CIKM 2025** |
| 2025 | 🌍 Visiting Ph.D. — **University of Aarhus**, Denmark |

**Projects**
-----

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem;">

  <div style="display: flex; align-items: center; gap: 1.2rem; padding: 0.9rem 1.2rem; border: 1px solid #ddd; border-radius: 10px;">
    <a href="https://aiimlab.org/events/ECML_PKDD_2026_WIPE-OUT_2_Workshop_on_Machine_Unlearning_and_Privacy_Preservation" target="_blank" style="flex-shrink: 0;">
      <img src="images/WIPE-OUT.png" alt="WIPE-OUT" style="height:70px; width:auto;">
    </a>
    <div>
      <strong>WIPE-OUT 2</strong> — Workshop on Machine Unlearning and Privacy Preservation, <span style="font-size: 0.92em;">To be held at <strong>ECML-PKDD 2026</strong>. <a href="https://aiimlab.org/events/ECML_PKDD_2026_WIPE-OUT_2_Workshop_on_Machine_Unlearning_and_Privacy_Preservation" target="_blank">View Website →</a> </span>
    </div> 
  </div>

  <div style="display: flex; align-items: center; gap: 1.2rem; padding: 0.9rem 1.2rem; border: 1px solid #ddd; border-radius: 10px;">
    <a href="https://github.com/aiim-research/ERASURE" target="_blank" style="flex-shrink: 0;">
      <img src="images/ERASURE_LOGO.png" alt="ERASURE" style="height:70px; width:auto;">
    </a>
    <div>
      <strong>ERASURE</strong> — Extendible Machine Unlearning Framework<br>
      <span style="font-size: 0.92em;">An open-source framework for Machine Unlearning research. <a href="https://github.com/aiim-research/ERASURE" target="_blank">View on GitHub →</a></span>
    </div>
  </div>

</div>

**Selected Publications**
-----

{% assign selected_pubs = site.publications | where: "selected", true | sort: "date" | reverse %}
{% for post in selected_pubs %}
<div style="margin-bottom: 0.6rem;">
  {% if post.tier %}<span class="pub-tier {{ post.tier | replace: '*','star' | downcase }}">{{ post.tier }}</span>{% endif %}
  {% if post.quartile %}<span class="pub-quartile {{ post.quartile | downcase }}">{{ post.quartile }}</span>{% endif %}
  <a href="{{ post.paperurl | default: post.url }}">{{ post.title }}</a><br>
  <span style="font-size: 0.85em; color: var(--text-muted);">{{ post.venue }} &middot; <strong>{{ post.date | date: "%Y" }}</strong></span>
</div>
{% endfor %}
<p style="font-size: 0.85em;"><a href="/publications/">View all publications →</a></p>
