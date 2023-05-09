const PersonBiodata = require('./utils');

const redi = new PersonBiodata(
  'Redi Ahmad Supriyatna',
  'Ciamis',
  'January 13, 2001',
  'Tangerang, Banten, Indonesia'
);

console.log(`Nama: ${redi.getName()}`);
console.log(`Tempat Lahir: ${redi.getBirthPlace()}`);
console.log(`Tanggal Lahir: ${redi.getBirthDate()}`);
console.log(`Alamat: ${redi.getAddress()}`);
