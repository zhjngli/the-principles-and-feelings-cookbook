---
date: '2021-08-19'
title: 'Hello again'
tags:
  - meta
---

It's been a long time coming! Also check out [my photos](https://zhjngli.com).

<!-- end -->

```
here's a code block 0Oo Il1
```

Here's some text with some `more code` in it as well.

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

---

```python
s = "Python syntax highlighting"
print s
```

```javascript{1-2,22}{numberLines: true}
// In your gatsby-config.js
// Let's make this line very long so that our container has to scroll its overflow…
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
