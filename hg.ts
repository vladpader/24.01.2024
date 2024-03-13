// 


class User {
  private static count: number = 0;
  private name: string;
  private login: string;
  private password: string;
  private grade: number;

  constructor(name: string, login: string, password: string, grade: number) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.grade = grade;
    User.count++;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getLogin(): string {
    return this.login;
  }

  getPassword(): string {
    return '*'.repeat(this.password.length);
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getGrade(): string {
    return 'Неизвестное свойство grade';
  }

  setGrade(grade: number): void {

  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}`);
  }

  eq(user: User): boolean {
    return this.grade === user.grade;
  }

  lt(user: User): boolean {
    return this.grade < user.grade;
  }

  gt(user: User): boolean {
    return this.grade > user.grade;
  }
}

class SuperUser extends User {
  private static count: number = 0;
  private role: string;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password, 0);
    this.role = role;
    SuperUser.count++;
  }

  getRole(): string {
    return this.role;
  }

  setRole(role: string): void {
    this.role = role;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
  }
}

const user1 = new User('Vlad Aksenov', 'vlad', '5361', 3);
const user2 = new User('denis Vlasov', 'denis', '0543', 2);
const user3 = new User('Zahar Sovenski', 'zahar', '2312', 3);
const admin = new SuperUser('Igor Gulter', 'Igor', '4343', 'admin');

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Denis Denisovich';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

user2.login = 'den';

console.log(user2.grade);
admin.grade = 10;