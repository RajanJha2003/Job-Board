import {z} from 'zod';


export const companySchema=z.object({
    name:z.string().min(2,"Company name must be at least 2 characters"),
    location:z.string().min(1,"Location must be atleast 1 character"),
    about:z.string().min(10,"You must provide few details about the company"),
    logo:z.string().min(1,"Please upload a logo"),
    website:z.string().url("Please provide website url"),
    xAccount:z.string().optional(),
    

})