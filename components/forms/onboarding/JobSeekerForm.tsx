"use client";

import { jobSeekerSchema } from '@/app/utils/zodSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import PDFImage from '@/public/pdf.png'
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { UploadDropzone } from '@/components/general/UploadThingReExport';
import {toast} from 'sonner'

const JobSeekerForm = () => {
  const form=useForm<z.infer<typeof jobSeekerSchema>>({
    resolver:zodResolver(jobSeekerSchema),
    defaultValues:{
      about:"",
      resume:"",
      name:""
    }
  })

  const [pending,setPending]=useState(false);
  return (
    <Form {...form}>
      <form className='space-y-6'>
        <FormField control={form.control} name='name' render={({field})=>(
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder='Enter your full name' {...field} />
            </FormControl>
          </FormItem>
        )} />

<FormField control={form.control} name='about' render={({field})=>(
          <FormItem>
            <FormLabel>Short Bio</FormLabel>
            <FormControl>
              <Textarea placeholder='Tell us about yourself... ' className='resize-none' {...field} />
            </FormControl>
          </FormItem>
        )} />

<FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume (PDF)</FormLabel>
              <FormControl>
                <div>
                  {field.value ? (
                    <div className="relative w-fit">
                      <Image
                        src={PDFImage}
                        alt="Company Logo"
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 "
                        onClick={() => field.onChange("")}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint="resumeUploader"
                      onClientUploadComplete={(res) => {
                        field.onChange(res[0].url);
                        toast.success("Logo uploaded successfully!");
                      }}
                      onUploadError={() => {
                        toast.error("Something went wrong. Please try again.");
                      }}
                      className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-primary"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </form>

    </Form>
  )
}

export default JobSeekerForm