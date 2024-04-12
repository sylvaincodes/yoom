import { HoverEffect } from '@/components/ui/hover-effect'
import React from 'react'

export const MeetingActions = () => {
  return (
    <HoverEffect items={cards} />
  )
}

export const cards = [
    {
      color:"bg-meeting",
      icon:"/icons/plus.svg",
      title: "créer une réunion",
      description:
      "configurer un enregistrement.",
      link: "https://stripe.com",
      option: "isInstantMeeting",
    },{
      color:"bg-primary-400",
      icon:"/icons/meeting.svg",
      title: "joindre une réunion",
      description: "via un lien d'invitation.",
      link: "https://stripe.com",
      option: "isJoiningMeeting",

    },{
      color:"bg-schedule",
      icon:"/icons/calendar.svg",
      title: "planifier une réunion",
      description:
      "via un lien d'invitation.",
      link: "https://stripe.com",
      option: "isScheduleMeeting",

    },
    {
      color:"bg-recording",
      icon:"/icons/video.svg",
      title: "voir enregistrements",
      description:
      "enregistrement de réunion.",
      link: "https://stripe.com",
      option: undefined,

    },
];
  