export type TraitsJsonMetadata = Record<string, any>;
/**
 * Metadata of an on-chain entity, such as token, NFT, AppAgent etc.
 */
export type JsonMetadata = {
    /**
     * The identifier of the document with metadata. Depending on the context, this can be an identifier of on-chain entity, that metadata annotates. Or it can be an application-specific identifier.
     */
    metadata_id: string;
    /**
     * The human readable title of the document with metadata.
     */
    title: string;
    /**
     * The human readable description of the metadata document.
     */
    description?: string;
    /**
     * The list of traits supported by on-chain entity, that is annotated with this metadata document.
     */
    traits: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.*$".
         */
        [k: string]: {
            [k: string]: unknown;
        };
    };
};
export type Registry = {
    [k: string]: any;
};
