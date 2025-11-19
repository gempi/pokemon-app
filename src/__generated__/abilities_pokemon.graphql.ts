/**
 * @generated SignedSource<<f5823c88d0c68fe5c6b66ae042b1d28d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type abilities_pokemon$data = {
  readonly abilities: ReadonlyArray<{
    readonly ability: {
      readonly name: string | null | undefined;
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly is_hidden: boolean | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "abilities_pokemon";
};
export type abilities_pokemon$key = {
  readonly " $data"?: abilities_pokemon$data;
  readonly " $fragmentSpreads": FragmentRefs<"abilities_pokemon">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "abilities_pokemon",
  "selections": [
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
  "type": "Pokemon",
  "abstractKey": null
};

(node as any).hash = "98572f29578e9ff8d1adf3eab424e8fd";

export default node;
