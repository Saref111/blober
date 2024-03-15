import { BlobConfig } from './blober';
import { blobStorage } from './localStorageController';
import { generateNewBlobConfig } from './configBuilder';

const getFieldset = ({id, color, seed}: BlobConfig) => {
  return `
        <fieldset class="blob-fieldset">
            <label>
                <span>Color:</span>
                <input value="${color}" type="color" name="color_${id}" id="color_${id}" />
            </label>
            <label>
              <span>Seed:</span>
              <input value="${seed}" type="text" name="seed_${id}" id="seed_${id}" />
            </label>
            <button class="remove-blob" data-id="${id}">Remove TODO</button>
        </fieldset>`;
};

export const formHandler = (form: HTMLFormElement) => {
  const addBlobButton = form.querySelector('#add-blob') as HTMLButtonElement;

  const updateView = (e?: Event) => {
    e?.preventDefault();
    const blobs = blobStorage.getEntities();
    form.querySelectorAll('.blob-fieldset').forEach(el => el.remove());
    blobs.forEach(blob => {
      form.insertAdjacentHTML('beforeend', getFieldset(blob));
    });
  };

  addBlobButton.addEventListener('click', () => {
    const newBlobConfig: BlobConfig = generateNewBlobConfig();
    blobStorage.addEntity(newBlobConfig);
  });

  form.addEventListener('reset', e => {
    e.preventDefault();
    blobStorage.clear();
    form.querySelectorAll('.blob-fieldset').forEach(el => el.remove());
  });
  document.addEventListener('update', updateView);
  updateView();
};
