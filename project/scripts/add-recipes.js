const fileInput = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', function (event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        const file = files[0];
        // Create a temporary URL for the file
        const objectUrl = URL.createObjectURL(file);

        // Set the image source to the temporary URL
        imagePreview.src = objectUrl;
        imagePreview.style.display = 'block';

        // Optional: Free up memory when the image has loaded
        imagePreview.onload = function () {
            URL.revokeObjectURL(objectUrl);
        }
    }
});