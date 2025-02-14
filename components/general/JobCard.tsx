import Link from "next/link";
import React from "react";
import { Card, CardHeader } from "../ui/card";
import { MapIcon, MapPin, User2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/app/utils/formatCurrency";

interface iAppProps {
  job: {
    id: string;
    createdAt: Date;
    company: {
      name: string;
      location: string;
      logo: string;
      about: string;
    };
    jobTitle: string;
    employmentType: string;
    location: string;
    salaryFrom: number;
    salaryTo: number;
  };
}

const JobCard = ({ job }: iAppProps) => {
  return (
    <Link href={"/job"}>
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={job.company.logo}
              alt={job.company.name}
              width={48}
              height={48}
              className="size-12 rounded-lg"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold">{job.jobTitle}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {job.company.name}
                </p>
                <span className="hidden md:inline text-muted-foreground">
                  *
                </span>
                <Badge className="rounded-full" variant={"secondary"}>
                  {job.employmentType}
                </Badge>
                <span className='hidden md:inline text-muted-foreground'>*</span>
                <Badge className="rounded-full">
                    {job.location}
                </Badge>
                <span className='hidden md:inline text-muted-foreground'>*</span>
                <p className="text-sm text-muted-foreground">{formatCurrency(job.salaryFrom)} - {formatCurrency(job.salaryTo)}</p>
              </div>
            </div>
            <div className="md:ml-auto">
                <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <h1>{job.location}</h1>
                </div>
                <p>{job.createdAt.toString()}</p>

            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default JobCard;
