# Naming conventions

- Everything in english

## File names
- Avoid spaces
- Case sensitive
- Use language specific conventions


## Service names
- Should be [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt) compliant (dns lookup).
- This name controls naming conventions for everything (repositories, contracts, kubernetes entries)
- Descriptive, short (max 28 characters, see RFC 1035)

e.g. `static-content`


## Repository names
Websites should be named by the domain e.g. `beta.icelandairlabs.com`

Services should be named by the type and service-name, e.g. `micro.static-content`


## Contract names
Upstream contracts should named after the service being consumed e.g.
`contracts/upstream/static-content/contract.yml`

Downstream contracts should be named after the consuming service e.g.
`contracts/downstream/beta.icelandairlabs.com/contract.yml`


## [12 factor](http://12factor.net/config) environment variables

`SERVICE_WHAT_CONSUMER`

SERVICE = Service we are using

WHAT = e.g. credentials

CONSUMER = This project

e.g. `S3_CREDENTIALS_DASHBOARD`


## npm packages
Private packages scoped under @icelandair

e.g. `@icelandair/descriptive-package-name`

## API url structure
Version numbers come after the micro service names

e.g. `/api/micro-service-name/v*`
