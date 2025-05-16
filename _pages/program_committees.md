---
title: "Program Committees"
layout: gridlay
sitemap: false
permalink: /pcs/
years: [2016, 2017, 2018, 2019, 2020, 2021]
---

<style>
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style>

{% if site.data.ProgramCommittees %}

<div class="jumbotron">
  <h3>Event Organization</h3>
  <ul>
    {% for pc in site.data.Chairs %}
      <li>{{ pc.name }}, {{pc.role}}</li>
    {% endfor %}
  </ul>
</div>

<div class="jumbotron">
  <h3>Program Committees</h3>
  <ul>
    {% for pc in site.data.ProgramCommittees %}
      <li>{{ pc.name }}, {{pc.role}}</li>
    {% endfor %}
  </ul>
</div>

{% endif %}