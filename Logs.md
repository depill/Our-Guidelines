# Logs

Do not log sensitive information such as secrets, credit card info etc

## Correlation-Id
We use correlation ids ([RFC4122 v4 compliant UUID](https://tools.ietf.org/html/rfc4122)) for request tracking. All services must prepend a correlation id to incoming requests to the `X-Correlation-Id` header before logging. The correlation-id should be used in all log strings (when available). Use `; ` as a separator between correlation ids.

## How to log
We log out to `stdout` which is picked up by `fluentd` and sent to `ElasticSearch`.


## Log levels
Should be defined by an environment variable e.g. `LOG_LEVEL=INFO`

- `DEBUG`
- `INFO`
- `WARN`
- `ERROR`
- `CRIT` (fatal/critical/panic)


## When & where to log
- Entry & exit in all public functions.
- Entry & exit in applications.
- Endpoint requests *(without body)*
- All errors/warnings
- Debug as needed *(disabled by default on production)*


## What to log
- Timestamp
- Correlation-Id *(when applicable)*
- Level
- Node name *(when available)*
- Service name
- Method name
- RuntimeEnvironment
- Message *(carefully!)*
  - Can be stack trace or text

## Example for micro.route 
 - {"correlationId":"843b2dc9-849b-4ff3-83f8-16c7e3c34559; ContentCorrelationId","level":"debug","methodName":"GetSiteTree","msg":"Find site tree","route":"","runtimeEnvironment":"DEV","serviceName":"routes","site":"12345678-1234-1234-1234-123456789","time":"2016-09-21T13:19:28Z"}