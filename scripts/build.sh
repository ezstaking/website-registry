#!/bin/bash

shopt -s dotglob

find protocols/* -prune -type d | while IFS= read -r DIR; do
  if [[ $DIR == "protocols/_template" ]]; then
    continue
  fi

  PROTOCOL=$(cat $DIR/protocol.json);
  PROTOCOL=$(echo $PROTOCOL | npx node-jq -r 'del(.["$schema"])');
  PROTOCOL_SLUG=$(echo $PROTOCOL | npx node-jq -r '.slug');

  mkdir -p build/${PROTOCOL_SLUG}
  echo $PROTOCOL > build/${PROTOCOL_SLUG}/protocol.json

  cp $DIR/*.md  build/${PROTOCOL_SLUG}/
  cp $DIR/*.png  build/${PROTOCOL_SLUG}/
  cp $DIR/*.svg  build/${PROTOCOL_SLUG}/
done
