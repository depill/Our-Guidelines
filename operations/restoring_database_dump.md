# Restoring database dump
## 1. First thing to do is scale service down connected to this database
* `kubectl scale deployment holiday-packages --replicas 0`

## 2. Get the dump from s3 bucket
* `aws s3 cp s3://dev-database-dump/2017-11-07-holiday_packages.dump .`

## 3. Disconnect all from database
```bash
PGPASSWORD=${PGPASSWORD} psql -h devmicroservices.czsfild4m6c7.eu-west-1.rds.amazonaws.com -U ${PGUSER} -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'holiday_packages' AND pid <> pg_backend_pid();"
```

## 4. Create a backup of database as is
```bash
PGPASSWORD=${PGPASSWORD} psql -h devmicroservices.czsfild4m6c7.eu-west-1.rds.amazonaws.com -U ${PGUSER} -c "CREATE DATABASE holiday_packages_back WITH TEMPLATE holiday_packages OWNER postgres;"
```

## 5. Drop the database
```bash
PGPASSWORD=${PGPASSWORD} psql -h devmicroservices.czsfild4m6c7.eu-west-1.rds.amazonaws.com -U ${PGUSER} -c "DROP DATABASE holiday_packages;"
```

## 6. Restore from dump
```bash
PGPASSWORD=${PGPASSWORD} pg_restore -d holiday_packages -C -Fc -h devmicroservices.czsfild4m6c7.eu-west-1.rds.amazonaws.com -U ${PGUSER} < 2017-11-07-holiday_packages.dump
```

## 7. Scale back up
* `kubectl scale deployment holiday-packages --replicas 1`

## 8. And :pray: it works.