This is my personal website.

To use docker :

```docker pull lorrissaintgenez/website```
```docker build -t lorrissaintgenez/website .```
```docker run -d -p 3000:4000 lorrissaintgenez/website```

To push on heroku :

```heroku container:login```
```heroku container:push web```

Git with heroku :

```git add .```
```git commit -am "COMMIT_TEXT"```
```git push heroku master```
