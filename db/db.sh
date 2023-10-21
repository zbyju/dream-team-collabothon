#!/bin/sh

. ../../cfg.sh
# Connect to the DB
#PGPASSWORD=collab-pw-177 psql -h 34.22.199.244 -U postgres collab

psql -h $IP -U $USER $DB

#PGPASSWORD=collab-pw-177 psql -h 34.22.199.244 -U admin collab < qn.sql

