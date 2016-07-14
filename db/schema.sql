DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
task_id SERIAL UNIQUE PRIMARY KEY,
task_name VARCHAR(62) NOT NULL,
task_desc TEXT,
completed BOOLEAN NOT NULL DEFAULT FALSE,
task_time_start TIMESTAMP,
task_time_end TIMESTAMP,
task_created timestamp NOT NULL DEFAULT NOW()
);


CREATE INDEX on tasks(completed);
CREATE INDEX on tasks(task_time_start);
CREATE INDEX on tasks(task_created);
