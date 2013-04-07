#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Yuan He'
SITENAME = u'Life with π'
SITESUBTITLE = u'Yuan\'s Raspberry Pi notes'
SITEURL = 'http://lenage.me'
FEED_DOMAIN = 'http://lenage.me'
TIMEZONE = 'Asia/Shanghai'

DEFAULT_LANG = u'zh'
FEED_ALL_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS = 'feeds/%s.rss.xml'
THEME = "./themes/lenage"

# Blogroll
LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('Python.org', 'http://python.org'),
          ('Jinja2', 'http://jinja.pocoo.org'),
          ('Blog', 'http://blog.lenage.com'),)

# Social widget
SOCIAL = (('twitter', 'http://twitter.com/heyuan'),
          ('github', 'http://github.com/lenage'),
          ('Bitbucket', 'http://bitbucket.org/lenage'))

# Github
GITHUB_URL = "https://github.com/lenage"

# static paths will be copied under the same name
STATIC_PATHS = ["pictures", ]

# A list of files to copy from the source to the destination
FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)

DEFAULT_PAGINATION = 15
