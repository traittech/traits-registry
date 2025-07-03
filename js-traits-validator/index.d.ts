import { JsonMetadata, Registry } from './types';
export declare const validateMetadata: (data: JsonMetadata) => boolean;
export declare const validateTraits: (data: JsonMetadata, _registry?: Registry, _traitsToValidate?: string[]) => string[];
export declare const METADATA_SCHEMA: {
    $id: string;
    $schema: string;
    title: string;
    description: string;
    type: string;
    properties: {
        metadata_id: {
            description: string;
            type: string;
            minLength: number;
            maxLength: number;
        };
        title: {
            description: string;
            type: string;
            minLength: number;
            maxLength: number;
        };
        description: {
            description: string;
            type: string;
            maxLength: number;
        };
        traits: {
            description: string;
            type: string;
            minProperties: number;
            propertyNames: {
                type: string;
                minLength: number;
                maxLength: number;
            };
            patternProperties: {
                "^.*$": {
                    type: string;
                };
            };
        };
    };
    required: string[];
    additionalProperties: boolean;
};
export declare const DEFAULT_REGISTRY: {
    fungible: {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            symbol: {
                description: string;
                type: string;
                minLength: number;
                maxLength: number;
            };
            decimals: {
                description: string;
                type: string;
                minimum: number;
                maximum: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    named: {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            name: {
                description: string;
                type: string;
                minLength: number;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    "tech.trait.wallet.nft_collection_listing_image": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            image_url: {
                description: string;
                type: string;
                format: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    "tech.trait.wallet.nft_token_attributes": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            attributes: {
                description: string;
                type: string;
                items: {
                    oneOf: {
                        $ref: string;
                    }[];
                };
                minItems: number;
            };
        };
        required: string[];
        $defs: {
            nft_attribute_number: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            nft_attribute_percentage: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            nft_attribute_string: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            nft_attribute_boolean: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            nft_attribute_date: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                        anyOf: {
                            format: string;
                        }[];
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            nft_attribute_duration: {
                type: string;
                properties: {
                    name: {
                        description: string;
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    display_type: {
                        description: string;
                        type: string;
                        enum: string[];
                    };
                    value: {
                        description: string;
                        type: string;
                        format: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
        additionalProperties: boolean;
    };
    "tech.trait.wallet.nft_token_cover_image": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            image_url: {
                description: string;
                type: string;
                format: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    "tech.trait.wallet.nft_token_description": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            nft_token_description: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    "tech.trait.wallet.nft_token_listing_image": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            image_url: {
                description: string;
                type: string;
                format: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    "tech.trait.wallet.price_feed": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            current_price: {
                description: string;
                oneOf: {
                    $ref: string;
                }[];
            };
        };
        required: string[];
        $defs: {
            tiingo: {
                type: string;
                properties: {
                    source: {
                        const: string;
                    };
                    ticker: {
                        description: string;
                        minLength: number;
                        maxLength: number;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
        };
        additionalProperties: boolean;
    };
    "tech.trait.wallet.square_icon": {
        $id: string;
        $schema: string;
        title: string;
        description: string;
        type: string;
        properties: {
            image_url: {
                description: string;
                type: string;
                format: string;
                maxLength: number;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
};
