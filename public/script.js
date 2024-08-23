document.getElementById('learningOutcomeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let grade = document.getElementById('grade').value;
    let subject = document.getElementById('subject').value;
    let order = document.getElementById('order').value;

    let filename = 'G' + grade + ' '  + subject + ' ' + order.padStart(2, '0');

    let link = `sources/${filename}.pdf`

    document.getElementById("pdf_frame").setAttribute("src", link)
});
