# Logs

Do not log sensitive information such as secrets, credit card info etc

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
- Message *(carefully!)*
  - Can be stack trace or text
