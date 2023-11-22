---
title: Methods
description: Potential methods to achieve the digital content initiative's goals.
date: 2023-11-22
sub: freelance
type: series
seriesID: 'digital content initiative'
seriesKey: 4
phase: developing
audience: everyone
graphic: '293.png'
graphicAlt: 'illustration of a dragon crest'
tags: ['indie web']
permalink: "/p/{{ sub | slugify }}/s/{{ seriesID | slugify }}/{{ title | slugify }}.html"
---
# {{ title }}

{{ description }}

### Front matter
Each file has a set of YAML-compliant keys and values that act as a type of metadata called front matter. My files' front matter  helps me to sort, filter, categorize, and process to the web. Furthermore, front matter helps me identify which of my writings I've published, abandoned (more likely forgotten), or require further editing regardless of publish status. 

#### Front matter keys and values
All front matter keys currently in use, with descriptions and value options. 

| key | value | options | definition | dependencies |
|--|--|----|-------------------|--|
| `draft` | boolean | `true`, `false` | Identifies a file as incomplete, unpublished, or both. | Smart Folder, 11ty (false value) |
| `expat` | boolean | `true`, `false` | files once published on other platforms that I've added to my collection. Expat files with `draft` set to `true` have yet to be republished to my blog. | Smart Folder |
| `archive` | boolean | `true`, `false` | unpublished, abandoned, and/or old drafts I have no intentions to use. | Smart Folder |
| `type` | string | `siteCopy`, `presentation`, `readMe`, `prompt`, `note`, `essay`, `series`, `page` | Defines the type of content within the file. value options are loosely defined at the moment. | Smart Folder, 11ty |
| `site` | string | `fromJason` | Identifies where the file was published. | Smart Folder |
| `phase` |  | `sorting`, `deadEnd` | Identifies how "polished" the concept is. The phase value options are also loosely defined at the moment. I need to flush out a better system.  | Smart Folder, From Jason |
| `sub` | string | `notebook`, `freelance`, `stories`, `travel` | Assigns a post to a blog section. | Smart Folder, From Jason |
| `title` | string |  | Title of file. Will slugify for url | 11ty, Smart Folder (1 exception) |
| `description` | string |  | Short summary of file | 11ty, Open Graph |
| `date` | yyyy-mm-dd |  | Published date of file. | 11ty |
| `audience` | string |  | Assumed audience for post. | From Jason |
| `graphic` | file name ext | '23.png' | The primary graphic for From Jason posts | From Jason |
| `graphicAlt` | string | 'illustration of...' | Alt text for graphic | 11ty |
| `tags` | array | ['tag 1', 'tag 2'] | Tags for posts | 11ty |

#### Front matter templates
Front matter templates are defined in the `title` key with a `frontMatter` value. I manually copy the a template's contents and paste into my files as needed. Since there is currently no "source of truth" for my front matter, I try to keep the templates DRY. 

- Standard posts: [[frontMatter]]
- Site copy: [[frontMatter siteCopy]]
- Dead ends: [[frontMatter deadEnd]]

### iA Smart Folders
Files are filtered into ia Writer's "smart folders" using front matter keys and values, or file extension. 

#### Filter by front matter

Primary front matter filters:
- sub
- type
- phase
- site
- archive
- draft
- expat

#### Filter by `title` for templates

The title key is typically reserved for the H1 post titles and/or to slugify a post url. Reusable front matter templates are an exception. Rather than creating a special "template" key that I'd have to delete each time I paste the template into my post, I assign a `frontMatter` value to the `title` key. I still need to replace the value with the post's title, but the chances of forgetting are less this way. 

#### Filter by `.md` and `.txt` file extension

Assigning meaning to file extensions help me better filter files in iA Writer smart folders:
- Markdown files (`.md`) are for publishing (i.e. to my blog or presentation software like iA Presenter). 
- Text files (`.txt`) are private documentation, templates, etc. 

