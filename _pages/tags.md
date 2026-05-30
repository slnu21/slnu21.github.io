---
layout: default
title: 태그
permalink: /tags/
---

<h1 class="page-title">태그</h1>
<p class="page-subtitle">주제별로 글을 모아봤습니다.</p>

{% assign tags = site.tags | sort %}
{% if tags.size == 0 %}
<p class="post-excerpt">아직 태그가 없습니다.</p>
{% else %}

<div class="tags" style="margin-bottom:28px">
  {% for tag in tags %}<a class="tag" href="#{{ tag[0] | slugify }}">{{ tag[0] }} ({{ tag[1].size }})</a>{% endfor %}
</div>

{% for tag in tags %}
<h2 class="sec" id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<div class="archive-list">
  {% for post in tag[1] %}
  <div class="post-row">
    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </div>
  {% endfor %}
</div>
{% endfor %}
{% endif %}
