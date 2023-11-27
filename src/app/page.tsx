import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="p-6">
        <div className="flex justify-between">
          <div className="w-[50%] pt-8 pl-6">
            <div className="py-4">
              <p>Supporting All Languages and Subjects with Automated Quiz</p>
            </div>
            <div>
              <h1 className="text-[54px] text-slate-950 leading-[3.5rem] font-bold">
                Effortless Creation of Engaging Online Assessments
              </h1>
              <p className="text-[20px] text-gray-300 max-w-[80%] pt-4">
                Empowering Educators and Businesses with Automated Quiz
                Generation
              </p>
            </div>
            <div className="mt-8">
              <button>Sign Up for Free</button>
            </div>
          </div>
          <div>
            <Image
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
