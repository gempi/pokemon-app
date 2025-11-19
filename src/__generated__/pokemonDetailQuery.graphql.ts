/**
 * @generated SignedSource<<ff314963d9267800a1fa638e099526e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pokemonDetailQuery$variables = {
  name: string;
};
export type pokemonDetailQuery$data = {
  readonly pokemon: {
    readonly _id: number | null | undefined;
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
    readonly " $fragmentSpreads": FragmentRefs<"abilities_pokemon">;
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
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v2 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "base_experience",
  "storageKey": null
},
v7 = {
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
v8 = [
  (v3/*: any*/)
],
v9 = {
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
      "selections": (v8/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
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
      "selections": (v8/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pokemonDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "abilities_pokemon"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pokemonDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
                "kind": "ScalarField",
                "name": "is_hidden",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "BaseName",
                "kind": "LinkedField",
                "name": "ability",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6a2245f246facdde2f10976582a0c58f",
    "id": null,
    "metadata": {},
    "name": "pokemonDetailQuery",
    "operationKind": "query",
    "text": "query pokemonDetailQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    _id: id\n    name\n    height\n    weight\n    base_experience\n    sprites {\n      front_default\n    }\n    types {\n      type {\n        name\n      }\n    }\n    stats {\n      base_stat\n      stat {\n        name\n      }\n    }\n    ...abilities_pokemon\n  }\n}\n\nfragment abilities_pokemon on Pokemon {\n  abilities {\n    is_hidden\n    ability {\n      name\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "02b74162f649d6a63d31257235a91f49";

export default node;
