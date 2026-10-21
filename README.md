# mufei-gh.github.io

Portfolio of Mufei Chen, served at <https://mufei-gh.github.io/>.

A single static page. No framework, no build step, no dependencies.

```
index.html     the whole site: markup, CSS, and JS in one file
assets/        images and video, named by content hash
favicon.svg
404.html       sends unknown paths back to the root
.nojekyll      serve files as-is, skip Jekyll
```

Routing is hash-based (`#/about`, `#/pulseflow`), so every route is served
by `index.html` and no server rewrites are needed.

To work on it, edit `index.html` and open it in a browser. To deploy, push
to `main`.
