"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_REGISTRY = exports.METADATA_SCHEMA = exports.validateTraits = exports.validateMetadata = void 0;
const _2020_1 = __importDefault(require("ajv/dist/2020"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const registry_json_1 = __importDefault(require("./schemes/registry.json"));
const metadata_schema_json_1 = __importDefault(require("./schemes/metadata_schema.json"));
const ajv = new _2020_1.default();
(0, ajv_formats_1.default)(ajv);
const metadataValidate = ajv.compile(metadata_schema_json_1.default);
const validateMetadata = (data) => metadataValidate(data);
exports.validateMetadata = validateMetadata;
const validateTraits = (data, _registry = registry_json_1.default, _traitsToValidate) => {
    if (!(0, exports.validateMetadata)(data)) {
        throw new Error('');
    }
    const traitsToValidate = _traitsToValidate || Object.keys(data.traits);
    return traitsToValidate.filter((key) => {
        if (!_registry[key] || !data.traits[key]) {
            return false;
        }
        const validate = ajv.compile(_registry[key]);
        return validate(data.traits[key]);
    });
};
exports.validateTraits = validateTraits;
exports.METADATA_SCHEMA = metadata_schema_json_1.default;
exports.DEFAULT_REGISTRY = registry_json_1.default;
