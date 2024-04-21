function toggleGrayscale() {
    const style = document.createElement('style');
    style.innerHTML = 'html { filter: grayscale(100%); }';
    document.head.appendChild(style);
}

toggleGrayscale();