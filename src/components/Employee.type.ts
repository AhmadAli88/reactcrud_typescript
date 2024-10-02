export interface IEmployee{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}
export const dummyEmployee : IEmployee[]=[{
    id: new Date().toJSON().toString(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com"
}]
export enum PageEnum{
    list,
    add
}