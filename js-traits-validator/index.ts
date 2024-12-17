import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import registry from './scripts/registry.json';
import metadataSchema from '../traits/metadata_schema.json';
import { JsonMetadata, Registry } from './types';

const ajv = new Ajv2020();
addFormats(ajv);

const metadataValidate = ajv.compile(metadataSchema)

export const validateMetadata = (data: JsonMetadata): boolean => metadataValidate(data)

export const validateTraits = (data: JsonMetadata, _registry: Registry = registry, _traitsToValidate?: string[]): string[] => {
  if(!validateMetadata(data)){
    throw new Error('');
  }

  const traitsToValidate = _traitsToValidate || Object.keys(data.traits)

  return traitsToValidate.filter((key) => {
    if(!_registry[key] || !data.traits[key]){
      return false;
    }

    const validate = ajv.compile(_registry[key]);
    return validate(data.traits[key])
  })
};