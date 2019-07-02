#!/usr/bin/env bash

 PATH=$(npm bin):$PATH

 npm run lint && JEST_JUNIT_OUTPUT="build/test_results/jest/junit.xml" jest \
  --ci \
  --runInBand \
  --reporters=default \
  --reporters=jest-junit \
  --collectCoverage=true \
  --coverageDirectory=build/coverage/ \
  --coverageReporters=text \
  --coverageReporters=html
