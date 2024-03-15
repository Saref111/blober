import { BlobConfig } from '../blober';
import { blobStorage } from '../localStorageController';
import { generateNewBlobConfig } from '../configBuilder';
import { getFieldset } from './filedsetHandlers';

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
  }
  blobStorage.updateEntity(blob, updatedBlob);
};

export const formHandler = (form: HTMLFormElement) => {
  const addBlobButton = form.querySelector('#add-blob') as HTMLButtonElement;

  const updateView = (e?: Event) => {
    e?.preventDefault();
    const blobs = blobStorage.getEntities();
    form.querySelectorAll('.blob-fieldset').forEach((el) => el.remove());
    blobs.forEach((blob) => {
      form.insertAdjacentElement('beforeend', getFieldset(blob));
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
