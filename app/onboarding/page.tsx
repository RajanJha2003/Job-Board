import OnBoardingForm from '@/components/forms/onboarding/OnBoardingForm'
import React from 'react'
import { prisma } from '../utils/db';
import { redirect } from 'next/navigation';
import { requireUser } from '../utils/hooks';


async function checkIfOnboardingCompleted(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted === true) {
    redirect("/");
  }
}

const page = async() => {
  const session = await requireUser();

  await checkIfOnboardingCompleted(session.id as string);
  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center py-10 '>
        <OnBoardingForm />

    </div>
  )
}

export default page