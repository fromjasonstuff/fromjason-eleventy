---
title: From Jason 2.0 is an 11ty-powered digital garden with multiple plots 
date: 2023-11-06
type: note
phase: sorting
audience: web designers
graphic: 'logo-fromjason.svg'
graphicAlt: 'illustration of a mask'
openGraph: 'fromjason2'
sub: freelance
tags: ['11ty', 'web design']
---
# {{ title }}

From [Jason 2.0](/) builds on the concept of 1.0 where I created sub-sections ("subs") that behave like independent blogs. These subs now have a new name— plots. 

I made From Jason as a digital garden. It's a space where I can grow a diverse range of ideas and subjects with my writing, outside the limitations of traditional blogging. (That's the goal, anyway.) What better way to cultivate *away* from garden variety blogs, than to introduce my digital garden to a few plots?

Before I get into the weeds (I can go all day with the garden metaphors), I should warn you— I'm still learning 11ty, and to a greater extent, JavaScript. Version 2 is structured a bit neater than version 1, but posting  is mostly still a manual process, and my code isn't near as [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as I know it could be. 

In short, syntax is my achilles heel, but I'm improving. Feel free to ask me technical questions about this project, but know I'm still learning and am in no way an expert in 11ty. "Me still baby," as my friend Rob would say. 

That out the way, lets talk "plots."

## About Plots

Each plot behaves as a distinct blog and lives in the "p" directory. (Think Reddit and subreddits.) For example, my notebook plot ([p/notebook](/p/notebook/)) has its own homepage with a [filtered view](https://danurbanowicz.com/posts/2022/10/17/filter-an-eleventy-collection-using-your-own-custom-front-matter/) of posts and a filtered archive page named "all" ([p/notebook/all](/p/notebook/all/)). 

Posts in my notebook are identified in the front matter with a "sub" key and a value that matches the plot's name (i.e "sub: notebook") Posts that belong to a plot are unofficially called "sub plots", *hardy-har-har*. 

In addition to posts, plots can contain "series" sections, which are a group of serialized posts with a special table of contents page. For example, my freelance plot ([p/freelance](/p/freelance/)) has a series called "How to commission a logo design," which lives at [p/freelance/s/how-to...](https://fromjason.xyz/p/freelance/s/how-to-commission-a-logo-design). My hope was to implement a maintenance-free series feature, like described in [this wonderful post](https://shivjm.blog/colophon/how-i-create-an-article-series-in-eleventy/) by Shiv J.M. but, alas, my eleventy skills still need sharpening. For now, setting up a series is a relatively painless process, but still very much manual and requires multiple steps. 

Finally, you can also subscribe to a plot's RSS feed without subscribing to other plots. Or, you can subscribe to From Jason and get everything! What you subscribe to depends on the url you input into your reeder. 

Everything is then tied together on the homepage, where I list posts from all plots. 

Technical note: all posts, regardless of plot, live in the /posts input directory. I use directory data files (i.e. posts.11ty.js) with the permalinks key to redirect where the post lives in my output folder. This structure was important to me as I wanted to maintain one folder for all my writings in a markdown format. *11ty for the win*. 

## Other sections in From Jason

Separate from plots, From Jason has a "me" and a "resources" section.

The *me* index page ([/me/](/me/)) contains my h-card and rel=me markup. Additional pages in *me* include my [bio](/me/bio/) page, [colophon](/me/colophon/), and a "[now](/me/now/)" page that I 100% stole from [Maggie Appleton's blog](https://maggieappleton.com/now). 

The *resources* section is experimental (hell, all of this shit is experimental) and contains things like my *Lorem Ipsum* tool. 

## Why structure my blog this way?

On my search for a better blogging experience, I came across [Write Freely](https://writefreely.org/). Sick of being boxed into algorithm-driven niches and platform silos, I was drawn to its "distraction-free" consumer offering Write.as. 

There, I experimented with writing in separate blogs that all lived on the same domain. I immediately love it, even if I wasn't completely sure what "it" was. I knew I disliked niche-based blogging, corporate platforms owned by petulant billionaires, and SEO-crazed keyword optimization. I knew I liked writing about various topics and publishing to something that felt like mine. 

My previous blogs were always based on a specific niche, usually the subject I was most interested in *at the time*. After a year, or even as little as a few months, I got tired of the forced-narrowed writing and started posting articles outside of my niche. This behavior, I assume, was jarring to my readers. Posting about contentious political topics in a travel blog isn't going to do well. So, I eventually would pivot the blog to the new subject of interest, or abandon the blog altogether and start over. 

After a month or so on Write.as, I found this wonder blog post titled [Communal Bonfires](https://blog.erlend.sh/communal-bonfires) on the Read.as feed. In it, was the first time I heard the term "digital garden." From there, I went down a rabbit hole that I have yet to crawl out of. I learned about the world of digital gardens, the indie web, static site generators and a hundred other concepts I now have bookmarked and reference often. This desire I had, fuzzy and undefined, suddenly had a blueprint. I wanted *From Jason* to be a fully custom digital garden that participated in the indie web. From Jason 1.0 got me there, and 2.0 pushes the boundaries just a bit. 

From Jason gives me the freedom to hop around my topics of interest without "cross contaminating," for a lack of better phrase. The plots concept isn't an attempt to replace tag categorization, but rather an expression of my multiple online personalities. Plots represent the different sides of me that aren't always omnipresent, but exist nonetheless. I don't foresee creating dozens of plots, but there are a couple more I have in mind. I see myself creating a political plot and possibly a design plot in the future. 

And then there's my notebook. 

My notebook is my catch-all. It's where I can write about anything, including my "micro obsessions"— little things I'm passionate about that don't warrant a full plot. My notebook is where my typos and oddly structured sentences live. It's where I can published a still-evolving opinion or a seed of an idea. My notebook relieves me of perfection. I can't remember exactly which blog I borrowed the notebook idea from, but it was almost certainly one listed on my [colophon](/me/colophon/).

## Conclusion

I'm excited about the possibilities From Jason 2.0 introduces to my personal writing. Again, the code isn't exactly perfect, but I think I moved a step forward. I'm happy to have shared it with you, and will gladly answer any questions to the best of my ability. I'll likely write up something more technical in my colophon in the coming weeks. 
