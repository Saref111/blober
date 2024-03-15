import generator from 'blobshape';

import { BlobConfig } from './blober';
import { generateHexColor, generateTransform, getUniqueId } from './helpers';
import { blobStorage } from './localStorageController';

const SVG_SIZE = 650;

export const generateNewBlobConfig = (): BlobConfig => {
  return {
    id: getUniqueId(),
    path: generator({
      size: SVG_SIZE,
      growth: 1,
    }).path,
    transform: generateTransform(),
    filterId: 'filter',
    color: generateHexColor(),
    seed: Math.floor(Math.random() * 1000_000_000),
    animationPaths: [
      generator({
        size: SVG_SIZE,
        growth: 1.5,
      }).path,
      generator({
        size: SVG_SIZE,
        growth: 2,
      }).path,
    ],
  };
};

// export const buildConfig = (formElement: HTMLFormElement) => {
//   const formData = new FormData(formElement);

//   for (const [rawKey, value] of formData.entries()) {
//     const [key, id] = rawKey.split('_');
//     if (!blobStorage.has(id)) {
//       blobStorage.addEntity(generateNewBlobConfig());
//     }
//     const currentBlob = blobStorage.findEntity(
//       entity => entity.id === id
//     ) as BlobConfig;
//     blobStorage.updateEntity(currentBlob, {
//       ...currentBlob,
//       [key]: value,
//     });
//   }

//   return blobStorage.getEntities();
// };
