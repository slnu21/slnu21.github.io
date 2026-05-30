---
layout: default
title: 카테고리
permalink: /categories/
---

<h1 class="page-title">카테고리</h1>
<p class="page-subtitle">주제별 · 시리즈별로 글을 모아봤습니다.</p>

<!-- 시리즈 모음 -->
{% assign series_list = site.posts | map: "series" | compact | uniq | sort %}
{% if series_list.size > 0 %}
<h2 class="sec">📚 시리즈</h2>
{% for s in series_list %}
  {% assign sp = site.posts | where: "series", s | sort: "date" %}
  <h3 class="series-title" id="series-{{ s | slugify }}">{{ s }} <span class="count">({{ sp.size }}편)</span></h3>
  <div class="archive-list">
    {% for post in sp %}
    <div class="post-row">
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </div>
    {% endfor %}
  </div>
{% endfor %}
{% endif %}

<!-- 카테고리 모음 -->
{% assign cats = site.categories | sort %}
{% if cats.size > 0 %}
<h2 class="sec">🗂 카테고리</h2>
<div class="tags" style="margin-bottom:24px">
  {% for cat in cats %}<a class="tag" href="#cat-{{ cat[0] | slugify }}">{{ cat[0] }} ({{ cat[1].size }})</a>{% endfor %}
</div>
{% for cat in cats %}
<h3 class="series-title" id="cat-{{ cat[0] | slugify }}">{{ cat[0] }} <span class="count">({{ cat[1].size }})</span></h3>
<div class="archive-list">
  {% for post in cat[1] %}
  <div class="post-row">
    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
  {% endfor %}
</div>
{% endfor %}
{% endif %}

{% if cats.size == 0 and series_list.size == 0 %}
<p class="post-excerpt">아직 분류된 글이 없습니다.</p>
{% endif %}
