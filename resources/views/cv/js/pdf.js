// include the jsPDF library


// get the HTML element to convert to PDF
const element = document.querySelector('.export_cv');

// create a new jsPDF instance
const doc = new jsPDF('p', 'mm', 'a4');

// set the height and width of the PDF page
const width = doc.internal.pageSize.getWidth();
const height = doc.internal.pageSize.getHeight();

// use the html2canvas library to render the HTML element as an image
html2canvas(element).then((canvas) => {

    // add the rendered image to the PDF document
    const imgData = canvas.toDataURL('image/png');
    doc.addImage(imgData, 'PNG', 0, 0, width, height);

    // save the PDF document
    doc.save('cv.pdf');
});






