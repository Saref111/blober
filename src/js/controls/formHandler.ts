import { BlobConfig } from '../blober';
import { blobStorage } from '../localStorageController';
import { generateNewBlobConfig } from '../configBuilder';
import { getFieldset } from './filedsetHandlers';

const DEFAULT_FROM_ELEMENTS_AMOUNT = 4;

const updateBlob = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const [type, id] = target.name.split('_');
  const blob = blobStorage.findEntity((blob: BlobConfig) => blob.id === id);
  if (!blob) {
    return;
  }
  let updatedBlob = { ...blob };
  if (type === 'color') {
    updatedBlob.color = target.value;
  } else if (type === 'seed') {
    updatedBlob.seed = parseInt(target.value, 10);
  } else if (type === 'animation') {
    updatedBlob.animation.play = target.checked;
  } else if (type === 'speed') {
    updatedBlob.animation.speed = parseInt(target.value, 10);
  }
  blobStorage.updateEntity(blob, updatedBlob);
};


export const formHandler = (form: HTMLFormElement) => {
  const addBlobButton = form.querySelector('#add-blob') as HTMLButtonElement;

  const updateView = (e?: Event) => {
    e?.preventDefault();
    const blobs = blobStorage.getEntities();
    const fieldsets = form.querySelectorAll(
      '.blob-fieldset'
    ) as NodeListOf<HTMLFieldSetElement>;

    if (!blobs.length) {
      fieldsets.forEach((el) => el.remove());
      return;
    }

    if (!fieldsets.length) {
      blobs.forEach((blob) => {
        form.insertAdjacentElement('beforeend', getFieldset(blob));
      });
      return;
    }

    fieldsets.forEach((el, i) => {
      const id = el.id.split('_')[1];
      const blob = blobs.find((blob) => blob.id === id);
      if (!blob) {
        el.remove();
        return;
      }
    });

    blobs.forEach((blob, i, a) => {
      const id = blob.id;
      const el = form.querySelector(`#blob_${id}`) as HTMLFieldSetElement;

      if (!el) {
        form.insertAdjacentElement('beforeend', getFieldset(blob));
        return;
      }

      const currentIndex = Array.from(form.children).indexOf(el);
      
      if (i !== currentIndex - DEFAULT_FROM_ELEMENTS_AMOUNT) {
        form.insertBefore(el, form.children[i + DEFAULT_FROM_ELEMENTS_AMOUNT]);
      } 
    });
  };

  addBlobButton.addEventListener('click', () => {
    const newBlobConfig: BlobConfig = generateNewBlobConfig();
    blobStorage.addEntity(newBlobConfig);
  });

  form.addEventListener('reset', (e) => {
    e.preventDefault();
    form.querySelectorAll('.blob-fieldset').forEach((el) => el.remove());
    blobStorage.clear();
  });
  document.addEventListener('update', updateView);
  form.addEventListener('input', updateBlob);
  updateView();
};
