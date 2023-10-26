export interface CreateFilterData {
    createfilter(query: String[]): any;
}

export interface FilterData {
    getAllByFilter(model: string , avancedQuery: any): Promise<[]>;
}