import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import ArcJetLogo from "@/public/arcjet.jpg";
import InngestLogo from "@/public/inngest-locale.png";
import Image from 'next/image';
import CreateJobForm from '@/components/forms/CreateJobForm';
import { prisma } from '@/app/utils/db';
import { redirect } from 'next/navigation';
import { requireUser } from '@/app/utils/hooks';

const companies = [
  { id: 0, name: "ArcJet", logo: ArcJetLogo },
  { id: 1, name: "Inngest", logo: InngestLogo },
  { id: 2, name: "ArcJet", logo: ArcJetLogo },
  { id: 3, name: "Inngest", logo: InngestLogo },
  { id: 4, name: "ArcJet", logo: ArcJetLogo },
  { id: 5, name: "Inngest", logo: InngestLogo },
];

const testimonials = [
  {
    quote: "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
    author: "Sarah Chen",
    company: "TechCorp",
  },
  {
    quote: "The platform made hiring remote talent incredibly simple. Highly recommended!",
    author: "Mark Johnson",
    company: "StartupX",
  },
  {
    quote: "We've consistently found high-quality candidates here. It's our go-to platform for all our hiring needs.",
    author: "Emily Rodriguez",
    company: "InnovateNow",
  },
];

const stats = [
  { value: "10k+", label: "Monthly active job seekers" },
  { value: "48h", label: "Average time to hire" },
  { value: "95%", label: "Employer satisfaction rate" },
  { value: "500+", label: "Companies hiring monthly" },
];


async function getCompany(userId:string){
  const data=await prisma.company.findUnique({
    where:{
      userId:userId
    },
    select:{
      name:true,
      location:true,
      about:true,
      logo:true,
      xAccount:true,
      website:true
    }
  })

  if(!data){
    redirect("/");
  }

  return data;
}

const Page = async() => {
  const user=await requireUser();

  const data=await getCompany(user.id as string);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
      <div className="lg:col-span-8">
        <CreateJobForm companyLocation={data.location} companyName={data.name} companyAbout={data.about} companyLogo={data.logo} companyWebsite={data.website} companyXAccount={data.xAccount}  />
      </div>
      
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-xl">Trusted by Industry Leaders</CardTitle>
          <CardDescription>Join thousands of companies hiring top talents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {companies.map((company) => (
              <div key={company.id} className="flex justify-center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <blockquote className="border-l-2 border-primary pl-4" key={index}>
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                <footer className="mt-2 text-sm font-medium">
                  - {testimonial.author}, {testimonial.company}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg bg-muted p-4">
                <h4 className="text-2xl font-bold">{stat.value}</h4>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page