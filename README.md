# Blockchain pattern collection

__If you want to check the knowledge base at it was presented in our publication, please select the _paper-version_ release on this repository. The latest version on the knowledge base do not have the same columns and sheets than the paper version.__

This repository contains a collection of 160 blockchain-based software patterns, obtained across 20 academic papers on blockchain-based patterns.
This collection is stored in an Excel spreadsheet.

## Excel content

In this file, you will find 4 sheets:
- Taxonomy: presents the taxonomy used to classify the patterns.
- Papers: lists all the papers studied during the systematic literature review, and if they have been accepted or rejected for the final corpus of papers.
- Proposals: lists all the collected patterns from the papers. Those patterns have been classified on different dimensions, and are described using a simplified pattern form.
- Patterns: synthesizes similar patterns from the proposals to single patterns.

## JSON generation

A script has been written to generate a JSON version of this knowledge base, reused in our other repository (blockchain-patterns-ontology). If you want to execute it after modifying the Excel KB, make sure that Node.js is installed then type the following: 

```
npm install
npm run
```

## Future works

We plan to add more proposals and patterns, and change the Paper sheet from _Paper_ to _Source_, to allow using non-academic sources.

## Licence 

This work is licensed under a Creative Commons Attribution 4.0 International License.

