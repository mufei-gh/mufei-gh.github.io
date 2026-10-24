# mufei-gh.github.io

Portfolio of Mufei, served at <https://mufei-gh.github.io/>.

A single static page. No framework, no build step, no dependencies.

```
index.html     the whole site: markup, CSS, and JS in one file
build.py       writes one real page per route from index.html
assets/        images and video, named by content hash
about/ …       generated, one directory per route. do not edit by hand
404.html       sends genuinely unknown paths back to the root
.nojekyll      serve files as-is, skip Jekyll
```

Every route is a real URL (`/about`, `/pulseflow`) that returns 200 with its
own title and Open Graph tags. Clicking between pages never hits the server:
`index.html` takes over internal links and swaps its own content.

## Working on it

Edit `index.html`, then:

```
python3 build.py              # regenerate the route pages
python3 -m http.server 8000   # paths are root-absolute, so a server is needed
```

Re-run `build.py` after adding, renaming or removing a project in the `P`
array, then push to `main`.
