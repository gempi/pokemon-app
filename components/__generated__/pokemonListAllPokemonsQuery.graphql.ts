/**
 * @generated SignedSource<<e69ff457cfac87705847e77388f6bf9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pokemonListAllPokemonsQuery$variables = {
  limit?: number | null | undefined;
  offset?: number | null | undefined;
};
export type pokemonListAllPokemonsQuery$data = {
  readonly pokemons: {
    readonly count: number | null | undefined;
    readonly results: ReadonlyArray<{
      readonly _id: number | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type pokemonListAllPokemonsQuery = {
  response: pokemonListAllPokemonsQuery$data;
  variables: pokemonListAllPokemonsQuery$variables;
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
    "name": "pokemonListAllPokemonsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pokemonListAllPokemonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "00ce84422e28d31da6e9c649052f8d48",
    "id": null,
    "metadata": {},
    "name": "pokemonListAllPokemonsQuery",
    "operationKind": "query",
    "text": "query pokemonListAllPokemonsQuery(\n  $limit: Int\n  $offset: Int\n) {\n  pokemons(limit: $limit, offset: $offset) {\n    count\n    results {\n      _id: id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e000ba98f8190ec43800eee9505ccaa9";

export default node;
