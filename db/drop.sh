#!/bin/sh

. ../../cfg.sh
# Connect to the DB
psql -h $IP -U $USER $DB < drop.sql

