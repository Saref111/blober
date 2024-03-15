import generator from 'blobshape';

import { BlobConfig } from './blober';
import { generateHexColor, generateTransform, getUniqueId } from './helpers';
import { blobStorage } from './localStorageController';

const SVG_SIZE = 650;

export const generateNewBlobConfig = (): BlobConfig => {
    const seed  = Math.floor(Math.random() * 1000_000_000);
  return {
    id: getUniqueId(),
    path: generator({
      size: SVG_SIZE,
      growth: 1,
    }).path,
    transform: generateTransform(),
    filterId: 'filter',
    color: generateHexColor(),
    seed,
    animationPaths: [
      generator({
        size: SVG_SIZE,
        growth: 1.5,
        seed: (seed + 1).toString(),
      }).path,
      generator({
        size: SVG_SIZE,
        growth: 2,
        seed: (seed + 2).toString(),
      }).path,
    ],
  };
};

