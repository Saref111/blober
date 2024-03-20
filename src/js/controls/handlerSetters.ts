import { BlobConfig } from '../blober';
import { blobStorage } from '../localStorageController';

type Events = Event | DragEvent | MouseEvent | KeyboardEvent;
type HandlersMap = Record<string, (event: Events) => void>;

const handlerCash = new Map<string, HandlersMap>();

const removeBlob = (id: string) => {
  const blob = blobStorage.findEntity((blob: BlobConfig) => blob.id === id);
  if (!blob) {
    return;
  }
  blobStorage.removeEntity(blob);
};

const onFieldsetDrop = (event: DragEvent, id: string) => {
  event.preventDefault();
  event.stopPropagation();

  const draggedId = event.dataTransfer?.getData('text/plain');
  if (draggedId === id) {
    return;
  }
  const draggedBlob = blobStorage.findEntity(
    (blob: BlobConfig) => blob.id === draggedId
  );
  const targetBlob = blobStorage.findEntity(
    (blob: BlobConfig) => blob.id === id
  );
  if (!draggedBlob || !targetBlob) {
    return;
  }
  blobStorage.moveEntity(
    draggedBlob,
    blobStorage.getEntities().indexOf(targetBlob)
  );
};

const getFieldSetId = (fieldset: HTMLFieldSetElement) => {
  return fieldset.id.split('_')[1];
};

export const setMouseOver = (fieldset: HTMLFieldSetElement) => {
  let currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (currentFieldsetCash?.mouseOverHandler) {
    fieldset.removeEventListener(
      'mouseover',
      currentFieldsetCash.mouseOverHandler
    );
  }
  if (currentFieldsetCash?.mouseOutHandler) {
    fieldset.removeEventListener(
      'mouseout',
      currentFieldsetCash.mouseOutHandler
    );
  }

  handlerCash.set(getFieldSetId(fieldset), {
    mouseOverHandler: () => {
      const [_, id] = fieldset.id.split('_');
      const group = document.getElementById(`${id}`);
      if (!group) return;
      group.classList.add('hover');
    },
    mouseOutHandler: () => {
      const [_, id] = fieldset.id.split('_');
      const group = document.getElementById(`${id}`);
      if (!group) return;
      group.classList.remove('hover');
    },
  });

  currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (!currentFieldsetCash) return;

  fieldset.addEventListener('mouseover', currentFieldsetCash.mouseOverHandler);
  fieldset.addEventListener('mouseout', currentFieldsetCash.mouseOutHandler);
};

export const setDragNDropHandlers = (
  fieldset: HTMLFieldSetElement,
  id: string
) => {
  let currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (currentFieldsetCash?.dragStartHandler) {
    fieldset.removeEventListener(
      'dragstart',
      currentFieldsetCash.dragStartHandler
    );
  }

  if (currentFieldsetCash?.dragOverHandler) {
    fieldset.removeEventListener(
      'dragover',
      currentFieldsetCash.dragOverHandler
    );
  }

  if (currentFieldsetCash?.dropHandler) {
    fieldset.removeEventListener('drop', currentFieldsetCash.dropHandler);
  }

  handlerCash.set(getFieldSetId(fieldset), {
    dragStartHandler: (event) => {
      if (!('dataTransfer' in event)) return;
      event.dataTransfer?.setData('text/plain', id);
    },
    dragOverHandler: (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    dropHandler: (e) => onFieldsetDrop(e as DragEvent, id),
  });

  currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (!currentFieldsetCash) return;

  fieldset.addEventListener('dragstart', currentFieldsetCash.dragStartHandler);
  fieldset.addEventListener('drop', currentFieldsetCash.dropHandler);
  fieldset.addEventListener('dragover', currentFieldsetCash.dragOverHandler);
};

export const setFieldsetAttrs = (
  fieldset: HTMLFieldSetElement,
  id: string,
  color: string
) => {
  fieldset.setAttribute('id', `blob_${id}`);
  fieldset.setAttribute('draggable', `true`);
  fieldset.setAttribute('style', `--color: ${color};`);
  fieldset.classList.add('blob-fieldset');
};

export const setRemoveButton = (fieldset: HTMLFieldSetElement, id: string) => {
  const removeButton = fieldset.querySelector(
    '.remove-blob'
  ) as HTMLButtonElement;
  let currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (currentFieldsetCash?.removeHandler) {
    removeButton.removeEventListener(
      'click',
      currentFieldsetCash.removeHandler
    );
  }

  handlerCash.set(getFieldSetId(fieldset), {
    removeHandler: () => {
      removeBlob(id);
    },
  });

  currentFieldsetCash = handlerCash.get(getFieldSetId(fieldset));
  if (!currentFieldsetCash) return;
  removeButton.addEventListener('click', currentFieldsetCash.removeHandler);
};
