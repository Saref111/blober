import { BlobConfig } from './blober';
import { buildConfig } from './configBuilder';
import { generateHexColor } from './helpers';
import { blobStorage } from './localStorageController';

const getFieldset = (id: number) => {
  return `
        <fieldset class="blob-fieldset">
            <label>
                <span>Color:</span>
                <input value="${generateHexColor()}" type="color" name="color_${id}" id="color_${id}" />
            </label>
        </fieldset>`;
};

export const formHandler = (
  form: HTMLFormElement,
  generateBlobs: (c: BlobConfig[]) => void
) => {
  const addBlobButton = form.querySelector('#add-blob') as HTMLButtonElement;

  const updateView = (e: Event) => {
    e.preventDefault();
    const configsArray = buildConfig(form);
    generateBlobs(configsArray);
  };

  const dispatchUpdate = () => {
    form.dispatchEvent(new Event('update'));
    console.log('dispatched update event');
    
  };

  addBlobButton.addEventListener('click', () => {
    const newFieldsetId = form.querySelectorAll('.blob-fieldset').length;
    form.insertAdjacentHTML('beforeend', getFieldset(newFieldsetId));
    dispatchUpdate();
  });

  form.addEventListener('reset', e => {
    e.preventDefault();
    blobStorage.clear();
    form.querySelectorAll('.blob-fieldset').forEach(el => el.remove());
    form.insertAdjacentHTML('beforeend', getFieldset(0));
    dispatchUpdate();
  });
  form.addEventListener('input', dispatchUpdate);
  form.addEventListener('update', updateView);

  form.insertAdjacentHTML('beforeend', getFieldset(0));
  dispatchUpdate();
};
