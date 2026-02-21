# SoCraTes UK - 2024
--------------------

Join the conversation in #ev_socratesuk and #org_socratesuk on [Slack](http://slack.softwarecrafters.org/).

Conference organised by the [Software Crafters Community](https://www.softwarecrafters.org/).


### Run website locally for development

If you want to make changes and raise a PR you can run
the website locally to see how your changes will look like.

Just follow the [official guide](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

To run the site locally:
```
bundle install
bundle exec jekyll serve --trace --incremental
```

If you don't want to install tools (or are running on windows where it's a pain), a command like the following helps bypass install issues (but runs more slowly):
```
# (Get Docker Desktop running in the background first) (described on my machine as Docker.app)
docker run -it --rm --volume=$(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --trace --incremental
```
- You can then visit http://localhost:4000/ in your browser
- It will automatically refresh in response to code changes

### Get docker working on your machine

- You will need to install it...
- ...start with this: `brew install docker`
  - Not actually sure I needed this? Might have been superceded by the next step?
- ...then go to website: https://docs.docker.com/desktop/setup/install/mac-install/ 
  - You can skip the bit about setting up an account
- ...then get it running in the background
- Once you have run Docker Desktop you should be able to see “Engine running” in green, bottom left
- Then you should be able to run the `docker run` command (see above for the full command - it's quite long).

### Deploy changes to the web

- When you push any changes to github, that will kick off a deploy - you’ll see a little orange dot at the top of the code window on github.com - click on that and you’ll see deployment progress

### Code structure

- The home page is several sections stacked on top of each other. Each section corresponds to an html file in the `_includes` folder.
- The other web pages are selectable from the menu bar at the top of the site. Each menu corresponds to a separate markdown file - these are all in the root folder - eg `tickets.md`. 

### To upgrade jekyll

- Look at the [available versions](https://jekyllrb.com/news/releases/).
- Check the [latest version](https://pages.github.com/versions/) that github pages supports
- Edit the jekyll version in the [Gemfile](Gemfile)
- Apply the update
```
bundle update
```
- Remember to also add the `Gemfile.lock` file to the commit
