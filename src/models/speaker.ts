
export default class Speaker {
    public id: number;
    public name: string;
    public blog: string;
    public twitter: string;
    public bio: string;

    constructor(fields?) {
        if (fields) {
            this.id = fields.id;
            this.name = fields.name;
            this.blog = fields.blog;
            this.twitter = fields.twitter;
            this.bio = fields.bio;
        }
    }
}