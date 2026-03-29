---
permalink: /
title: "Hello!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-container">
  <div class="main-bio" markdown="1">

<div style="line-height: 1.8; font-size: 1.05em;">
I’m a <strong>Postdoctoral Researcher</strong> at <a href="https://cs.au.dk/">University of Aarhus</a> 🇩🇰 in the field of Computer Science.
<br><br>
My research has appeared in venues like IJCAI, CIKM, and Springer Machine Learning, and I’ve been lucky to organize workshops, teach, and collaborate with amazing researchers during my Ph.D. at University of L’Aquila. 🇮🇹
</div>



**Research Interests**
-----

My research is at the intersection of privacy, safety, and machine learning. I work on **Machine Unlearning**: making AI systems selectively forget specific data after training, without retraining from scratch. This is essential for regulatory compliance (e.g. GDPR's right to be forgotten), correcting model misbehavior, and building AI that is trustworthy and accountable. Check out [ERASURE](https://github.com/aiim-research/ERASURE): an open-source, extendible framework that makes unlearning practical and reproducible.

### 🌟 Selected Highlights (among other things)

| Year | Achievement |
|------|--------------|
|2026 | 🏅 Won a Postdoc position at **University of Aarhus** |
| 2026 | 🎓 Defended my Ph.D.! |
| 2025 | 📚 Proceedings Chair for **WSDM 2026** |
| 2025 | 📘 Published at **Springer's Machine Learning Journal** |
| 2025 | 👥 Hosted WIPE-OUT, a Workshop on *Machine Unlearning* at **ECML-PKDD 2025** |
| 2025 | 📘 Published at **IJCAI 2025 Demo**, **CIKM 2025** |
| 2025 | 🌍 Visiting Ph.D. — **University of Aarhus**, Denmark |
| 2024 | 🌍 Held an invited talk on *Machine Unlearning* at **Technical University of Munich** |
| 2024 | 📚 Proceedings Chair for **CIKM 2024** |

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
