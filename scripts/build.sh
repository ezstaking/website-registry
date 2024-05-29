#!/bin/bash

shopt -s dotglob

rm -rf build

find protocols/* -prune -type d | while IFS= read -r DIR; do
  if [[ $DIR == "protocols/_template" ]]; then
    continue
  fi

  PROTOCOL=$(cat "${DIR}/protocol.json");
  # shellcheck disable=SC2016
  PROTOCOL=$(echo "${PROTOCOL}" | npx node-jq -r 'del(.["$schema"])');
  PROTOCOL_SLUG=$(echo "${PROTOCOL}" | npx node-jq -r '.slug');

  # Create for protocol.json
  mkdir -p "build/${PROTOCOL_SLUG}"

  # Create for content
  mkdir -p "build/_content/en/${PROTOCOL_SLUG}"
  mkdir -p "build/_content/es/${PROTOCOL_SLUG}"
  mkdir -p "build/_content/fr/${PROTOCOL_SLUG}"

  echo "${PROTOCOL}" > "build/${PROTOCOL_SLUG}/protocol.json"

  # En & fallback content
  cp -r "${DIR}/content/en/"*.md "build/_content/en/${PROTOCOL_SLUG}"
  cp -r "${DIR}/content/en/"*.md "build/_content/es/${PROTOCOL_SLUG}"
  cp -r "${DIR}/content/en/"*.md "build/_content/fr/${PROTOCOL_SLUG}"

  # Override each locales
  cp -r "${DIR}/content/es/"*.md "build/_content/es/${PROTOCOL_SLUG}"
  cp -r "${DIR}/content/fr/"*.md "build/_content/fr/${PROTOCOL_SLUG}"
done

exit 0
