---
layout: default
title: 검색
permalink: /search/
---

<h1 class="page-title">검색</h1>
<p class="page-subtitle">제목 · 요약 · 본문 · 태그에서 찾습니다.</p>

<input type="search" id="search-input" class="search-input"
       placeholder="검색어를 입력하세요…" autocomplete="off" autofocus>

<p id="search-status" class="search-status"></p>
<div id="search-results" class="post-list"></div>

<script src="{{ '/assets/js/search-init.js' | relative_url }}"
        data-json="{{ '/search.json' | relative_url }}"></script>
