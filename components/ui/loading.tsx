import { Container } from "@/components/ui/container";

export const Loading = () => {
  return (

    <section className="pt-24 bg-dark-1 flex-1 text-white">
      <Container>

        <div className="w-[320px] h-6 bg-slate-200 rounded-lg"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  items-start gap-4 animate-pulse h-full mt-12">

          <div className="flex gap-4 w-[320px] h-40 bg-slate-200 rounded-lg">

          </div>

          <div className="flex gap-4 w-[320px] h-40 bg-slate-200 rounded-lg">

          </div>
          <div className="flex gap-4 w-[320px] h-40 bg-slate-200 rounded-lg">

          </div>


        </div>

      </Container>
    </section>
  );
}