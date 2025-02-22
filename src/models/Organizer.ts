import type {Event } from '../models/Event';
export interface Organizer {
    id?:number;
    name: string;
    events?: Event[]
}