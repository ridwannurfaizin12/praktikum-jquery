/** 
 * kode vanilla Javacript(javascriptmurni) untuk menambahkan value 
 * pada elemen html
 */
document.getElementById('nama').innerHTML = 'Ridwan';

/**
 * kode jquery untuk menambahkan value
 * pada elemen html
 */
$('#nim').html('20190140125');

/**
 * Jquery menggunakan selector sama seperti css
 * . untuk class
 * # untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag 
 * misal: <button></button maka tinggal tulisan button
 * dalam kode berikut, kita akan menampilka console.log saat document ready
 */

$(function() {
    console.log("Hello");
});

//kode Jquery untuk menyembunyikan elemen
$("#hide").on("click", function(){
    $("#nama").hide();
});

//kode Jquery untuk menampilkan kembali elemen
$("#show").on("click", function() {
    $("#nama").show();
});

//coba ini
$("#toggle").on("click", function() {
    $("#nama").toggle();
});

//kode Jquery untuk Fade In Elemen Html
$("#fadeIn").on("click", function() {
    $("#tanggal").fadeIn();
});

// kode Jquery untuk Fade Out Elemen HTML
$("#fadeOut").on("click", function() {
    $("#tanggal").fadeOut();
});

// coba ini
$("#fadeToggle").on("click", function() {
    $("#tanggal").fadeToggle();
});

// kode Jquery untuk Slide Up Elemen Html
$("#slideUp").on("click", function() {
    $("#img").slideUp();
});

// kode Jquery untuk Slide Down Elemen HTML
$("#slideDown").on("click", function() {
    $("#img").slideDown();
});

// coba ini
$("#slideToggle").on("click", function() {
    $("#img").slideToggle();
});


