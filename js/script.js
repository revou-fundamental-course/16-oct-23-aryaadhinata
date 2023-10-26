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
