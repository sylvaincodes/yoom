import { Container } from "@/components/ui/container";

export default function Page() {
  return (
    <section className="pt-24 bg-dark-1 flex-1 text-white">
      <Container>
        <div className="grid grid-rows-[auto] justify-items-center gap-4 animate-pulse h-full">

          <div className="w-[320px] h-10 bg-slate-200 rounded-lg"></div>
          <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg "></div>
          <div className="w-[320px] h-10 bg-slate-200 rounded-lg"></div>
          <div className="w-[220px] h-10 bg-slate-200 rounded-lg"></div>

        </div>

      </Container>
    </section>
  );
}