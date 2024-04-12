"use client"
import React from 'react'
import {useUser} from '@clerk/nextjs'
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { MeetingSetup } from "./meeting-setup";
import { MeetingRoom } from "./meeting-room";
import { useState } from "react";
import { useGetCallById } from "@/hooks/useGetCallById";
import { Loader } from "@/components/ui/loader";

export const Meeting = ({id}: {id: string}) => {
    
    const { user, isLoaded } = useUser();
    const [setupCompleted, setSetupCompleted] = useState(false)
    const {call, isCallLoading} = useGetCallById(id)
    
    if (!isLoaded || isCallLoading) return <Loader />;
    
    return (
        <div className='flex justify-center items-center'>
        <StreamCall call={call}>
            <StreamTheme >
            {
                setupCompleted  ? 
                <MeetingRoom/> :
                <MeetingSetup setSetupCompleted={setSetupCompleted}/> 
            }
            </StreamTheme>
        </StreamCall>
        </div>
        )
    }
    