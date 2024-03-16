import { BlobConfig } from '../blober';
import {
  setDragNDropHandlers,
  setFieldsetAttrs,
  setMouseOver,
  setRemoveButton,
} from './handlerSetters';

export const getFieldset = ({ id, color, seed, animation }: BlobConfig) => {
  const fieldset = document.createElement('fieldset');
  setFieldsetAttrs(fieldset, id, color);
  fieldset.innerHTML = `
        <label>
            <span>Color:</span>
            <input value="${color}" type="color" name="color_${id}" id="color_${id}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${seed}" type="number" name="seed_${id}" id="seed_${id}" />
        </label>
        <details>
          <summary>Animation</summary>
          <label>
            <span>Play:</span>
            <input ${
              animation.play && 'checked'
            } type="checkbox" name="animation_${id}" id="animation_${id}" />
          </label>
          <label>
            <span>Speed (s):</span>
            <input value="${
              animation.speed
            }" type="number" name="speed_${id}" id="speed_${id}" />
          </label>
        </details>
        <button type="button" class="remove-blob">Remove</button>
    `;

  setRemoveButton(fieldset, id);
  setMouseOver(fieldset);
  setDragNDropHandlers(fieldset, id);
  return fieldset;
};
