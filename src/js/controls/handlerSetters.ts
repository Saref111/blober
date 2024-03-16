import { BlobConfig } from '../blober';
import { blobStorage } from '../localStorageController';

let mouseOverHandler: any = null;
let mouseOutHandler: any = null;
let dragStartHandler: any = null;
let dragOverHandler: any = null;
let dropHandler: any = null;
let removeHandler: any = null;

const removeBlob = (id: string) => {
  const blob = blobStorage.findEntity((blob: BlobConfig) => blob.id === id);
  if (!blob) {
    return;
  }
  blobStorage.removeEntity(blob);
};

const onFieldsetDrop = (event: DragEvent, id: string) => {
  event.preventDefault();
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

export const setMouseOver = (fieldset: HTMLFieldSetElement) => {
  if (mouseOverHandler) {
    fieldset.removeEventListener('mouseover', mouseOverHandler);
  }
  if (mouseOutHandler) {
    fieldset.removeEventListener('mouseout', mouseOutHandler);
  }

  mouseOverHandler = () => {
    const [_, id] = fieldset.id.split('_');
    const group = document.getElementById(`${id}`);
    if (!group) return;
    group.classList.add('hover');
  };
  mouseOutHandler = () => {
    const [_, id] = fieldset.id.split('_');
    const group = document.getElementById(`${id}`);
    if (!group) return;
    group.classList.remove('hover');
  };

  fieldset.addEventListener('mouseover', mouseOverHandler);
  fieldset.addEventListener('mouseout', mouseOutHandler);
};

export const setDragNDropHandlers = (
  fieldset: HTMLFieldSetElement,
  id: string
) => {
  if (dragStartHandler) {
    fieldset.removeEventListener('dragstart', dragStartHandler);
  }

  if (dragOverHandler) {
    fieldset.removeEventListener('dragover', dragOverHandler);
  }

  if (dropHandler) {
    fieldset.removeEventListener('drop', dropHandler);
  }

  dragStartHandler = (event: DragEvent) => {
    event.dataTransfer?.setData('text/plain', id);
  };

  dropHandler = (e: DragEvent) => onFieldsetDrop(e, id);

  dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
  };

  fieldset.addEventListener('dragstart', dragStartHandler);
  fieldset.addEventListener('drop', dropHandler);
  fieldset.addEventListener('dragover', dragOverHandler);
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

  if (removeHandler) {
    removeButton.removeEventListener('click', removeHandler);
  }

  removeHandler = () => removeBlob(id);

  removeButton.addEventListener('click', removeHandler);
};
