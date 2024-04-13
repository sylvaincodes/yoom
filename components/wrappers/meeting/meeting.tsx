'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';

import { Loader } from '@/components/ui/loader';
import { useGetCalls } from '@/hooks/useGetCalls';
import { MeetingItem } from './meeting-item';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loading } from '@/components/ui/loading';
import { Row } from '@/components/ui/row';

export const Meeting = ({ type, show }: { type: 'ended' | 'upcoming' | 'recordings', show?: number }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState < CallRecording[] > ([]);

  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'Pas de données';
      case 'upcoming':
        return 'Pas de données';
      case 'recordings':
        return 'Pas de données';
      default:
        return '';
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        callRecordings?.map((meeting) => meeting.queryRecordings()) ?? [],
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === 'recordings') {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading) return <Loading />;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-2 overflow-auto max-h-screen pb-60 p-4 justify-items-center self-center no-scrollbar">
        {calls && calls.length > 0 ? (
          calls.map((meeting: Call | CallRecording) => (
            <MeetingItem
              key={(meeting as Call).id}
              icon={
                type === 'ended'
                  ? '/icons/previous.svg'
                  : type === 'upcoming'
                    ? '/icons/upcoming.svg'
                    : '/icons/recordings.svg'
              }
              title={
                (meeting as Call).state?.custom?.description ||
                (meeting as CallRecording).filename?.substring(0, 20) ||
                'Réunion Personelle'
              }
              date={
                (meeting as Call).state?.startsAt?.toLocaleString() ||
                (meeting as CallRecording).start_time?.toLocaleString()
              }
              isPreviousMeeting={type === 'ended'}
              link={
                type === 'recordings'
                  ? (meeting as CallRecording).url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`
              }
              buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
              buttonText={type === 'recordings' ? 'Revisionner' : 'Démarrer'}
              handleClick={
                type === 'recordings'
                  ? () => { const link = `${(meeting as CallRecording).url}`; window.open(link, "_blank") }
                  : () => { const link = `${(meeting as Call).id}`; window.open(link, "_blank") }
              }
            />
          ))
        ) : (
         
        <Row className="justify-center">
            <h1 className='text-2xl font-bold text-white'>
              {noCallsMessage}
            </h1>
        </Row>
          )}
      </div>
    </>
  );
};
