class PersonBiodata {

  /**
   * 
   * @param {string} name Name of the person 
   * @param {string} birthPlace Person's place of birth 
   * @param {string} birthDate Person's date of birth with format "Month Date, Year"
   * @param {string} address Person's address
   */
  constructor(name, birthPlace, birthDate, address) {
    this.name = name;
    this.birthPlace = birthPlace;
    this.birthDate = new Date(birthDate).toLocaleString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getBirthPlace() {
    return this.birthPlace;
  }

  getBirthDate() {
    return this.birthDate;
  }

  getAddress() {
    return this.address;
  }
}

module.exports = PersonBiodata;
