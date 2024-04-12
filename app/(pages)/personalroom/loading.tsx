import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";

export default function Page() {
  return (
    <section className="pt-24 bg-dark-1 flex-1 text-white">
    <Container>
      
      <div className="w-[320px] h-6 bg-slate-200 rounded-lg"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 animate-pulse h-full mt-12">
        
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
          <div className="w-[320px] h-6 bg-slate-200 rounded-lg"></div>
          <div className="w-[220px] h-6 bg-slate-200 rounded-lg"></div>
          <div className="w-[120px] h-6 bg-slate-200 rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="w-60 h-14 bg-slate-200 rounded-lg"></div>
              <div className="w-60 h-14 bg-slate-200 rounded-lg"></div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
          <div className="w-[320px] h-6 bg-slate-200 rounded-lg"></div>
          <div className="w-[220px] h-6 bg-slate-200 rounded-lg"></div>
          <div className="w-[120px] h-6 bg-slate-200 rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="w-60 h-14 bg-slate-200 rounded-lg"></div>
              <div className="w-60 h-14 bg-slate-200 rounded-lg"></div>
          </div>
        </div>


      </div>

    </Container>
</section>
  );
}