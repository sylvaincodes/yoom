'use client';
import { Col } from '@/components/ui/col';
import { Heading } from '@/components/ui/heading'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';


export const MeetingSetup = ({setSetupCompleted}: {setSetupCompleted: (value: boolean) => void}) => {

  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const callTimeNotArrived = callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();
  
  // if (!call) {
  //   throw new Error(
  //     'useStreamCall doit etre encapsulé dans streamcall',
  //   );
  // }

  useEffect(() => {
    if (isMicCamToggled) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggled, call]);

  return (
    <>
        <Col className='items-center justify-center items-center h-full gap-8'>
          <Heading title="Configuration de la réunion"/>
          <VideoPreview/>

          <div className="flex items-center space-x-8">
            <Checkbox checked={isMicCamToggled} onCheckedChange={() => setIsMicCamToggled(!isMicCamToggled)} id="terms" />
            <Label htmlFor="terms" className='text-xl cursor-pointer'>Désactver la caméra et le micro</Label>
            <div className='w-10 h-10'>
              <DeviceSettings/>
            </div>
          </div> 

          <Button variant="default" className='capitalize bg-primary-400 text-white' onClick={ () => {
            call?.join();  setSetupCompleted(true) ;
          }}>rejoindre la réunion</Button>
                    
        </Col>
    </>
  )
}
