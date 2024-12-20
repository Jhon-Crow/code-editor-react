export interface ApiResponseObjInterface {
        status: 'success' | 'error';
        output?: string;
        error?: string;
}