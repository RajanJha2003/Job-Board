import { prisma } from '@/app/utils/db'
import React from 'react'
import { EmptyState } from './EmptyState';
import JobCard from './JobCard';

async function getData(){
    const data=await prisma.jobPost.findMany({
        where:{
            status:"ACTIVE"
        },
        select:{
            jobTitle:true,
            id:true,
            salaryFrom:true,
            salaryTo:true,
            employmentType:true,
            location:true,
            createdAt:true,
            
            company:{
                select:{
                    name:true,
                    logo:true,
                    location:true,
                    about:true
                }
            }
        },
        orderBy:{
            createdAt:'desc'
        }
    })

    return data;
}

const JobListings = async() => {
    const data=await getData();
  return (
   <>
   {
    data.length>0 ? (
        <div className='flex flex-col gap-6'>
        {
            data.map((job)=>(
                <JobCard key={job.id} job={job} />
            ))
        }
    </div>
    ):(
        <EmptyState
          title="No jobs found"
          description="Try searching for a different job title or location."
          buttonText="Clear all filters"
          href="/"
        />
    )
   }
   </>
  )
}

export default JobListings