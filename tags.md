---
layout: default
title: Tags
permalink: /tags
---

<div class="container">
  <h1 class="home-title">📚 Tags</h1>
  <p class="home-subtitle">Explore the journal subjects</p>

  <div class="tag-grid">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      <a class="tag-box" href="/tag/{{ tag[0] }}/">
        <span>{{ tag[0] }}</span>
        <small>{{ tag[1].size }} posts</small>
      </a>
    {% endfor %}
  </div>
</div>