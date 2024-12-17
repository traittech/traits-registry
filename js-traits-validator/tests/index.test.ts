import { validateTraits } from '../'
import registry from '../scripts/registry.json';
import appagent from '../../examples/appagent.json';
import fungible_token from '../../examples/fungible_token.json';
import nft_collection from '../../examples/nft_collection.json';
import nft_token from '../../examples/nft_token.json';

test('Validate AppAgent metadata', () => {
  expect(validateTraits(appagent, registry)).toStrictEqual(["named", "tech.trait.wallet.square_icon"]);
});

test('Validate metadata of fungible token', () => {
  expect(validateTraits(fungible_token, registry)).toStrictEqual(["named", "fungible", "tech.trait.wallet.square_icon"]);
});

test('Validate metadata of nft collection', () => {
  expect(validateTraits(nft_collection, registry)).toStrictEqual(["named", "tech.trait.wallet.square_icon", "tech.trait.wallet.nft_collection_listing_image"])
});

test('Validate metadata of nft token', () => {
  expect(validateTraits(nft_token, registry)).toStrictEqual([
    "named",
    "tech.trait.wallet.square_icon",
    "tech.trait.wallet.nft_token_listing_image",
    "tech.trait.wallet.nft_token_cover_image",
    "tech.trait.wallet.nft_token_description",
    "tech.trait.wallet.nft_token_attributes",
  ])
});