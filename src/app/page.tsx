import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="rounded-lg shadow-lg bg-white m-8">
        <div className="flex justify-between">
          <div className="w-[50%] pt-8 pl-6 flex flex-col gap-7">
            <div className="py-4">
              <p>Supporting All Languages and Subjects with Automated Quiz</p>
            </div>
            <div>
              <h1 className="text-[54px] text-slate-950 leading-[3.5rem] font-bold">
                Effortless Creation of Engaging Online Assessments
              </h1>
              <p className="text-[20px] text-gray-500 max-w-[80%] pt-4">
                Empowering Educators and Businesses with Automated Quiz
                Generation
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href={"/create"}>Create Quiz Now</Link>
              </Button>
            </div>
          </div>
          <div className="h-full">
            <Image
            className="rounded-e-lg"
              src="/images/hero-image.jpeg"
              width={570}
              height={570}
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
