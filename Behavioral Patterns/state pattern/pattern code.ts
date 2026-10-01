export type ROLES = 'admin' | 'librarian' | 'student';

export type BOOK_TYPE = 'confidential' | 'common' | 'staff';

const PERMISSION_STATE: Record<ROLES, BOOK_TYPE[]> = {
    admin: ['confidential', 'common', 'staff'],
    librarian: ['common', 'staff'],
    student: ['common'],
};


class Book {
    private user_role: ROLES;

    constructor(user_role: ROLES) {
        this.user_role = user_role;
    }

    getBook(book_type: BOOK_TYPE) {
        const permissions = PERMISSION_STATE?.[this.user_role];
        if (!permissions) {
            return 'No Access';
        }

        const isAllowed = permissions.includes(book_type);
        if (!isAllowed) {
            return 'No Access';
        }

        return `${book_type} Access`;
    }
}
let book;
let instance;

instance = new Book('student');
book = instance.getBook('common');
console.log(book);
instance = new Book('student');
book = instance.getBook('confidential');
console.log(book);
instance = new Book('student');
book = instance.getBook('staff');
console.log(book, '\n\n');



instance = new Book('admin');
book = instance.getBook('common');
console.log(book);
instance = new Book('admin');
book = instance.getBook('confidential');
console.log(book);
instance = new Book('admin');
book = instance.getBook('staff');
console.log(book, '\n\n');



instance = new Book('librarian');
book = instance.getBook('common');
console.log(book);
instance = new Book('librarian');
book = instance.getBook('confidential');
console.log(book);
instance = new Book('librarian');
book = instance.getBook('staff');
console.log(book);