class User {
  constructor ( name, email ) {
    this.name = name;
    this.email = email;
  }

  getInfo () {
    console.log(`NAME: ${this.name} \nEMAIL: ${this.email}`)
  }
}

const user = new User("Кайл", "dsfsfd@finals.com");
user.getInfo();