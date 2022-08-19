jmlAngkot = 10;
angkotBeroperasi = 6;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){ 
        console.log(`Angkot No ${noAngkot} Beroperasi Dengan Baik`);
    }else{
        console.log(`Angkot No ${noAngkot} Sedang Tidak Beroperasi`);
    }
}