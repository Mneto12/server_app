export default interface MakeReports {
    invoke(data: any, model: string): Promise<any>;
}