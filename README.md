# entryway-sop

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![MIT](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Techical proposal for the 'entry way' SOP.

TODO: Fill out this long description.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

## Install

To install the DB  you have 2 choices.

1. You can install it locally and run it locally
```
https://docs.mongodb.com/manual/installation/
```

2. Docker.
```
docker run -p 27017:27017 bitnami/mongodb:latest
```

Other useful commands:

To see the running process:
```
docker ps
```

EASIEST way to stop all containers:
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

To stop:
```
docker stop <PROCESS_ID>
```

To remove the stopped instance:
```
docker rm <PROCESS_ID>
```



## Usage

```
```

## API

## Maintainers

[@cepholopoddreamz](https://github.com/cepholopoddreamz)
[@realrhys](https://github.com/realrhys)

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2018 cepholopoddreamz
