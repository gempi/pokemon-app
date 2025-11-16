/**
 * @generated SignedSource<<9cb7ce77ef7dad3e953fa0bac2dfc433>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pokemonDetailQuery$variables = {
  name: string;
};
export type pokemonDetailQuery$data = {
  readonly pokemon: {
    readonly _id: number | null | undefined;
    readonly abilities: ReadonlyArray<{
      readonly ability: {
        readonly name: string | null | undefined;
      } | null | undefined;
      readonly is_hidden: boolean | null | undefined;
    } | null | undefined> | null | undefined;
    readonly base_experience: number | null | undefined;
    readonly height: number | null | undefined;
    readonly name: string | null | undefined;
    readonly sprites: {
      readonly front_default: string | null | undefined;
    } | null | undefined;
    readonly stats: ReadonlyArray<{
      readonly base_stat: number | null | undefined;
      readonly stat: {
        readonly name: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly types: ReadonlyArray<{
      readonly type: {
        readonly name: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly weight: number | null | undefined;
  } | null | undefined;
};
export type pokemonDetailQuery = {
  response: pokemonDetailQuery$data;
  variables: pokemonDetailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemon",
    "plural": false,
    "selections": [
      {
        "alias": "_id",
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "height",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "weight",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "base_experience",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Sprite",
        "kind": "LinkedField",
        "name": "sprites",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "front_default",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Type",
        "kind": "LinkedField",
        "name": "types",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BaseName",
            "kind": "LinkedField",
            "name": "type",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Stat",
        "kind": "LinkedField",
        "name": "stats",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "base_stat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BaseName",
            "kind": "LinkedField",
            "name": "stat",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Ability",
        "kind": "LinkedField",
        "name": "abilities",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BaseName",
            "kind": "LinkedField",
            "name": "ability",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "is_hidden",
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
    "name": "pokemonDetailQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pokemonDetailQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "423d89cc427fbf2aab3e531d7f4f4fdb",
    "id": null,
    "metadata": {},
    "name": "pokemonDetailQuery",
    "operationKind": "query",
    "text": "query pokemonDetailQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    _id: id\n    name\n    height\n    weight\n    base_experience\n    sprites {\n      front_default\n    }\n    types {\n      type {\n        name\n      }\n    }\n    stats {\n      base_stat\n      stat {\n        name\n      }\n    }\n    abilities {\n      ability {\n        name\n      }\n      is_hidden\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2d687d5f4311d5fab671167966c4e81";

export default node;
