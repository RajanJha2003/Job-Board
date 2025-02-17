import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='grid lg:grid-cols-[1fr,400px] gap-8 '>
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className='text-3xl font-bold'>Marketing Manager</h1>

                    <div className="flex items-center gap-2 mt-2">
                        <p className='font-medium'>RJ Tech</p>
                        <span className='hidden md:inline text-muted-foreground'>*</span>
                        <Badge className='rounded-full ' variant={"secondary"}>
                            Full Time
                        </Badge>
                        <span className='hidden md:inline text-muted-foreground'>*</span>
                        <Badge>
                            India
                        </Badge>
                    </div>
                </div>
                <Button variant={"outline"}>
                    <Heart className='size-4'  /> Save Job
                </Button>
            </div>
        </div>

    </div>
  )
}

export default page