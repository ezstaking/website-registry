#!/bin/bash

shopt -s nullglob
PROTOCOLS=(protocols/*/)
shopt -u nullglob

create_dir() {
  mkdir -p "${1}"
}

move_files() {
  mv "${1}" "${2}"
}

create_file() {
  touch "${1}"
}

remove_file() {
  rm -rf "${1}"
}

for index in "${!PROTOCOLS[@]}"
do
  # echo "${PROTOCOLS[$index]}"

  create_file "${PROTOCOLS[$index]}content/es/.gitkeep"
  create_file "${PROTOCOLS[$index]}content/fr/.gitkeep"

  remove_file "${PROTOCOLS[$index]}content/es/description.md"
  remove_file "${PROTOCOLS[$index]}content/fr/description.md"
done
