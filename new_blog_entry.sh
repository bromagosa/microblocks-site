#!/bin/bash

# Add a new entry to the blog. Title is passed by parameter.

title=$1
filename=${title// /-} # replace spaces with dashes
filename=${filename,,} # make lowercase
filename="blog-`date +%F`-$filename" # full name

echo "base" > pages/"$filename".snp # create new page
echo "blog-post" >> pages/"$filename".snp # append blog post template
echo "<li><a href=\"$filename\">$title</a> (`date +%F`)</li>" >> \
        templates/blog-post-list.tmp # add link to new page

echo "# $title" > static/posts/"$filename".md # create markdown post file
echo "## `date +%F`" >> static/posts/"$filename".md # add date

"${EDITOR:-vi}" static/posts/"$filename".md # edit .md file in default editor
