import svg64 from "svg64";

export const handleExportSVG = () => {
    const svg = document.querySelector(".screen") as SVGSVGElement;
    const loadSVGButton = document.querySelector("#load-svg") as HTMLButtonElement;
    const copyAsTextButton = document.querySelector("#copy-svg") as HTMLButtonElement;
    const copyAsBase64Button = document.querySelector("#copy-svg-as-base64") as HTMLButtonElement;
    
    copyAsBase64Button.addEventListener("click", () => {
        const svgString = new XMLSerializer().serializeToString(svg);
        const base64 = svg64(svgString);
        navigator.clipboard.writeText(base64);
    });

    copyAsTextButton.addEventListener("click", () => {
        const svgString = new XMLSerializer().serializeToString(svg);
        navigator.clipboard.writeText(svgString);
    });
    
    loadSVGButton.addEventListener("click", () => {
        const svgString = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "blobs.svg";
        a.click();
        URL.revokeObjectURL(url);
    });
};
