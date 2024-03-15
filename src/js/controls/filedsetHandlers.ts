import { BlobConfig } from '../blober';
import { blobStorage } from '../localStorageController';

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

const setDragNDropHandlers = (fieldset: HTMLFieldSetElement, id: string) => {
  fieldset.addEventListener('dragstart', (event: DragEvent) => {
    event.dataTransfer?.setData('text/plain', id);
  });

  fieldset.addEventListener('drop', (e) => onFieldsetDrop(e, id));

  fieldset.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
};

export const getFieldset = ({ id, color, seed }: BlobConfig) => {
  const fieldset = document.createElement('fieldset');
  fieldset.setAttribute('id', `blob_${id}`);
  fieldset.setAttribute('draggable', `true`);
  fieldset.setAttribute('style', `--color: ${color};`);
  fieldset.classList.add('blob-fieldset');
  fieldset.innerHTML = `
        <label>
            <span>Color:</span>
            <input value="${color}" type="color" name="color_${id}" id="color_${id}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${seed}" type="number" name="seed_${id}" id="seed_${id}" />
        </label>
        <button type="button" class="remove-blob">Remove</button>
    `;
  const removeButton = fieldset.querySelector(
    '.remove-blob'
  ) as HTMLButtonElement;
  removeButton.addEventListener('click', () => removeBlob(id));

  setDragNDropHandlers(fieldset, id);
  return fieldset;
};
