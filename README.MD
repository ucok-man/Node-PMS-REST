# Project Management System API

## Prerequisites

- Node.js: Ensure that Node.js is installed on your machine. You
  can download it from [here](https://nodejs.org).

## Install Project Dependency Packages

```
npm install
```

## Configuration

create server_config.json file in the root directory and save it.
Inside that file, add the desired configuration values in the
format KEY:VALUE.

- Configuration Options

  | Configuration Key | Description                          |
  | ----------------- | ------------------------------------ |
  | PORT              | The port number on which project run |
  | HOST              | The host server will run             |

## Compile Project

Once you are in the project's root directory, you can use the tsc
command with the --watch flag to enable automatic recompilation
when changes are detected. Run the following command

```
npm run build
```

## Run Project

- on local machine run during development

```
npm run start:dev
```

- on server after development

```
npm run start
```
