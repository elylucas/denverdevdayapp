
export default class Session {
    public id: number;
    public title: string;
    public speaker: string;
    public speakerId: number;
    public abstract: string;
    public time: string;
    public room: string;

    constructor(fields?) {
        if (fields) {
            this.id = fields.id;
            this.title = fields.title;
            this.speaker = fields.speaker;
            this.speakerId = fields.speakerId;
            this.abstract = fields.abstract;
            this.time = fields.time;
            this.room = fields.room;
        }
    }
}