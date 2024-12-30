let hediyeFikirleri = JSON.parse(localStorage.getItem("Hediye Fikirleri")) || [];
function saveFikirler(){
    localStorage.setItem("Hediye Fikirleri", JSON.stringify(hediyeFikirleri));
}
function fikirEkle(){
    const fikir = prompt("Hediye Fikri Yaz:");
    if(!fikir){
        alert("Geçerli bir fikir yazmadın.");
        return nextAction();
    }
    hediyeFikirleri.push(fikir);
    saveFikirler();
    alert("Hediye Fikri Kaydedildi.");
    return nextAction();
}
function fikirleriListele(){
    if(hediyeFikirleri.length === 0){
        alert("Henüz bir fikir eklemedin.");
    }
    else{
        const liste = hediyeFikirleri.map((fikir, i) => `${i + 1}. ${fikir}`).join("\n");
        alert(`Hediye Fikirlerin:\n\n${liste}`);
    }
    return nextAction();
}
function fikirSil(){
    if (hediyeFikirleri.length === 0) {
        alert("Silinecek bir hediye fikrin yok.");
        return nextAction();
    }
    const liste = hediyeFikirleri.map((fikir, i) => `${i + 1}. ${fikir}`).join("\n");
    const value = prompt(`Silmek istediğiniz fikrin numarasını yaz:\nVazgeçmek için X'e bas.\n\n${liste}`);
    if (value.toLowerCase() === "x"){
        return nextAction();
    }
    const i = parseInt(value) - 1;
    if (isNaN(i) || i < 0 || i >= hediyeFikirleri.length){
        alert("Geçersiz numara girdin.");
        return fikirSil();
    }
    hediyeFikirleri.splice(i, 1);
    saveFikirler();
    alert("Hediye Fikri Silindi.");
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if(value === "e"){
        return mainMenu();
    }
    else if (value === "h"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Hediye fikirlerini listele\n2- Yeni fikir ekle\n3- Fikir sil\n4- Çıkış yap`);
    if (value === "1"){
        return fikirleriListele();
    }
    else if (value === "2"){
        return fikirEkle();
    }
    else if (value === "3"){
        return fikirSil();
    }
    else if (value === "4"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptın.");
        return mainMenu();
    }
}
mainMenu();