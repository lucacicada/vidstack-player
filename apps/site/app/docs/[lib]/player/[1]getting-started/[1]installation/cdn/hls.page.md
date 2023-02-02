---
title: HLS Player Installation (CDN)
description: Instructions to get your HLS player up and running through a CDN.
---

{% step %}

### Register Elements {% slot="title" %}

{% slot name="description" %}
Add the following `link` and `script` tags to register the custom media elements.
{% /slot %}

```html {% copyHighlight=true highlight="4-8" %}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vidstack/styles/base.min.css" />
    <!-- the following styles are optional - remove to go headless -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vidstack/styles/ui/buttons.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vidstack/styles/ui/sliders.min.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/vidstack/dist/cdn/prod.js"></script>
  </head>
  <!-- ... -->
</html>
```

{% /step %}

{% step %}

### Add Player Markup {% slot="title" %}

{% slot name="description" %}
Add the following player HTML boilerplate to get started.
{% /slot %}

```html {% copy=true %}
<!-- remove `controls` attribute if you're designing a custom UI -->
<media-player
  src="https://media-files.vidstack.io/hls/index.m3u8"
  poster="https://media-files.vidstack.io/poster.png"
  controls
>
  <media-outlet></media-outlet>
</media-player>
```

{% /step %}