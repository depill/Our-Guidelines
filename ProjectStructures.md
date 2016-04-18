# Project structure

Install cli tool to bootstrap projects?

## Folder structure

*Example*
```
│ Dockerfile
│ Jenkinsfile
│ Makefile
│ package.json
│ service-name.rc.yml
│ service-name.service.yml
├── etc
│   └── nginx
│   └── secrets
├── contracts
│   └── upstream
│   └── downstream
└── src
```


## Linters (.eslintrc etc)
Use appropriate linter for the language.

e.g. javascript projects use `eslint`


## .editorconfig
http://editorconfig.org/


## Contracts
We use [consumer driven contracts](http://martinfowler.com/articles/consumerDrivenContracts.html)
