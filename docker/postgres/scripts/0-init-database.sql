CREATE USER threeangle;

DROP DATABASE IF EXISTS threeangle;
CREATE DATABASE threeangle;

DROP DATABASE IF EXISTS threeangle_test;
CREATE DATABASE threeangle_test;

GRANT ALL PRIVILEGES ON DATABASE threeangle TO threeangle;
GRANT ALL PRIVILEGES ON DATABASE threeangle_test TO threeangle;
