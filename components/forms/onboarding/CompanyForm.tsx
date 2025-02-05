import { Form, FormField } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'

const CompanyForm = () => {

    const form=useForm
  return (
    <Form>
        <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grdi-cols-2 gap-6'>
                <FormField />

            </div>
        </form>
    </Form>
  )
}

export default CompanyForm