/**
 * @generated SignedSource<<028744782ee7c179bdce5ecab2561c6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pokemonListPokemonsQuery$variables = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
};
export type pokemonListPokemonsQuery$data = {
  readonly pokemons: {
    readonly count: number | null | undefined;
    readonly next: string | null | undefined;
    readonly nextOffset: number | null | undefined;
    readonly results: ReadonlyArray<{
      readonly _id: number | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type pokemonListPokemonsQuery = {
  response: pokemonListPokemonsQuery$data;
  variables: pokemonListPokemonsQuery$variables;
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
        "name": "count",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "next",
        "storageKey": null
      },
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
    "name": "pokemonListPokemonsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pokemonListPokemonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e251f7aaa429f3ad59035b26cd278e4f",
    "id": null,
    "metadata": {},
    "name": "pokemonListPokemonsQuery",
    "operationKind": "query",
    "text": "query pokemonListPokemonsQuery(\n  $limit: Int\n  $offset: Int\n) {\n  pokemons(limit: $limit, offset: $offset) {\n    count\n    next\n    nextOffset\n    results {\n      _id: id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c76af5665d112f2ec84ff6b4a59b2e42";

export default node;
