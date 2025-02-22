import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HomePage from '../../components/basicComponents/Home';

export default async function Home(){
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // Redirect to login if user is not authenticated
  }

  return (
    <div>
      <HomePage />
    </div>
  )
}

