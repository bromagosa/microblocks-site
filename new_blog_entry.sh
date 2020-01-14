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

filepath=static/posts/"$filename".md

echo "# $title" > $filepath # create markdown post file and add title
echo "" >> $filepath # add newline
echo "_**By Author**_" >> $filepath # add author
echo "" >> $filepath # add newline
echo "_**`date +%F`**_" >> $filepath # add date
echo "" >> $filepath # add newline
echo "<br>" >> $filepath # add html line break
echo "" >> $filepath # add newline

"${EDITOR:-vi}" static/posts/"$filename".md # edit .md file in default editor
