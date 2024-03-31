import * as mongodb from "mongodb";

export interface RecordEntry {
    checkinRecord: string;  // Assuming these are stored as strings; adjust the type as necessary
    checkoutRecord: string;
    userId: mongodb.ObjectId;  // Using MongoDB's ObjectId for user identification
    timespent: string;
}

export interface Zone {
    zonename: string;
    steps: string[];
    qrcode: string;
    lastcheckin: string;
    lastcheckout: string;
    timespent: string;
    record: RecordEntry[]; // Array of RecordEntry objects
    assignedusers: mongodb.ObjectId[];
    showRecord?: boolean;
    _id: mongodb.ObjectId;
}
