export class Employee {
    constructor(
        public firstName: string,
        public lastName: string
    ) {

    }

    public isFullTime = true;
    public paymentType = 'w2';
    public primaryLanguage = 'English';
}
