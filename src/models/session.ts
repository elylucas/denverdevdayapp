
export interface Session {
    id: number;
    title: string;
    speakers: Array<any>;
    abstract: string;
    time: string;
    room: string;
}

export default Session;