export interface ApiListResult<T> {
    count: number;
    rows: T[];
}
export interface SocketObjectResult<T> {
    operationType: 'insert' | 'update' | 'replace' | 'delete' | 'invalidate';
    document: T;
    collection: string;
    id: string;
    canal: 'users' | 'comapanies' | 'events' | 'contacts' | 'invitations';
}
