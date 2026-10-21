#!/usr/bin/env python3
"""Generate one real page per route from index.html.

The site is a single file that swaps its own content, but every route is
also a real file here so a shared link returns 200 with its own <title>
and Open Graph tags instead of falling through to 404.html.

    python3 build.py

Re-run after adding or renaming a project in the P array.
"""
import io, os, re, shutil, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(ROOT, 'index.html')
SITE = 'https://mufei-gh.github.io'
NAME = 'Mufei Chen'

def projects(html):
    """ids and headlines from the P array, ignoring ARCHIVE."""
    block = html[html.index('var P = ['):html.index('var SIDE')]
    return re.findall(r'id:"([a-z0-9]+)".*?head:"([^"]*)"', block, re.S)

def page(html, path, title, desc):
    url = SITE + path
    out = html.replace('<title>%s</title>' % NAME, '<title>%s</title>' % title, 1)
    out = out.replace('<meta property="og:title" content="%s">' % NAME,
                      '<meta property="og:title" content="%s">' % title, 1)
    out = re.sub(r'<meta property="og:url" content="[^"]*">',
                 '<meta property="og:url" content="%s">' % url, out, 1)
    out = re.sub(r'<meta name="description" content="[^"]*">',
                 '<meta name="description" content="%s">' % desc, out, 1)
    out = out.replace('</head>', '<link rel="canonical" href="%s">\n</head>' % url, 1)
    return out

def main():
    html = io.open(SRC, encoding='utf-8').read()
    routes = [('about', 'About', 'How Mufei Chen works: computer science, healthcare, product research and design.')]
    for pid, head in projects(html):
        routes.append((pid, head, head))

    built = []
    for slug, title, desc in routes:
        t = title + ' \u00b7 ' + NAME
        d = os.path.join(ROOT, slug)
        shutil.rmtree(d, ignore_errors=True)
        os.makedirs(d)
        io.open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(
            page(html, '/' + slug, t, desc))
        built.append(slug)
    print('built %d routes: %s' % (len(built), ', '.join(built)))

if __name__ == '__main__':
    main()
