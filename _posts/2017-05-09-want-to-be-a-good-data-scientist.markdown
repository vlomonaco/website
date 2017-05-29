---
title:  "Want to be a good Data Scientist? Start with a good setup!"
date:   2017-01-19 15:04:23
categories: [blogpost]
tags: [data scientist, deep learning, tools]
---

In this post we will cover my preferred setup for `Data Science` and `Deep Learning`. Of course this would be not the ideal setup for every one out there, depending also on the specifics of each project, but I found it very general and useful for almost anything I do.

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
