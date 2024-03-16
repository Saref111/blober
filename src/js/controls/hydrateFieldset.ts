import { BlobConfig } from '../blober';
import {
  setDragNDropHandlers,
  setFieldsetAttrs,
  setMouseOver,
  setRemoveButton,
} from './handlerSetters';

export const hydrateFieldset = (el: HTMLFieldSetElement, blob: BlobConfig) => {
  setFieldsetAttrs(el, blob.id, blob.color);
  setRemoveButton(el, blob.id);
  setMouseOver(el);
  setDragNDropHandlers(el, blob.id);
};
