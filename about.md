---
layout: page
title: Hello! Hola! Khushamadeed!
permalink: /about/
---

Welcome to my little corner of the internet. My name, as you probably might have guessed, is Fahad :nerd_face:, a Pakistani-American and I work in operations for a FinTech company based out of Denver, Colorado (:us:). I love programming and learning new ways to do things. I also love spending my free time tinkering with things and researching random ideas and thoughts.

<div class="flex one three-600">
    <div>
        <h3>I really like...</h3>
        <ul>
            {% for like in site.data.likes %}
                <li>{{ like }}</li>
            {% endfor %}
        </ul>
    </div>
    <div>
        <h3>I can speak/read...</h3>
        <ul>
            {% for language in site.data.languages %}
                <li>{{ language }}</li>
            {% endfor %}
        </ul>
    </div>
    <div>
        <h3>I have lived in...</h3>
        <ul>
            {% for place in site.data.lived %}
                <li>
                    {{ place.emoji | emojify }} 
                    <span data-tooltip="{{ place.state }} {{ place.country }}" class="tooltip-right">
                        {{ place.city }}
                    </span>
                </li>
            {% endfor %}
        </ul>
    </div>
</div>