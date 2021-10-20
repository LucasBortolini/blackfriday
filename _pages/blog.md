---
layout: black
title: Postagens do blog
permalink: /blog
description: Tire as suas dúvidas e fique por dentro de todas as novidades da Black Friday 2021
---

<div class="w-full">
  <div class="flex text-center flex-col align-center">
    <h1 class="uppercase font-bold text-red text-2xl text-md md:text-xl lg:text-4xl">{{ page.title }}</h1>
    <hr class="border self-center border-red w-52 mt-4" />
  </div>
  {% assign post = site.blog.last %}
  <a href="{{ post.url | relative_url }}" class="hover:opacity-80">
    <div class="bg-gray-200 my-8 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <div class="lg:col-span-1">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" />
      </div>
      <div class="lg:col-span-2">
        <h2 class="text-gray-800 text-xl lg:text-2xl">{{ post.title }}</h2>
        <p class="line-clamp-3">{{ post.content }}</p>
      </div>
    </div>
  </a>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {% assign posts = site.blog | reverse %}
    {% for post in posts limit:6 offset:1 %}
      <a href="{{ post.url | relative_url }}" class="col-span-1 hover:opacity-80 h-full">
        <li class="bg-gray-900 grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 h-full">
          <div class="lg:col-span-2">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="object-cover lg:h-full" />
          </div>
          <div class="lg:col-span-3">
            <h2 class="text-white">{{ post.title }}</h2>
            <p class="text-xs text-white line-clamp-3">{{ post.content }}</p>
          </div>
        </li>
      </a>
    {% endfor %}
  </ul>
</div>