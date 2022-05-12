interface User {
  name: string;
  id: number;
}

class Test {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

console.log('test');

const testUser: any = new Test("Morphy", 1);
