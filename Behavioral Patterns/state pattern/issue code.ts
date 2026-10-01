type ROLES = 'admin' | 'librarian' | 'student';

type BOOK_TYPE = 'confidential' | 'common' | 'staff';

class Book {
    private user_role: ROLES;

    constructor(user_role: ROLES) {
        this.user_role = user_role;
    }

    getBook(book_type: BOOK_TYPE) {
        if (this.user_role == 'admin') {
            return 'all';
        }
        else if (this.user_role == 'librarian' && (book_type == 'common' || book_type == 'staff')) {
            const isCommon = book_type == 'common';
            const isStaff = book_type == 'staff';
            return isCommon ? 'Common Books' : isStaff ? 'Staff Books' : 'No Access';
        } else if (this.user_role == 'student' && book_type == 'common') {
            return 'Common Books';
        } else {
            return 'No Access';
        }
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
console.log(book);



instance = new Book('admin');
book = instance.getBook('common');
console.log(book);
instance = new Book('admin');
book = instance.getBook('confidential');
console.log(book);
instance = new Book('admin');
book = instance.getBook('staff');
console.log(book);



instance = new Book('librarian');
book = instance.getBook('common');
console.log(book);
instance = new Book('librarian');
book = instance.getBook('confidential');
console.log(book);
instance = new Book('librarian');
book = instance.getBook('staff');
console.log(book);