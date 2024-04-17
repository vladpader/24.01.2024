abstract class Publisher {
    protected title: string;
    protected author: string;
    protected pubYear: number;
    protected copies: number;
  
    constructor(title: string, author: string, pubYear: number, copies: number) {
      this.title = title;
      this.author = author;
      this.pubYear = pubYear;
      this.copies = copies;
    }
  
    public getTitle(): string {
      return this.title;
    }
  
    public setTitle(title: string): void {
      this.title = title;
    }
  
    public getAuthor(): string {
      return this.author;
    }
  
    public setAuthor(author: string): void {
      this.author = author;
    }
  
    public getPubYear(): number {
      return this.pubYear;
    }
  
    public setPubYear(pubYear: number): void {
      this.pubYear = pubYear;
    }
  
    public getCopies(): number {
      return this.copies;
    }
  
    public setCopies(copies: number): void {
      this.copies = copies;
    }
  }
  
  interface Reception {
    deliver(): void;
    receive(): void;
  }
  
  class Book extends Publisher implements Reception {
    protected pages: number;
  
    constructor(
      title: string,
      author: string,
      pubYear: number,
      copies: number,
      pages: number
    ) {
      super(title, author, pubYear, copies);
      this.pages = pages;
    }
  
    public getPages(): number {
      return this.pages;
    }
  
    public setPages(pages: number): void {
      this.pages = pages;
    }
  
    public deliver(): void {
      if (this.copies > 0) {
        this.copies--;
        console.log("Book is delivered.");
      } else {
        console.log("No more copies to deliver.");
      }
    }
  
    public receive(): void {
      this.copies++;
      console.log("Book is received.");
    }
  }
  
  class Magazine extends Publisher implements Reception {
    protected issue: number;
  
    constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
      super(title, author, pubYear, copies);
      this.issue = issue;
    }
  
    public getIssue(): number {
      return this.issue;
    }
  
    public setIssue(issue: number): void {
      this.issue = issue;
    }
  
    public deliver(): void {
      if (this.copies > 0) {
        this.copies--;
        console.log("Magazine is delivered.");
      } else {
        console.log("No more copies to deliver.");
      }
    }
  
    public receive(): void {
      this.copies++;
      console.log("Magazine is received.");
    }
  }
  
  class Reader {
    protected firstName: string;
    protected lastName: string;
    protected items: Array<Publisher>;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.items = [];
    }
  
    public getFirstName(): string {
      return this.firstName;
    }
  
    public setFirstName(firstName: string): void {
      this.firstName = firstName;
    }
  
    public getLastName(): string {
      return this.lastName;
    }
  
    public setLastName(lastName: string): void {
      this.lastName = lastName;
    }
  
    public getItems(): Array<Publisher> {
      return this.items;
    }
  
    public addItem(item: Publisher): void {
      if (this.items.length < 5) {
        this.items.push(item);
      } else {
        console.log("The reader has reached the maximum number of items.");
      }
    }
  
    public removeItem(item: Publisher): void {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  class Library {
    protected publications: Array<Publisher>;
  
    constructor() {
      this.publications = [];
    }
  
    public addPublication(publication: Publisher): void {
      this.publications.push(publication);
    }
  
    public removePublication(publication: Publisher): void {
      const index = this.publications.indexOf(publication);
      if (index > -1) {
        this.publications.splice(index, 1);
      }
    }
  }
  
  // Testing
  const library = new Library();
  const book1 = new Book("Book Title 1", "Author 1", 2020, 10, 200);
  const book2 = new Book("Book Title 2", "Author 2", 2021, 7, 300);
  const magazine1 = new Magazine("Magazine Title 1", "Editor 1", 2022, 20, 1);
  
  library.addPublication(book1);
  library.addPublication(book2);
  library.addPublication(magazine1);
  
  console.log(library.publications);
  
  const reader = new Reader("John", "Doe");
  
  reader.addItem(book1);
  reader.addItem(book2);
  
  console.log(reader.items);
  
  book1.deliver();
  book2.deliver();
  
  console.log(book1.getCopies());
  console.log(book2.getCopies());
  
  reader.removeItem(book1);
  
  console.log(reader.items);
  