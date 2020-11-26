# SoCraTes UK - 2020
--------------------

Join the conversation in #ev_socratesuk and #org_socratesuk on [Slack](http://slack.softwarecrafters.org/).

Conference organised by the [Software Crafters Community](https://www.softwarecrafters.org/).


### Run website locally for development

If you want to make changes and raise a PR you can run
the website locally to see how your changes will look like.

Just follow the [official guide](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

If you don't want to install tools (or are running on windows where it's a pain), a command like the following helps bypass install issues (but runs more slowly):
```
docker run -it --rm --volume=$(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --trace --incremental
```

### To upgrade jekyll

- Look at the [available versions](https://jekyllrb.com/news/releases/).
- Check the [latest version](https://pages.github.com/versions/) that github pages supports
- Edit the jekyll version in the [Gemfile](Gemfile)
- Apply the update
```
bundle update
```
- Remember to also add the `Gemfile.lock` file to the commit
