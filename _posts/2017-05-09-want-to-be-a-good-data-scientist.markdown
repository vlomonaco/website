---
title:  "Want to be a good Data Scientist? Start with a good setup!"
date:   2017-01-19 15:04:23
categories: [blogpost]
tags: [data scientist, deep learning, tools]
---

During the last few years as a PhD student in AI and Deep Learning I met a lot of smart people and good data scientist both in the Academia and in the Industry. Still, I've always been surprise of how much of these folks still work with old tools and bad coding habits. Even though in the end is just about personal choices and tastes, I still believe that for high productivity and extra-safety measures some tools are better than others.

Moreover, especially if your are a young practitioner, it's very easy to just follow your enthusiasm and start learning to solve interesting problems but with the <strong>wrong tools or attitude</strong>. In fact, as for playing a music instrument, you risk to get used to a poor designed set of tools and consequent bad behaviors which are much more difficult to change later on then starting directly with the right foot.

In this post I would like to share with you my preferred setup for `Data Science` and `Deep Learning`, so that you can jump right on this beautiful field without incurring in unnecessary headaches due to a poor tools setup. Of course this would be not the ideal arrangement for everyone out there, depending also on the specifics of each project, but I found it very general and useful for almost anything I do.

In a nutshell we'll need:

* A <a>good IDE</a>.
* An easy-to-use <a>playground (code and visualize) tool</a>.
* An <a>Experiments Manager</a>.
* A good <a>client/server configuration</a> for heavy workloads.
* A good <a>Deep Learning framework</a> and simple <a>ML off-the-shelf library</a>.

Let's analyze each of them in details.<br><br>


#### A good IDE
<br>Text files are amazing, I'm a huge VIM fan, still some IDE features are amazing and pretty easy to customize. Personally I love PyCharm which comes with a really interesting tool suit and a smooth interface. 
Of all the features offered by an IDE what you should be looking first is a very robust code editor (with syntax highlighting, errors correction and smart suggestions) and a powerful debugging system! 


<!-- #### An easy-to-use playground tool
<br>Text files are amazing, I'm a huge VIM fan, still some IDE features are amazing and pretty easy to customize. Personally I love PyCharm which comes with a really interesting tool suit. 


#### Experiments Manager
<br>Text files are amazing, I'm a huge VIM fan, still some IDE features are amazing and pretty easy to customize. Personally I love PyCharm which comes with a really interesting tool suit. 


#### Client/server configuration
<br>Text files are amazing, I'm a huge VIM fan, still some IDE features are amazing and pretty easy to customize. Personally I love PyCharm which comes with a really interesting tool suit. 

#### Deep Learning framework and off-the-shelf library
<br>Text files are amazing, I'm a huge VIM fan, still some IDE features are amazing and pretty easy to customize. Personally I love PyCharm which comes with a really interesting tool suit.  -->

To be continued... :-)

<!--This is just a fake post to test some functionalities. Here you can see how easily is in Python to query google and get the results:

``` python
import urllib2
import urllib
import json

url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&"
query = raw_input("What do you want to search for ? >> ")
query = urllib.urlencode( {'q' : query } )
response = urllib2.urlopen (url + query ).read()
data = json.loads ( response )
results = data [ 'responseData' ] [ 'results' ]

for result in results:
    title = result['title']
    url = result['url']
    print ( title + '; ' + url )
```
-->
[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
