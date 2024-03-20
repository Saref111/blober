import { blobStorage } from "../localStorageController";

export const handleBGColorChange = () => {
  const colorInput = document.getElementById('bg-color') as HTMLInputElement;
  colorInput.value = blobStorage.getBGColor();

  colorInput.addEventListener('input', () => {
    blobStorage.setBGColor(colorInput.value);
  });

  document.addEventListener('update', () => {
    colorInput.value = blobStorage.getBGColor();
  });
};
