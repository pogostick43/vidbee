const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const fileInputButton = document.getElementById('file-input-button');
const previewField = document.getElementById('image-preview');
let uploadedImage = null;
dropZone.addEventListener('dragover', (e) =>
{
    e.preventDefault();
    if (!uploadedImage)
    {
        dropZone.classList.add('active');
    }
});
dropZone.addEventListener('dragleave', () =>
{
    if (!uploadedImage)
    {
        dropZone.classList.remove('active');
    }
});
dropZone.addEventListener('drop', (e) =>
{
    e.preventDefault();
    console.log("image dropped");
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/') && !file.name.endsWith('.webp'))
    {
        fileInput.files = e.dataTransfer.files;
        const event = new Event('change');
        fileInput.dispatchEvent(event);
    }
    else
    {
        const imgPrompt = document.getElementById('img-prompt');
        imgPrompt.textContent = 'Only image files are accepted';
    }
});
fileInputButton.addEventListener('click', () =>
{
    fileInput.click();
});
fileInput.addEventListener('change', () =>
{
    console.log("CHANGE");
    if (fileInput.files.length > 0)
    {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) =>
        {
            const imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.style.objectFit = 'contain';
            previewField.innerHTML = '';
            previewField.appendChild(imagePreview);
        };
        reader.readAsDataURL(file);
    }
});
