
export default class Sponsor {
    public id: number;
    public name: string;
    public link: string;
    public about: string;

    constructor(fields?) {
        if (fields) {
            this.id = fields.id;
            this.name = fields.name;
            this.link = fields.link;
            this.about = fields.about;
        }
    }
}