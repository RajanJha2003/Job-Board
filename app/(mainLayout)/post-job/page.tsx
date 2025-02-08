import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

import ArcJetLogo from "@/public/arcjet.jpg";
import InngestLogo from "@/public/inngest-locale.png";
import Image from 'next/image';


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
      quote:
        "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
      author: "Sarah Chen",
      company: "TechCorp",
    },
    {
      quote:
        "The platform made hiring remote talent incredibly simple. Highly recommended!",
      author: "Mark Johnson",
      company: "StartupX",
    },
    {
      quote:
        "We've consistently found high-quality candidates here. It's our go-to platform for all our hiring needs.",
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

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5">
      <Card className="lg:col-span-8">
        <CardHeader>
          <CardTitle>Hey this is the form</CardTitle>
        </CardHeader>
      </Card>
      
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-xl">Trusted by Industry Leaders</CardTitle>
          <CardDescription>Join thousands of companies hiring top talents</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
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

          <div className='space-y-4'>
            {
                testimonials.map((testimonail,index)=>(
                    <blockquote className='border-l-2 border-primary pl-4' key={index}>
                        <p className='text-sm text-muted-foreground italic'>"{testimonail.quote}"</p>
                       <footer className='mt-2 text-sm font-medium'>
                        - {testimonail.author}, {testimonail.company}
                       </footer>

                    </blockquote>
                ))
            }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page