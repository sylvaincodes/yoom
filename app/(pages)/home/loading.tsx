import { Container } from "@/components/ui/container";

export default function Page() {
  return (
    <section className="pt-24 py-6 bg-dark-1 flex-1 text-white min-h-screen">
      <Container>
        <div className="flex flex-col gap-8 animate-pulse h-full">

          <div className="flex-1 w-full max-h-[260px] rounded-lg p-12 bg-slate-200">
            <div className='flex flex-col justify-between gap-1 items-center md:items-start 
              h-full'>

              <div className="bg-slate-200 h-4 w-[320px] rounded-md"></div>
              <div className="flex flex-col gap-1 h-full mt-auto items-center md:items-start 
              justify-end">
                <div className="bg-slate-200 h-4 w-[320px] rounded-md"></div>
                <div className="bg-slate-200 h-4 w-[320px] rounded-md"></div>
              </div>

            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-h-40">
            <div className="relative z-50 px-4 py-6 rounded-[14px] w-[300px] md:w-full md:min-w-[280px] bg-slate-200"></div>

            <div className="relative z-50 px-4 py-6 rounded-[14px] w-[300px] md:w-full md:min-w-[280px] bg-slate-200"></div>

            <div className="relative z-50 px-4 py-6 rounded-[14px] w-[300px] md:w-full md:min-w-[280px] bg-slate-200"></div>

            <div className="relative z-50 px-4 py-6 rounded-[14px] w-[300px] md:w-full md:min-w-[280px] bg-slate-200"></div>
          </div>

        </div>

      </Container>
    </section>
  );
}