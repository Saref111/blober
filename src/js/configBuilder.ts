import { BlobConfig } from './blober';
import { generateHexColor, generateTransformType, getRandomInt, getUniqueId } from './helpers';

export const generateNewBlobConfig = (): BlobConfig => {
    const seed  = Math.floor(Math.random() * 1000_000_000);
  return {
    id: getUniqueId(),
    transform: {
      type: generateTransformType(),
      args: [getRandomInt(-300, 300), getRandomInt(-300, 300)],
    },
    filterId: 'filter',
    color: generateHexColor(),
    animation: {
      play: true,
      speed: 10,
    },
    seed,
  };
};

