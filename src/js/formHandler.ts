import { BlobConfig } from './blober';
import { blobStorage } from './localStorageController';
import { HexColor } from './helpers';
import { generateNewBlobConfig } from './configBuilder';

const removeBlob = (id: string) => {
  const blob = blobStorage.findEntity((blob: BlobConfig) => blob.id === id);
  if (!blob) {
    return;
  }
  blobStorage.removeEntity(blob);
};

const getFieldset = ({ id, color, seed }: BlobConfig) => {
  const fieldset = document.createElement('fieldset');
  fieldset.classList.add('blob-fieldset');
  fieldset.innerHTML = `
      <label>
          <span>Color:</span>
          <input value="${color}" type="color" name="color_${id}" id="color_${id}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${seed}" type="text" name="seed_${id}" id="seed_${id}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `;
  const removeButton = fieldset.querySelector(
    '.remove-blob'
  ) as HTMLButtonElement;
  removeButton.addEventListener('click', () => removeBlob(id));
  return fieldset;
};

const updateBlob = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const [type, id] = target.name.split('_');
  const blob = blobStorage.findEntity((blob: BlobConfig) => blob.id === id);
  if (!blob) {
    return;
  }
  let updatedBlob = { ...blob };
  if (type === 'color') {
    updatedBlob.color = target.value as HexColor;
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
    blobStorage.clear();
    form.querySelectorAll('.blob-fieldset').forEach((el) => el.remove());
  });
  document.addEventListener('update', updateView);
  form.addEventListener('input', updateBlob);
  updateView();
};
