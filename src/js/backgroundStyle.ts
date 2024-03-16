export const handleBGColorChange = () => {
  const colorInput = document.getElementById('bg-color') as HTMLInputElement;
  const imageInput = document.getElementById('bg-img') as HTMLInputElement;

  colorInput.addEventListener('input', () => {
    const svg = document.querySelector('.screen') as HTMLElement;
    // <rect width="100%" height="100%" fill="green" />
    const rectElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'rect'
    );
    rectElement.setAttribute('width', '100%');
    rectElement.setAttribute('height', '100%');
    svg.insertAdjacentElement('afterbegin', rectElement);
  });

  const fileReader = new FileReader();

  fileReader.onload = (event) => {
    const svg = document.querySelector('.screen') as HTMLElement;
    const svgImageElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'image'
    );
    svgImageElement.setAttribute('x', '0');
    svgImageElement.setAttribute('y', '0');
    svgImageElement.setAttribute('width', '100%');
    svgImageElement.setAttribute('height', '100%');
    svgImageElement.setAttribute('href', event.target?.result as string);

    svg.insertAdjacentElement('afterbegin', svgImageElement);
  };

  imageInput.addEventListener('input', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      fileReader.readAsDataURL(file);
    }
  });
};
