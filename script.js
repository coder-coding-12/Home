// Interactive Drag-and-Drop Zone Functionality
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');

// Highlight drag area when dragging files over it
['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('drag-over');
  }, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
  }, false);
});

// Handle dropped files
dropZone.addEventListener('drop', (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
});

// Handle manual file browse selection
fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    if (file.type === 'application/pdf') {
      alert(`Selected PDF: ${file.name}\nRedirecting to editor workspace...`);
      // Here you can route the file to your password encryption script
    } else {
      alert('Please select a valid PDF file.');
    }
  }
}