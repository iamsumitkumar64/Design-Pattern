export class Database {
    private url: string;

    constructor(url: string) {
        this.url = url;
        return this;
    }
}

const dbconnection1 = new Database('http://dbconnection1.com');
const dbconnection2 = new Database('http://dbconnection2.com');

console.log('Is DB Instance Same', dbconnection1 === dbconnection2, '\n', dbconnection1, '\n', dbconnection2);
