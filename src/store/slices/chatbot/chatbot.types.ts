export interface IChatMessage {
    id: string;
    role: 'user' | 'ai';
    content: string;
    timestamp: number;
}
