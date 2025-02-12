---
layout: page
title: Contact
tagline: Know more about the site's author
ref: contact
order: 1
---
> **Komunikasi adalah _koentji!_** Oleh sebabnya, saya sediakan ID social media kepada anda bila anda ingin chat dengan saya. Tenang, saya ini bukanlah penulis dari goa hantu kok :satisfied:

Let you know more with me with my social media account/partner site below:

<link rel="stylesheet" href="{{ '/assets/css/socialmedia.css?v=' | append: site.github.build_revision | absolute_url }}">

<div class="contact">
  <!-- Github icon -->
  <span class="social-media github tooltip">
    <a href="{{ site.github.owner_url }}" aria-label="{{ site.github.owner_name }}'s GitHub" title="{{ site.github.owner_name }}'s GitHub">
      <span class="tooltiptext">GitHub</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
  </span>

  <!-- Twitter/X icon -->
  {% if site.twitter %}
  <span class="social-media twitter tooltip">
    <a href="https://x.com/{{ site.twitter.username }}" aria-label="{{ site.github.owner_name }}'s X/Twitter" title="{{ site.github.owner_name }}'s X/Twitter">
      <span class="tooltiptext">X/Twitter</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="4rem" height="4rem" viewBox="0 0 256 256" fill-rule="evenodd" clip-rule="evenodd">
        <g stroke-miterlimit="10" stroke-width="0">
          <path d="m72 66 92 124h20L91 66z"/>
          <path d="M128 1a126 126 0 1 0 0 253 126 126 0 0 0 0-253zm31 199-42-57-52 57H51l60-65-59-79h45l39 52 48-52h13l-55 60 62 84h-45z"/>
        </g>
      </svg>
    </a>
  </span>
  {% endif %}

  <!-- Instagram icon -->
  {% if site.instagram %}
  <span class="social-media instagram tooltip">
    <a href="https://instagram.com/{{ site.instagram.username }}" aria-label="{{ site.github.owner_name }}'s Instagram" title="{{ site.github.owner_name }}'s Instagram">
      <span class="tooltiptext">Instagram</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24">
        <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
      </svg>
    </a>
  </span>
  {% endif %}

  <!-- Linkedin icon -->
  {% if site.linkedin %}
  <span class="social-media linkedin tooltip">
    <a href="https://linkedin.com/in/{{ site.linkedin.username }}" aria-label="{{ site.github.owner_name }}'s Linkedin" title="{{ site.github.owner_name }}'s Linkedin">
      <span class="tooltiptext">Linkedin</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24">
        <path d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM9 9H6v9h3Zm.1-3c0-1-.7-1.7-1.6-1.7-1 0-1.6.8-1.6 1.7 0 1 .7 1.7 1.6 1.7 1 0 1.6-.8 1.6-1.7Zm10.4 7c0-5-4.7-4.8-6-2.4V9h-3v9h3v-4.3c0-2.6 3-2.8 3 0V18h3Z"/>
      </svg>
    </a>
  </span>
  {% endif %}

  <!-- Telegram icon -->
  <span class="social-media telegram tooltip">
    <a href="https://telegram.me/akmalrusli363" aria-label="{{ site.github.owner_name }}'s Telegram" title="{{ site.github.owner_name }}'s Telegram">
      <span class="tooltiptext">Telegram</span>
      <svg class="social-media-svg" width="4rem" height="4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="telegram-4"
          d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z" />
        </svg>
    </a>
  </span>

  <!-- LINE icon -->
  <span class="social-media line-app tooltip">
    <a href="line://ti/p/akmal_rusli" aria-label="{{ site.github.owner_name }}'s LINE" title="{{ site.github.owner_name }}'s LINE">
      <span class="tooltiptext">LINE</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm7 11.681c0-3.133-3.14-5.681-7-5.681s-7 2.548-7 5.681c0 2.808 2.49 5.159 5.854 5.604.228.049.538.15.617.345.071.177.046.454.022.633l-.099.599c-.031.177-.141.692.606.378.747-.315 4.031-2.374 5.5-4.064 1.014-1.113 1.5-2.242 1.5-3.495zm-9.606 1.808h-1.961l-.095-.038-.001-.001-.003-.003-.038-.094v-3.05c0-.075.061-.136.137-.136h.491c.075 0 .136.061.136.136v2.422h1.334c.075.001.136.062.136.137v.491c0 .075-.061.136-.136.136zm7.275 0h-1.962l-.094-.038-.004-.004-.038-.094v-3.05l.038-.094.004-.004.094-.038h1.962c.075 0 .136.061.136.136v.491c0 .076-.061.137-.136.137h-1.334v.515h1.334c.075 0 .136.061.136.137v.491c0 .075-.061.136-.136.136h-1.334v.515h1.334c.075.001.136.062.136.137v.491c0 .075-.061.136-.136.136zm-6.091 0h-.491c-.076 0-.137-.061-.137-.136v-3.05c0-.075.061-.136.137-.136h.491c.075 0 .136.061.136.136v3.05c0 .075-.061.136-.136.136zm1.241 0h-.491c-.075 0-.137-.061-.137-.136v-3.05c0-.075.062-.136.137-.136h.491l.012.001.013.001.007.002.013.004.005.001.012.006.011.006.007.005.014.011.009.01.01.013 1.398 1.888v-1.812c0-.075.061-.136.136-.136h.491c.076 0 .137.061.137.136v3.05c0 .075-.061.136-.137.136h-.491l-.035-.004-.002-.001-.013-.004-.007-.003-.01-.005-.008-.006-.002-.001-.034-.033-1.4-1.89v1.811c0 .075-.061.136-.136.136z" />
        </svg>
    </a>
  </span>

  <!-- Medium icon -->
  {% if site.medium %}
  <span class="social-media medium tooltip">
    <a href="https://medium.com/@{{ site.medium.username }}" aria-label="{{ site.github.owner_name }}'s Medium Blogposts" title="{{ site.github.owner_name }}'s Medium">
      <span class="tooltiptext">Medium</span>
      <svg class="social-media-svg" xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z" />
        </svg>
    </a>
  </span>
  {% endif %}
</div>

Feel free to ask & contact me, mainly at:

- GitHub: [akmalrusli363](https://github.com/akmalrusli363)
- LINE: [akmal_rusli](line://ti/p/akmal_rusli)
- Instagram: [@akmalr363](https://instagram.com/akmalr363)
- Twitter/X: [@akmal_rusli](https://twitter.com/akmal_rusli) _(inactive :zzz:)_
- Telegram: [@akmalrusli363](https://telegram.me/akmalrusli363) _(inactive :zzz:)_
- Linkedin: [Akmal (Akmal)](https://linkedin.com/in/akmal-akmal-978189190 "My Linkedin")

Some social media may inactive, better contact me at LinkedIn, X (Twitter), or Instagram :slightly_smiling_face:

[Go to the Home Page]({{ '/' | absolute_url }})
