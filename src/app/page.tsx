import { LimitationsAccordionItem } from '@/components/season/LimitationsSection';
import AnchoredHGroup from '@/components/ui/AnchoredHGroup';

const questionsSection = [
  {
    title: 'What is the difference between AI and Machine Learning?',
    description: `Artificial Intelligence (AI) is a broad field that aims to create machines capable of intelligent behavior, such as problem-solving, learning, and decision-making. Machine Learning (ML) is a *subset* of AI that focuses on enabling machines to learn from data without explicit programming.  Essentially, ML is one approach to achieving AI. Think of AI as the overall goal, and ML as a set of tools to help reach that goal.`,
  },
  {
    title: 'Why are there "AI Winters"?',
    description: `AI Winters refer to periods of reduced funding and interest in AI research. These typically occur when the field fails to meet overly high expectations or when the technology faces significant limitations.  Progress in AI is often not linear; there are periods of rapid advancement followed by plateaus or setbacks.  However, even during these "winters," important foundational work often continues, paving the way for future breakthroughs.`,
  },
  {
    title: 'Is AI going to take my job?',
    description: `The impact of AI on employment is a complex issue. While AI will likely automate certain tasks and potentially displace some jobs, it's also expected to create new jobs and augment existing ones.  The focus should be on how humans and AI can work together, leveraging AI as a tool to enhance human capabilities rather than replacing them entirely.  Continuous learning and adaptation will be key to navigating the changing job market.`,
  },
  {
    title: 'What are the ethical concerns surrounding AI?',
    description: `AI raises several ethical concerns, including bias in algorithms, lack of transparency, potential for misuse, and job displacement.  As AI systems become more powerful and integrated into our lives, it's crucial to address these concerns through responsible development, regulation, and ongoing dialogue.  Ensuring fairness, accountability, and transparency in AI is essential for building trust and preventing harmful consequences.`,
  },
];

export default function Home() {
  return (
    <main>
      <section className="p-6 pb-16 md:grid grid-cols-7 border-b border-gray-7 bg-gray-3 motion-bg-in-gray-3/0 motion-delay-1500">
        <svg
          className="hidden md:block col-span-2 m-auto h-1/3 w-1/2 stroke-2 stroke-blue-9 -scale-y-100"
          width={64}
          height={64}
          preserveAspectRatio="none"
          overflow="visible"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L64 64" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="pt-32 col-span-3 col-start-3">
          <hgroup className="text-center break-words">
            <p className="text-4xl mb-4">History of AI</p>
            <h1 className="mt-4 text-7xl lg:text-8xl font-display text-gray-12 leading-12 lg:leading-16">
              Mind the Machine
            </h1>
            <p className="text-sm text-gray-11 uppercase">—Mind-the-Machine—</p>
          </hgroup>
          <p className="mt-16 text-lg">
            Journey through the key eras of AI development, from the first
            calculating machines to the sophisticated algorithms of today. See
            how AI has transformed from a futuristic dream into a practical
            tool, impacting everything from codebreaking to self-driving cars.
          </p>
        </div>
        <svg
          className="hidden md:block col-span-2 m-auto h-1/3 w-1/2 stroke-2 stroke-blue-9 -scale-y-100"
          width={64}
          height={64}
          preserveAspectRatio="none"
          overflow="visible"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 64L64 0" vectorEffect="non-scaling-stroke" />
        </svg>
      </section>
      <section className="border-b border-gray-7">
        <AnchoredHGroup className="text-gray-11">
          Questions & Answers
        </AnchoredHGroup>
        <ol>
          {questionsSection.map((question, index) => (
            <LimitationsAccordionItem
              key={question.title}
              limitation={question}
              index={index}
            />
          ))}
          <li className="border-t border-gray-7 grid grid-cols-7">
            <div className="col-start-2 col-span-5 border-gray-7 border-x h-24" />
          </li>
        </ol>
      </section>
    </main>
  );
}
