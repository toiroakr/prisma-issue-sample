# prisma-issue-sample
This is minimum reproduction repository for https://github.com/prisma/prisma/discussions/10137.

***The issue is already solved.*** (reproduction in [this commit](https://github.com/toiroakr/prisma-issue-sample/commit/9a8dd0b3861b1c51ab19a369aadc052824028291))

## How to set up
1. set `model/.env` for local database.
2. install dependencies
```shell
(root)$ npm i
(root/frontend)$ npm i
```

## How to reproduce
```shell
(root/frontend)$ npm run dev
```
access to http://localhost:3000
