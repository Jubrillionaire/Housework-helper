
--============ CREATING TABLES ============

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  admin BOOLEAN DEFAULT false,
  role VARCHAR(255) ,
  PRIMARY KEY (user_id)
);

CREATE TABLE clients_profiles(
    client_id UUID DEFAULT uuid_generate_v4(),
    user_id UUID,
    user_name VARCHAR(255) NOT NULL,
    profile_pic VARCHAR,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (client_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE workers_profiles(
    worker_id UUID DEFAULT uuid_generate_v4(),
    user_id UUID,
    username VARCHAR(255) NOT NULL,
    profile_pic VARCHAR,
    rate INTEGER NOT NULL,
    services VARCHAR[] NOT NULL,
    about VARCHAR NOT NULL,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (worker_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE users_images(
     image_id UUID DEFAULT uuid_generate_v4(),
     user_id UUID,
     image_url VARCHAR NOT NULL,
    PRIMARY KEY (image_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
 
--============ INSERTING DUMMY DATA INTO TABLES ============

insert into users (user_name, user_email, user_password, admin, role) values ('Jacob', 'jacob@gmail.com', 'jacob123', false, 'client');


--============ RENAMING COLUMNS IN TABLES =================
ALTER TABLE users RENAME COLUMN user_name TO full_name;

ALTER TABLE clients_profiles RENAME COLUMN user_name TO username;



--============ DELETING DATA IN TABLES TABLES ============

DELETE FROM clients_profiles WHERE client_id = 'c4f712b5-a49c-40b1-b70d-f936ad751852' RETURNING *;

--============ RENAMING A TABLE ============

ALTER DATABASE "housework-helper-app" RENAME TO housework_helper_app;


--========== REMOVING A COLUMN FROM TABLE ==========

ALTER TABLE clients_profiles DROP COLUMN username;

ALTER TABLE clients_profiles DROP COLUMN profile_pic;



DELETE FROM workers_profiles WHERE worker_id = ' c31a344c-8826-4525-8f5c-bda4cd4454a1' RETURNING *;