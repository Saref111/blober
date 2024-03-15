import generator from 'blobshape';

import { BlobConfig } from './blober';
import { generateHexColor, generateTransform, getUniqueId } from './helpers';

export const generateNewBlobConfig = (): BlobConfig => {
    const seed  = Math.floor(Math.random() * 1000_000_000);
  return {
    id: getUniqueId(),
    transform: generateTransform(),
    filterId: 'filter',
    color: generateHexColor(),
    seed,
  };
};

