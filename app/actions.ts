"use server";
import {z} from 'zod';
import { companySchema } from './utils/zodSchema';
import { requireUser } from './utils/hooks';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';

export async function createCompany(data:z.infer<typeof companySchema>){
    const user=await requireUser();

    const validateData=companySchema.parse(data);

    console.log(validateData);

    await prisma.user.update({
        where:{
            id:user.id
        },
        data:{
            onboardingCompleted:true,
            userType:"COMPANY",
            Company:{
                create:{
                    ...validateData
                }
            }
        }
    })

    return redirect("/")
}