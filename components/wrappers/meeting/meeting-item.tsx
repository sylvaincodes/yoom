"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { avatarImages } from "@/constants";
import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

interface MeetingItemProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

export const MeetingItem = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingItemProps) => {

  return (
    <section className="flex gap-4 shadow-sm shadow-white w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px] hover:shadow-md hover:shadow-white transition-all cursor-pointer">

      <article className="flex flex-col gap-2">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm font-normal">{date}</p>
          </div>
        </div>
      </article>

      <article className={cn("flex flex-wrap gap-6 justify-start relative", {})}>

        <div className="relative flex w-full max-sm:hidden">
          <AnimatedTooltip items={avatarImages} />
        </div>

        {!isPreviousMeeting && (
          <div className="flex gap-4 flex-wrap md:flex-nowrap">

            <Button onClick={handleClick} variant="default" className="group flex-1 capitalize bg-primary-400 hover:bg-black hover:text-white">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20}
                />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("Lien copié",
                );
              }}
              variant="outline" className="flex-1 capitalize border-0
               bg-secondary-400 hover:bg-white hover:text-black"
            >
              <Copy />
              &nbsp; Copier le lien
            </Button>
          </div>
        )}
      </article>

    </section>
  );
};
