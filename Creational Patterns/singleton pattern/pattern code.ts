export class Database {
    private static instance: Database;
    private url: string;

    private constructor() {
        this.url = 'http://dbconnection.com';
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const dbconnection1 = Database.getInstance();
const dbconnection2 = Database.getInstance();

console.log('Is DB Instance Same', dbconnection1 === dbconnection2, '\n', dbconnection1, '\n', dbconnection2);
