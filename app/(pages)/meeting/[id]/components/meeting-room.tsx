'use client';
import { useState } from 'react';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Users, LayoutList, Share } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Loader } from '@/components/ui/loader';
import EndCallButton from './end-call-button';
import { cn } from '@/lib/utils';
import ModalMeeting from '@/components/ui/modal-meeting';
import { Input } from "@/components/ui/input";
import sendEmail from '@/actions/sendemail'

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

export const MeetingRoom = () => {

  const initialValues = {
    email: 'sylvaincodeur@gmail.com',
    name: 'sylvain',
  };

  const pathname = usePathname()
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState < CallLayoutType > ('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const [meetingState, setMeetingState] = useState < 'shareLink' | undefined > (undefined);
  const [values, setValues] = useState(initialValues);
  const callingState = useCallCallingState();


  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  const handleClick = async () => {
    await sendEmail(values);
  }


  return (
    <section className="relative w-full overflow-hidden text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn('shadow-lg bg-dark-2 px-8 pt-20 transition-all w-[320px] fixed transition-all right-0 top-0 min-h-screen', showParticipants ? 'block' : 'hidden')}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="flex w-full flex-wrap items-center gap-5 justify-center pt-20">
        <CallControls onLeave={() => router.push(`/home`)} />

        <div className="flex gap-4">
          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
                <LayoutList size={20} className="text-white" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    onClick={() =>
                      setLayout(item.toLowerCase() as CallLayoutType)
                    }
                  >
                    {item}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-dark-1" />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <button title='Participants' onClick={() => setShowParticipants((prev) => !prev)}>
            <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {/* <button title='Partager' onClick={() => setMeetingState('shareLink')}>
            <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <Share size={20} className="text-white" />
            </div>
          </button> */}
          {!isPersonalRoom && <EndCallButton />}
        </div>

      </div>

      <ModalMeeting
        title='Partager le lien'
        isOpen={meetingState === 'shareLink'}
        onClose={() => { setMeetingState(undefined); }}
        className="text-center"
        buttonText="Partager"
        handleClick={handleClick} >
        <Input required
          placeholder="Entrer l'email du destinataire"
          onChange={(e: any) => setValues({ ...values, email: e.target.value })}
          className="border-none text-center text-black text-xl bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Input required
          placeholder="Entrer le nom du destinataire"
          onChange={(e: any) => setValues({ ...values, name: e.target.value })}
          className="border-none text-center text-black text-xl bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </ModalMeeting>

    </section>
  );
};