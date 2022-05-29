# Dungeons and Dragons Translations

This repository contains a database of common vocabulary translated into various languages to aid players and game masters avoid injecting English words into their games. With time, this allows for better flow of the game and gives confidence to participants who are not comfortable using English.

> _Note:_ This is a community-driven project unrelated to Wizards of the Coast, the creators of Dungeons and Dragons.

## Contributing to the dictionary

Contributions are welcome in the for of pull requests.

### 1. Fork the repository

To contribute, please fork the repository first.

### 2. Add new dictionary files or edit existing ones

All translation source files reside within the [`translations`](./translations) folder. The format is [YAML](https://yaml.org/), a human-readable data format that provides a structured markup without having to write XML or JSON and worry about formatting. Indentation in YAML files are spaces, **not tabs**.

Each file is a list of English source phrases. The English source phrase is followed by an optional `description` and a list of `translations`. Here is a definition for the word **variable**:

```yml
variable:
  description: A symbol used to represent a value that is not yet defined.
  translations:
    - language: sl
      value: spremenljivka
```

Each translation must specify an [ISO 639-1 two-character language code](https://en.wikipedia.org/wiki/ISO_639-1) and a `value` that is the translation for the English phrase. A translation can also specify multiple alternatives since the meaning in English might be overloaded or the language requires specific context:

```yml
  ...
  translations:
    - language: sl
      value: spremenljivka
      alternatives:
        - neznanka
```

You can specify many different language translations by just adding extra list items under `translations:`

```yml
translations:
  - language: sl
    value: ena
  - language: hr
    value: jedan
```

Currently, the translations are grouped in terms of their categories, so combat related terms are contained inside `combat.yaml`, monsters would reside within `monsters.yaml`, etc. This is to help translators find categories faster without having to scan and hunt through a long file.

New entries should be added to the end of the file for existing files. Sorting happens when the dictionary is built.

### 3. Testing locally

Before you commit, push and open a pull request, please run the app locally. You will need [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) to run this app.

First, install the dependencies (you only need to do this the first time):

```sh
yarn install
```

Then validate the dictionary data, run the following command:

```sh
yarn run validate-data
```

If everything is structured correctly, the command should tell you that the data is valid. If not, it will print the location of the problem.

Any time the dictionary changes, the compiled database must be rebuilt using:

```sh
yarn run build-dictionary
```

After this step, you can run the web server locally:

```sh
yarn run dev
```

Open your browser to [http://localhost:1234](http://localhost:1234) and you should see the dictionary running.

### 4. Submitting a pull request

After committing your changes and pushing to your repository, a GitHub Action will run to validate your commits. If the tests fail, you'll be reminded to resolve those problems.

If the validation tests passes, you can open a pull request to submit your changes.
