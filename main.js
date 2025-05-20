var firstName = "Emre";
var surName = "Anl";

// let kullanimi sadece tanimlandigi blokta cagirilabilir ornegin;

let x = 10;

if(x>5){
    let y = 20;
    console.log(y); // bu blokda tanimlandigi icin y buradan erisilebilir
}

// console.log(y); // Ama buradan erisilemz cunku if blogunun disindan cagirdik.

// const degerler sadece bir kere deger atanir daha sonra bu deger degistirilmez

const a = 2;
console.log(a);

// a = 2;  burada hata verir cunku bir daha deger atanamaz 