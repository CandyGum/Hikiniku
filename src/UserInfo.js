//export const UserInfo = () => {

class User {

    constructor( name, number, deposit) {
        this.name = name;
        this.number = number;
        this.deposit = deposit;
    }
  }
  const users = [
    new User('太郎', 123, 10000),
    new User('次郎', 456, 50000),
    new User('三郎', 789, 100000),
  ];
  
  export default users;
//}
