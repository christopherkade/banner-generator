# Contributing

First of all, thank you for your interest in contributing !

## Table of contents

[Things to know before getting started](#things-to-know)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
* [Git commit messages](#git-commit-messages)
* [Branch naming](#branch-naming)

## Things to know

Please see our [Code of Conduct](CODE_OF_CONDUCT.md) for details on reporting unacceptable behavior.



## Project Setup

The following steps will get you up and running:

1. Fork and clone the repo
2. Install the required dependencies

```sh
  $ yarn install
```

3. Start up the dev server:

```sh
  $ yarn start
```

http://localhost:3000 should automatically open to show you the project running.

## How can I contribute?

### Reporting Bugs

Bugs are tracked by Github Issues, after you've found a bug, create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* As a plus: **Include screenshots and animated GIFs** 

### Suggesting Enhancements

If you have an enhancement idea, feel free to share it with us via an issue. Please make sure it has not already been mentioned.

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Explain why this enhancement would be useful**

### Pull requests

Start by finding something you wish to work on in the issues list and share your interest. Once assigned, feel free to jump in !

Please follow these steps:

1. Get familiar with the [styleguides](#styleguides)
2. Clone the repo
3. Create a separate branch
4. Implement the feature/bug fix/other following the information found in the related issue
5. After you submit your pull request, verify that all status checks are passing 

## Styleguides

### Git commit messages

Commit messages follow the [Gitmoji](https://gitmoji.carloscuesta.me/) template.   
Feel free to used the [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli) to easily create commit messages. Running `gitmoji -i` will create a hook that will be called whenever `git commit` is run.


### Branch naming

- add/{branchName}: New feature
- upd/{branchName}: Update too existing feature, bug fix
- rm/{branchName}: Removal of feature, removal of files
