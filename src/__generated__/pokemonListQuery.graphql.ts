/**
 * @generated SignedSource<<306146ad7cad03c673889ae526123081>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pokemonListQuery$variables = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
};
export type pokemonListQuery$data = {
  readonly pokemons: {
    readonly nextOffset: number | null | undefined;
    readonly results: ReadonlyArray<{
      readonly _id: number | null | undefined;
      readonly image: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type pokemonListQuery = {
  response: pokemonListQuery$data;
  variables: pokemonListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "offset"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      },
      {
        "kind": "Variable",
        "name": "offset",
        "variableName": "offset"
      }
    ],
    "concreteType": "PokemonList",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nextOffset",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PokemonItem",
        "kind": "LinkedField",
        "name": "results",
        "plural": true,
        "selections": [
          {
            "alias": "_id",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pokemonListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pokemonListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0904917c36ff21f5e514c88af7c12a96",
    "id": null,
    "metadata": {},
    "name": "pokemonListQuery",
    "operationKind": "query",
    "text": "query pokemonListQuery(\n  $limit: Int\n  $offset: Int\n) {\n  pokemons(limit: $limit, offset: $offset) {\n    nextOffset\n    results {\n      _id: id\n      name\n      image\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d914a2dfbe4ddcac3c66139143aa0d8";

export default node;
