
<!-- .slide: class="dark" data-background-color="#1e1e1e" -->

# Exercise 3:
## Team Flow Setup

![Hands on Task](./images/task-icon-white.svg) <!-- .element: class="task-icon" -->


## Prep: Create a new Repository

```bash
cd exercise-2
git init
git add .
git commit -m "init repo"
```


![Github](./images/github-logo.png)

![Github Setup](./images/exercise-3-github-setup.png) <!-- .element class="screenshot" -->

1. Create Github Repository
1. Follow _push an existing repository from the command line_


![DivShot](./images/divshot.png)

```bash
npm install -g divshot-cli
divshot login
divshot config:add name br-frontend-testing-YOURNAME
git commit -am "Divshot app name"
git push
divshot auth:token
```


![CircleCI](./images/circleci.png)

![CircleCI Setup](./images/exercise-3-circleci-setup.png) <!-- .element: class="screenshot" -->


![CircleCI](./images/circleci.png)

![CircleCI Add Projects](./images/circleci-add-project.png) <!-- .element: class="screenshot" -->


### Environment Variables
![Circle ENV](./images/exercise-3-circleci-divshot-token.png) <!-- .element: class="screenshot" -->


<!-- .slide: class="dark" data-background="#1e1e1e" -->

# Exercise 3
## Web-ify the Triangle Kata

![Hands on Task](./images/task-icon-white.svg) <!-- .element: class="task-icon" -->

```bash
npm start
```
