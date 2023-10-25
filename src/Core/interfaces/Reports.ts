export default interface MakeReports {
    invoke(model: string, query: any): Promise<any>;
}