"use server";
import {z} from 'zod';
import { companySchema, jobSchema, jobSeekerSchema } from './utils/zodSchema';
import { requireUser } from './utils/hooks';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';
import arcjet, { detectBot, shield } from './utils/arcjet';
import { request } from '@arcjet/next';


const aj=arcjet.withRule(
    shield({
        mode:'LIVE'
    })
).withRule(
    detectBot({
        mode:'LIVE',
        allow:[]
    })
)

export async function createCompany(data:z.infer<typeof companySchema>){
    const user=await requireUser();

    const req=await request();

    const decision=await aj.protect(req);

    if(decision.isDenied()){
        throw new Error('Forbidden ')
    }

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


export async function createJobSeeker(data:z.infer<typeof jobSeekerSchema>){
    const user=await requireUser();

    const req=await request();

    const decision=await aj.protect(req);

    if(decision.isDenied()){
        throw new Error('Forbidden ')
    }

    const validateData=jobSeekerSchema.parse(data);

    console.log(validateData);

    await prisma.user.update({
        where:{
            id:user.id
        },
        data:{
            onboardingCompleted:true,
            userType:"COMPANY",
            JobSeeker:{
                create:{
                    ...validateData
                }
            }
        }
    })

    return redirect("/")
}



export async function createJob(data:z.infer<typeof jobSchema>){
    const user=await requireUser();
    
}