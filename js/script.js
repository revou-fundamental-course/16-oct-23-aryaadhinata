console.log('maaf kak aku baru belajar banget ngodingnya jadi maaf kalo masih ada yang nggak enak dilihat');

function UbahNama() {
    var name = '';
    while (name === '') {
        name = prompt('Siapakah nama Anda?');
        if (name === '') {
            alert('Tidak boleh kosong');
        } else {
            document.getElementById('name').innerHTML = name;
        }
    }
}
UbahNama();

function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('user').value;
    const birth = document.getElementById('birth').value;
    const gender = document.querySelector('input[name="gender"]:checked').nextSibling.nodeValue.trim();
    const message = document.getElementById('massage').value;
    const outputMessage = `Nama: ${name}<br>
                            Tanggal lahir: ${birth}<br>
                            Jenis kelamin: ${gender}<br>
                            Pesan: ${message}`;
    document.getElementById('outputBox').innerHTML = outputMessage;
}