---
layout: default
title: Tags
permalink: /tags
---

{% include page-header.html 
  title="Tags" 
  icon="🏷️"
  subtitle="Browser all topics."
%}

<div class="tag-grid">
   {% assign sorted_tags = site.tags | sort %}
   {% for tag in sorted_tags %}
     <a class="tag-box" href="/tags/{{ tag[0] }}">
       <span>{{ tag[0] }}</span>
       <small>{{ tag[1].size }} posts</small>
     </a>
   {% endfor %}
</div>