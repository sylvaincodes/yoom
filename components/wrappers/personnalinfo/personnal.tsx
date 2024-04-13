"use client";
import React from 'react'
import { PersonnalCard } from './personnal-card';
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
  
export const Personnal = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();

  const meetingId = user?.id ? user.id : "nothing" ;
  const { call } = useGetCallById(meetingId);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    const link = `/meeting/${meetingId}?personal=true`;
    window.open(link, '_blank');

  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <div className="grid grid-rows-[auto_auto] gap-4" >
      <PersonnalCard startRoom={startRoom} meetingId={meetingId} meetingLink={meetingLink} user={user} />
    </div>
  )
}

