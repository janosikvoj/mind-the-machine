export interface SeasonType {
  title: string;
  slug: string;
  duration: {
    start: number;
    end: number;
  };
  tailwindBgColorClasses: { bg: string; stroke: string };
  overview: string;

  slidingImgsSection: {
    leftImg: ImageType & { description: string };
    rightImg: ImageType & { description: string };
  };

  keyDevelopmentsSection?: KeyDevelopmentType[];

  bigNumberSection?: {
    numberValue: string;
    numberDescription: string;
  };

  applicationsSection?: ApplicationType[];

  limitationsSection?: LimitationType[];
}

export interface KeyDevelopmentType {
  category?: string;
  title: string;
  year?: string;
  description?: string;
}

export interface ApplicationType {
  title: string;
  description: string;
  image: ImageType;
}

export interface LimitationType {
  title: string;
  description: string;
}

export interface ImageType {
  src: string;
  alt: string;
}

export const seasons: SeasonType[] = [
  {
    title: 'The Seeds of Computation',
    slug: 'the-seeds-of-computation',
    duration: {
      start: 1941,
      end: 1956,
    },
    tailwindBgColorClasses: { bg: 'bg-gray-9', stroke: 'stroke-gray-9' },
    overview: `This era marks the dawn of electronic computing, a pivotal moment in machines" in the way we imagine AI today. Instead, they were powerful new tools for calculation and data processing—essential building blocks upon which the future of AI would be built.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-seeds-of-computation/sliding/1.jpg',
        alt: 'ENIAC in BRL building 328',
        description:
          'Glenn A. Beck (background) and Betty Snyder (foreground) program ENIAC in BRL building 328. (U.S. Army photo, c. 1947–1955)',
      },
      rightImg: {
        src: '/img/seasons/the-seeds-of-computation/sliding/2.jpg',
        alt: 'Colossus 10 in Block H at Bletchley Park',
        description:
          'Colossus 10 with its extended bedstead in Block H at Bletchley Park in the space now containing the Tunny gallery of The National Museum of Computing.',
      },
    },

    bigNumberSection: {
      numberValue: '30 tons',
      numberDescription:
        'Weight of ENIAC, highlighting the physical size of early computers.',
    },

    keyDevelopmentsSection: [
      {
        category: 'Early Computers',
        title: 'Z3',
        year: '1941',
        description:
          "Konrad Zuse's Z3, a German computer, is considered by many to be the first functional, programmable digital computer. It used electromechanical relays and performed binary floating-point arithmetic.",
      },
      {
        category: 'Early Computers',
        title: 'Atanasoff-Berry Computer (ABC)',
        year: '1942',
        description:
          'The ABC was the first electronic digital computing device. It pioneered the use of binary arithmetic, vacuum tubes for switching, and capacitors for memory, although it was not programmable in the modern sense.',
      },
      {
        category: 'Early Computers',
        title: 'Colossus',
        year: '1943-1945',
        description:
          'Developed in secret at Bletchley Park, Colossus was the first electronic digital computer that was programmable, albeit in a limited way. It was crucial for breaking German Enigma codes during WWII.',
      },
      {
        category: 'Early Computers',
        title: 'ENIAC',
        year: '1946',
        description:
          'ENIAC (Electronic Numerical Integrator and Computer) was one of the first general-purpose electronic digital computers. Developed in the US, it was significantly faster and more flexible than its predecessors, though still programmed manually via cables and switches.',
      },
      {
        category: 'Computer Architecture',
        title: 'Von Neumann Architecture',
        year: '1945',
        description:
          "John von Neumann conceptualized an architecture where program instructions and data are stored in the same memory. This architecture, crucial for modern computers, was described in his 'First Draft of a Report on the EDVAC'.",
      },
      {
        category: 'Programming Concepts',
        title: 'Machine Code & Assembly Language',
        description:
          'Early programming was done directly in machine code (binary instructions) or assembly language (symbolic representations of machine code), requiring deep hardware knowledge and being extremely tedious.',
      },
    ],

    applicationsSection: [
      {
        title: 'World War II Codebreaking',
        description:
          'The Colossus computers at Bletchley Park were instrumental in breaking German codes during World War II. They processed vast amounts of intercepted messages, significantly shortening the war and saving countless lives by deciphering complex Enigma codes.',
        image: {
          src: '/img/seasons/the-seeds-of-computation/applications/1.jpg',
          alt: 'Breaking the code ENIGMA.',
        },
      },
      {
        title: 'Scientific Calculations',
        description:
          'ENIAC, after WWII, was used for complex scientific and engineering calculations. Its ability to rapidly perform calculations previously done by hand enabled advancements in fields like ballistics, hydrodynamics, and the development of the hydrogen bomb, marking a new era for scientific computing.',
        image: {
          src: '/img/seasons/the-seeds-of-computation/applications/2.jpg',
          alt: 'The ENIAC machine blueprint.',
        },
      },
    ],

    limitationsSection: [
      {
        title: 'Massive Size and Power Consumption',
        description: `Early computers like ENIAC and Colossus were physically enormous, often filling entire rooms.  Their operation demanded tremendous amounts of electrical power, leading to significant heat generation and reliability issues. This made them impractical for widespread use beyond specialized applications.`,
      },
      {
        title: 'Limited Memory and Processing Power',
        description: `Compared to modern computers, the memory capacity and processing speed of these early machines were extremely limited.  They could handle complex calculations for their time, but struggled with tasks requiring extensive data storage or rapid, iterative processing, restricting their applicability to a narrow set of problems.`,
      },
      {
        title: 'Programming Complexity and Rigidity',
        description: `Programming these machines was an incredibly laborious and time-consuming process, often involving manual rewiring and switch adjustments.  This made them inflexible and difficult to repurpose for different tasks. Software as we know it today was non-existent, and changing the computer's function required significant physical and logical reconfiguration.`,
      },
      {
        title: 'Reliability Issues',
        description: `Vacuum tubes, the primary electronic components, were prone to frequent failures. Maintaining continuous operation was a major challenge, with computers like ENIAC experiencing tube failures multiple times a day. This constant need for maintenance reduced their effective uptime and increased operational costs.`,
      },
      {
        title: 'High Cost of Development and Operation',
        description: `The development and operation of these early computers were extraordinarily expensive, requiring significant investment in materials, specialized personnel, and infrastructure.  This high cost restricted their deployment to only the most critical applications, primarily military and large-scale scientific research, limiting broader access and experimentation.`,
      },
    ],
  },
  {
    title: 'The Birth of AI',
    slug: 'the-birth-of-ai',
    duration: {
      start: 1956,
      end: 1974,
    },
    tailwindBgColorClasses: { bg: 'bg-gray-7', stroke: 'stroke-gray-7' },
    overview: `This era marks the birth of Artificial Intelligence as a formal field. Researchers began to explore the possibility of creating machines that could not only calculate but also think, learn, and solve problems like humans. These early explorations demonstrated the immense potential of AI, but also revealed the significant challenges that lay ahead.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-birth-of-ai/sliding/1.jpg',
        alt: 'Dartmouth Workshop attendees',
        description:
          'Attendees of the Dartmouth Summer Research Project on Artificial Intelligence, 1956.',
      },
      rightImg: {
        src: '/img/seasons/the-birth-of-ai/sliding/2.jpg',
        alt: 'Joseph Weizenbaum with ELIZA',
        description:
          'Joseph Weizenbaum, the creator of ELIZA, showcases the program. ELIZA simulated a Rogerian psychotherapist, engaging users in conversation and demonstrating early natural language processing.',
      },
    },

    bigNumberSection: {
      numberValue: '~700',
      numberDescription: 'Lines of code in the original ELIZA program.',
    },

    keyDevelopmentsSection: [
      {
        category: 'Key Events & Foundations',
        title: 'Dartmouth Workshop',
        year: '1956',
        description:
          "Widely considered the birth of AI as a field, the Dartmouth Workshop brought together leading researchers like John McCarthy, Marvin Minsky, and Claude Shannon to discuss 'thinking machines'. It set the agenda and goals for early AI research.",
      },
      {
        category: 'Early AI Programs',
        title: 'Logic Theorist',
        year: '1956',
        description:
          "Developed by Allen Newell and Herbert A. Simon, Logic Theorist was one of the first AI programs demonstrated at the Dartmouth Workshop. It could prove theorems from Whitehead and Russell's 'Principia Mathematica', showcasing symbolic reasoning.",
      },
      {
        category: 'Early AI Programs',
        title: 'General Problem Solver (GPS)',
        year: '1959',
        description:
          'GPS, also by Newell and Simon, was an ambitious program designed to solve a wide range of general problems using human-like problem-solving techniques, based on means-ends analysis.',
      },
      {
        category: 'Early AI Programs',
        title: 'ELIZA',
        year: '1966',
        description:
          "Joseph Weizenbaum's ELIZA was an early natural language processing program that simulated a Rogerian psychotherapist. It could engage in conversation by recognizing keywords and rephrasing user inputs, demonstrating early NLP concepts.",
      },
      {
        category: 'Robotics & Embodied AI',
        title: 'Shakey the Robot',
        year: '1966-1972',
        description:
          'Developed at SRI International, Shakey was one of the first mobile robots controlled by AI. It could perceive its environment, create maps, and plan routes to perform simple tasks, integrating perception, planning, and action.',
      },
      {
        category: 'AI Paradigms & Concepts',
        title: 'Symbolic AI & GOFAI',
        description:
          'The dominant approach in this era was Symbolic AI, also known as GOFAI (Good Old-Fashioned AI). It focused on representing knowledge through symbols and logical rules, aiming to achieve intelligence through manipulation of these symbols.',
      },
      {
        category: 'Programming Languages',
        title: 'Lisp Programming Language',
        year: '1958',
        description:
          'John McCarthy invented Lisp, which became the primary programming language for AI research for decades. Its symbolic processing capabilities were well-suited for early AI approaches.',
      },
      {
        category: 'AI Concepts',
        title: 'Concept of Heuristics',
        description:
          'Early AI research emphasized the use of heuristics - problem-solving techniques that are not guaranteed to be optimal or perfect, but are sufficient for immediate goals and often mimic human intuition.',
      },
    ],

    applicationsSection: [
      {
        title: 'Natural Language Demos',
        description: `While not widely adopted, programs like ELIZA demonstrated the potential for machines to simulate human conversation. These systems, though simplistic, sparked public imagination and research into natural language processing, hinting at future applications like chatbots and virtual assistants.`,
        image: {
          src: '/img/seasons/the-birth-of-ai/applications/1.jpg',
          alt: 'Conversation with ELIZA on a terminal',
        },
      },
      {
        title: 'Game Playing Prototypes',
        description: `AI programs playing games like checkers and chess emerged as compelling demonstrations of machine intelligence. These were early attempts at creating strategic thinking in machines, showcasing search algorithms that could plan moves ahead, paving the way for AI in competitive environments and strategic decision-making.`,
        image: {
          src: '/img/seasons/the-birth-of-ai/applications/2.jpg',
          alt: 'Checkers game on computer',
        },
      },
    ],

    limitationsSection: [
      {
        title: 'Combinatorial Explosion',
        description: `Early AI approaches, particularly in problem-solving and search, often faced the issue of combinatorial explosion. As problems grew even moderately in complexity, the number of possibilities to explore expanded exponentially, quickly overwhelming the computational capabilities of the time and hindering the scaling of AI solutions.`,
      },
      {
        title: 'Limited Real-World Knowledge',
        description: `Symbolic AI systems struggled to effectively represent and utilize the vast amount of common-sense knowledge that humans possess. Encoding enough rules and symbols to capture the complexities of the real world proved to be an immense and seemingly insurmountable challenge, restricting AI's ability to understand and interact with unstructured, everyday situations.`,
      },
      {
        title: 'Lack of Learning from Data',
        description: `The AI systems of this era were primarily programmed with explicit rules and logic, lacking the ability to learn and adapt from data. This inflexibility meant that systems were brittle and struggled to improve their performance or generalize to new, unseen situations. The absence of machine learning techniques limited their potential for real-world applications where adaptability is crucial.`,
      },
      {
        title: 'Frame Problem',
        description: `AI systems struggled with the "frame problem," which is the challenge of representing the effects of actions and maintaining a relevant representation of the world as actions are performed and the world changes.  Knowing what facts remain true and what facts need to be updated after an action, without having to re-evaluate everything, proved to be a major hurdle in creating truly intelligent and adaptable systems.`,
      },
      {
        title: 'Lack of Embodiment and Situatedness',
        description: `Early AI research largely focused on disembodied symbolic reasoning, neglecting the importance of embodiment and situatedness in real-world environments.  Intelligence was often viewed as purely abstract symbol manipulation, disconnected from perception and action in a physical world. This lack of grounding hindered the development of AI systems that could interact effectively and robustly with the complexities of the real world.`,
      },
    ],
  },
  {
    title: 'The First AI Winter',
    slug: 'the-first-ai-winter',
    duration: {
      start: 1974,
      end: 1980,
    },
    tailwindBgColorClasses: { bg: 'bg-gray-3', stroke: 'stroke-gray-3' },
    overview: `After the initial excitement of AI's birth, the field encountered its first major setback. Funding dried up, and many researchers became disillusioned as early promises of AI capabilities failed to materialize. This period, known as the first AI winter, was a time of reflection and reassessment. However, even in this period of apparent stagnation, crucial foundational work continued, especially in areas like neural networks and machine learning, laying the groundwork for future breakthroughs.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-first-ai-winter/sliding/1.jpg',
        alt: 'Conceptual image of AI Winter',
        description: 'A representation of the AI Winter.',
      },
      rightImg: {
        src: '/img/seasons/the-first-ai-winter/sliding/2.jpg',
        alt: 'Early neural network diagram',
        description:
          'Diagram of a simple neural network, illustrating the type of research that continued during the AI Winter.',
      },
    },

    bigNumberSection: {
      numberValue: '1 000',
      numberDescription:
        'Number of rules a typical expert system could handle, revealing its limitations.',
    },

    keyDevelopmentsSection: [
      {
        category: 'Algorithms & Techniques',
        title: 'Backpropagation Algorithm',
        year: '1974',
        description:
          "Paul Werbos's dissertation introduced the backpropagation algorithm for training artificial neural networks. Although initially overlooked, it became foundational for deep learning decades later, enabling efficient training of multi-layer networks.",
      },
      {
        category: 'AI Systems & Paradigms',
        title: 'Rule-Based Expert Systems (Early Development)',
        description:
          'While expert systems gained prominence later, their conceptual and initial development began in this period. Researchers explored encoding human expert knowledge into sets of rules to solve specific problems, though limitations started to become apparent.',
      },
      {
        category: 'Research & Development',
        title: 'Continued Machine Learning Research',
        description:
          'Despite funding cuts in AI, research in machine learning algorithms and statistical approaches continued in academia and some industrial labs. This persistent effort, though less visible, was crucial for the future resurgence of the field.',
      },
      {
        category: 'Robotics & Embodied AI',
        title: 'Sensor-Based Robotics Research',
        description:
          'Research in robotics moved towards incorporating more sensors and feedback mechanisms. Work at places like Stanford and MIT explored vision and touch sensors for robot navigation and manipulation, laying groundwork for more autonomous robots.',
      },
    ],

    limitationsSection: [
      {
        title: 'Over-Optimistic Promises',
        description: `The early promises of AI, fueled by initial successes in narrow domains, were overly optimistic and failed to account for the immense complexity of general intelligence.  The field's inability to deliver on these grand visions led to disillusionment among funding bodies and the public, contributing significantly to the onset of the AI winter.`,
      },
      {
        title: 'Knowledge Acquisition Bottleneck',
        description: `Building expert systems required manually extracting and encoding knowledge from human experts, a process that proved to be incredibly time-consuming, labor-intensive, and prone to errors. This "knowledge acquisition bottleneck" severely limited the scalability and practical deployment of expert systems, hindering progress and highlighting the difficulty of translating human expertise into machine-understandable rules.`,
      },
      {
        title: 'Computational Intractability',
        description: `Many AI problems tackled during this period, such as complex reasoning and natural language understanding, turned out to be computationally intractable with the available computing resources and algorithms.  The limited processing power and inefficient algorithms of the time meant that even seemingly simple tasks could become computationally prohibitive, stalling progress and demonstrating the need for more advanced computational methods.`,
      },
      {
        title: 'Lack of Robustness and Scalability',
        description: `Early AI systems, particularly expert systems and symbolic AI programs, often lacked robustness and scalability. They were brittle, failing outside of very specific and controlled environments, and struggled to scale up to handle larger, more complex real-world problems.  This limited their practical utility and contributed to skepticism about the viability of the AI field in general.`,
      },
      {
        title: 'Funding and Hype Cycle Backlash',
        description: `The initial AI boom was followed by a predictable backlash as inflated expectations met the reality of limited practical achievements. Government and industry funding for AI research was drastically cut as disillusionment set in. This funding winter severely hampered research progress and led to a decline in both public and scientific interest in artificial intelligence, slowing down the field for years to come.`,
      },
    ],
  },
  {
    title: 'The AI Spring',
    slug: 'the-ai-spring',
    duration: {
      start: 1980,
      end: 1987,
    },
    tailwindBgColorClasses: { bg: 'bg-blue-5', stroke: 'stroke-blue-5' },
    overview: `After the first AI winter, the field experienced a resurgence of interest and progress. This era saw the rise of expert systems, AI programs designed to capture and utilize the knowledge of human experts in specific domains.  These systems demonstrated the practical potential of AI as a tool for solving real-world problems, although their limitations also became apparent.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-ai-spring/sliding/1.jpg',
        alt: 'Technicians working on Symbolics Lisp Machine',
        description:
          'Technicians work on the complex hardware of a Symbolics Lisp Machine, reflecting the specialized tools of the AI Spring era.',
      },
      rightImg: {
        src: '/img/seasons/the-ai-spring/sliding/2.jpg',
        alt: 'Doctor using MYCIN expert system',
        description:
          'A doctor interacts with the MYCIN expert system, designed to aid in medical diagnoses, showcasing early AI applications in specialized fields.',
      },
    },

    bigNumberSection: {
      numberValue: '100x',
      numberDescription:
        'Increase in computing power from ENIAC to typical workstations in the AI Spring.',
    },

    keyDevelopmentsSection: [
      {
        category: 'AI Systems & Applications',
        title: 'Expert Systems Proliferation',
        description:
          'Expert systems became commercially viable and widely adopted in various industries. Systems like MYCIN (medical diagnosis), DENDRAL (chemical analysis), and XCON/R1 (computer configuration) showcased the practical applications of AI for specific domains.',
      },
      {
        category: 'Hardware & Tools',
        title: 'Lisp Machines',
        description:
          'Specialized computer hardware, known as Lisp machines, were developed and commercialized, optimized for running Lisp, the dominant programming language for AI at the time. Companies like Symbolics and Lisp Machines Inc. produced these systems.',
      },
      {
        category: 'Programming Languages',
        title: 'Proliferation of AI Programming Languages',
        description:
          "Languages like Lisp and Prolog became widely used for AI development. Prolog, with its logic programming paradigm, gained traction for knowledge representation and reasoning tasks, complementing Lisp's symbolic processing capabilities.",
      },
      {
        category: 'Hardware Advancements',
        title: 'Increased Computing Power & Miniaturization',
        description:
          'Advances in microprocessors and computer architecture led to increased computing power and smaller, more affordable computers. This made it more feasible to develop and deploy computationally intensive AI applications like expert systems.',
      },
      {
        category: 'AI Paradigms & Concepts',
        title: 'Knowledge Representation Formalisms',
        description:
          'Research focused on developing more sophisticated formalisms for knowledge representation in expert systems, including semantic networks, frames, and rule-based systems.',
      },
      {
        category: 'AI Paradigms & Concepts',
        title: 'Inference Engines',
        description:
          'Development of more advanced inference engines to effectively utilize the knowledge bases in expert systems, allowing for more complex reasoning and problem-solving.',
      },
    ],

    applicationsSection: [
      {
        title: 'Automated Medical Diagnosis',
        description: `Expert systems like MYCIN were designed to aid physicians in diagnosing bacterial infections and recommending antibiotics. Though primarily a research project, MYCIN showcased the potential of AI to capture and apply medical expertise, paving the way for future AI applications in healthcare and decision support systems.`,
        image: {
          src: '/img/seasons/the-ai-spring/applications/1.jpg',
          alt: 'Doctor using MYCIN system on workstation',
        },
      },
      {
        title: 'Chemical Structure Analysis',
        description: `DENDRAL, an early expert system, assisted chemists in determining the molecular structure of unknown organic compounds. By analyzing mass spectrometry data, DENDRAL automated a complex analytical process, demonstrating AI's utility in scientific discovery and data interpretation tasks within specialized domains like chemistry.`,
        image: {
          src: '/img/seasons/the-ai-spring/applications/2.jpg',
          alt: 'Chemist using DENDRAL system',
        },
      },
      {
        title: 'Computer System Configuration',
        description: `XCON (eXpert CONfigurer), later known as R1, was a commercially successful expert system used by DEC to automate the configuration of VAX computer systems.  XCON streamlined the complex process of tailoring computer orders to customer specifications, significantly improving efficiency in manufacturing and sales operations within the burgeoning computer industry.`,
        image: {
          src: '/img/seasons/the-ai-spring/applications/3.jpg',
          alt: 'DEC technician configuring VAX system with expert system',
        },
      },
    ],

    limitationsSection: [
      {
        title: 'Brittleness and Lack of Adaptability',
        description: `Expert systems, while initially promising, proved to be brittle and inflexible. They operated effectively only within very narrow, pre-defined domains and struggled to handle novel situations or inputs outside their programmed knowledge.  Their inability to learn or adapt limited their usefulness in dynamic, real-world environments.`,
      },
      {
        title: 'Difficult Knowledge Acquisition',
        description: `Extracting and formalizing knowledge from human experts into a rule-based system was a major bottleneck.  Experts often found it difficult to articulate their implicit knowledge in a way that could be directly translated into computer rules. This knowledge acquisition process remained a slow, expensive, and error-prone bottleneck, limiting the development and scope of expert systems.`,
      },
      {
        title: 'Maintenance and Update Burden',
        description: `Expert systems were notoriously difficult to maintain and update. Even minor changes to the knowledge base could have unintended consequences and require extensive re-testing.  As domains evolved, keeping expert systems current with the latest knowledge became a costly and complex endeavor, hindering their long-term viability and scalability.`,
      },
      {
        title: 'Limited Explanation Capabilities',
        description: `While expert systems aimed to mimic human reasoning, their explanation capabilities were often rudimentary.  They could typically only explain their decisions by tracing back through the rules they had applied. These explanations were often not intuitive or insightful for end-users, hindering trust and acceptance, especially in critical applications where understanding the system's rationale was paramount.`,
      },
      {
        title: 'High Development Costs',
        description: `Developing expert systems was a costly and time-consuming undertaking, requiring significant investment in specialized knowledge engineers, domain experts, and custom software tools.  The high development costs, coupled with the limitations in brittleness and maintainability, made expert systems less economically viable than initially anticipated for many potential applications, contributing to the eventual decline of the AI Spring enthusiasm.`,
      },
    ],
  },
  {
    title: 'The Second AI Winter',
    slug: 'the-second-ai-winter',
    duration: {
      start: 1987,
      end: 2005,
    },
    tailwindBgColorClasses: { bg: 'bg-gray-1', stroke: 'stroke-gray-1' },
    overview: `Despite the promising advancements of the AI Spring, the field experienced another period of reduced enthusiasm and funding. The limitations of expert systems became more apparent, and progress in other areas of AI proved slower than anticipated. This second AI winter, while challenging, was also a time of important research and development that would eventually pave the way for the next AI boom.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-second-ai-winter/sliding/1.jpg',
        alt: 'Researcher in a sparsely funded AI lab',
        description:
          'A researcher works in a lab environment that reflects the reduced funding and slower progress of the Second AI Winter.',
      },
      rightImg: {
        src: '/img/seasons/the-second-ai-winter/sliding/2.jpg',
        alt: 'Early data mining visualization',
        description:
          "An early visualization attempt in data mining, representing the nascent field's efforts to extract knowledge from growing datasets during the AI Winter.",
      },
    },

    bigNumberSection: {
      numberValue: '$50 000 000',
      numberDescription:
        "DARPA's Strategic Computing Initiative funding cut in the late 1980s, triggering the second AI winter.",
    },

    keyDevelopmentsSection: [
      {
        category: 'Algorithms & Techniques',
        title: 'Support Vector Machines (SVMs)',
        description:
          'SVMs emerged as a powerful machine learning algorithm for classification and regression. Developed by Vladimir Vapnik and colleagues, SVMs offered a robust theoretical foundation and good generalization performance, becoming a key tool in ML.',
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Hidden Markov Models (HMMs)',
        description:
          'HMMs became widely used for sequential data analysis, particularly in speech recognition and bioinformatics. They provided a probabilistic framework for modeling sequences and inferring hidden states.',
      },
      {
        category: 'Emerging Fields',
        title: 'Data Mining Emerges',
        description:
          'With increasing data availability, data mining emerged as a distinct field focused on extracting knowledge and patterns from large datasets. Techniques from statistics, database systems, and machine learning were combined to discover insights from data.',
      },
      {
        category: 'Neural Networks',
        title: 'Recurrent Neural Networks (RNNs) Research',
        description:
          'Despite the AI winter, research on neural networks continued, particularly on Recurrent Neural Networks (RNNs) designed to process sequential data. While computationally challenging to train at the time, RNNs laid the foundation for future breakthroughs in NLP and time series analysis.',
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Decision Tree Algorithms',
        description:
          "Algorithms like CART and C4.5 became popular for both classification and regression tasks due to their interpretability and ease of use. They provided a more transparent approach to machine learning compared to 'black box' methods.",
      },
      {
        category: 'Algorithms & Techniques',
        title: 'k-Nearest Neighbors (k-NN)',
        description:
          'k-NN became a widely used non-parametric classification algorithm known for its simplicity and effectiveness, particularly in scenarios with complex decision boundaries.',
      },
      {
        category: 'AI Paradigms & Concepts',
        title: 'Case-Based Reasoning (CBR)',
        description:
          'CBR emerged as a problem-solving paradigm that relies on past experiences (cases) to solve new problems, offering an alternative to rule-based expert systems and reflecting more flexible human-like reasoning.',
      },
      {
        category: 'Robotics & Embodied AI',
        title: 'Behavior-Based Robotics',
        description:
          "Behavior-based robotics challenged traditional AI planning by focusing on creating robust robots through layered, reactive behaviors, rather than complex symbolic models of the world. Rodney Brooks' subsumption architecture is a key example.",
      },
    ],

    limitationsSection: [
      {
        title: 'Limited Real-World Impact',
        description: `Despite continued research and algorithmic advancements, AI during the second winter struggled to deliver on its promises in terms of widespread, impactful real-world applications.  Many AI techniques remained largely in academic labs or niche industrial settings, failing to penetrate daily life or revolutionize major industries to the extent hoped for during the AI Spring. This lack of tangible impact contributed to reduced funding and public interest.`,
      },
      {
        title: 'Computational Constraints',
        description: `While computing power increased during this period, it remained a significant constraint for many advanced AI applications, particularly those involving complex machine learning models and large datasets.  Training sophisticated algorithms and processing vast amounts of data were still computationally expensive and time-consuming, limiting the feasibility of many promising research directions and practical deployments.`,
      },
      {
        title: 'Lack of Large Labeled Datasets',
        description: `The "Big Data" era was still nascent, and the availability of large, high-quality labeled datasets, crucial for supervised machine learning techniques, was limited. This scarcity of data hindered the ability to train robust and accurate machine learning models, especially for tasks like image recognition and natural language processing, slowing down progress in these key areas of AI.`,
      },
      {
        title: 'Slow Progress in Key AI Areas',
        description: `Despite advancements in specific machine learning algorithms, progress in core AI areas like natural language processing and computer vision remained slower than initially anticipated.  Achieving human-level performance in these domains proved far more challenging than early researchers had predicted.  This slower-than-expected progress dampened enthusiasm and funding, contributing to the prolonged AI winter.`,
      },
      {
        title: 'Focus on Narrowly Defined Problems',
        description: `Much of the AI research during the second winter focused on narrowly defined problems and specialized applications. While progress was made in areas like data mining and specific machine learning algorithms, the field lacked grand, unifying visions and struggled to address broader, more general AI challenges. This narrow focus, while yielding incremental improvements, did not capture public imagination or attract significant investment in the way earlier, more ambitious goals had.`,
      },
    ],
  },
  {
    title: 'The Rise of Machine Learning',
    slug: 'the-rise-of-machine-learning',
    duration: {
      start: 2005,
      end: 2017,
    },
    tailwindBgColorClasses: { bg: 'bg-blue-7', stroke: 'stroke-blue-7' },
    overview: `This era witnessed a significant shift in AI's approach, with machine learning taking center stage. Instead of relying on hand-coded rules, AI systems began to learn from data, becoming more adaptable and versatile. The increasing availability of data and computational power fueled this rise, leading to practical applications that touched everyday life.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-rise-of-machine-learning/sliding/1.jpg',
        alt: 'Google Data Center Server Room',
        description:
          'A server room in a Google data center, illustrating the massive infrastructure supporting the Big Data and cloud computing revolution that enabled the rise of machine learning.',
      },
      rightImg: {
        src: '/img/seasons/the-rise-of-machine-learning/sliding/2.jpg',
        alt: 'Data Scientist at Work',
        description:
          'A data scientist works with data visualizations, representing the growing importance of data analysis and machine learning in various industries.',
      },
    },

    bigNumberSection: {
      numberValue: '2 500 000 000 000 000 000',
      numberDescription:
        'Bytes of data created daily in 2012, fueling the machine learning revolution.',
    },

    keyDevelopmentsSection: [
      {
        category: 'Algorithms & Techniques',
        title: 'Random Forest Algorithm',
        year: '2001',
        description:
          "Leo Breiman's Random Forest algorithm became popular for its robustness, accuracy, and ability to handle high-dimensional data. It is an ensemble learning method that operates by constructing multiple decision trees.",
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Gradient Boosting Machines (GBM)',
        year: '1999',
        description:
          'GBM, including algorithms like XGBoost and LightGBM, emerged as highly effective for both classification and regression, achieving state-of-the-art results in many machine learning competitions and applications.',
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Kernel Methods & SVM Refinements',
        description:
          'Kernel methods, particularly Support Vector Machines (SVMs), saw refinements and broader applications, becoming a staple for tasks like image classification and text categorization due to their strong theoretical foundation and performance.',
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Bayesian Networks Advancements',
        description:
          'Advancements in Bayesian Networks and other Probabilistic Graphical Models enabled more sophisticated reasoning under uncertainty and modeling of complex dependencies, finding applications in areas like medical diagnosis and risk assessment.',
      },
      {
        category: 'Enabling Technologies',
        title: 'Big Data Emergence',
        description:
          "The exponential growth of data from the internet, social media, and IoT devices led to the 'Big Data' era. This vast data availability became a critical fuel for training and improving machine learning models.",
      },
      {
        category: 'Enabling Technologies',
        title: 'Cloud Computing Infrastructure',
        description:
          'The rise of cloud computing platforms like Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure provided scalable and affordable computing resources, democratizing access to machine learning infrastructure and tools.',
      },
      {
        category: 'Tools & Libraries',
        title: 'Open-Source ML Libraries (Scikit-learn, etc.)',
        description:
          'Open-source libraries like Scikit-learn in Python made machine learning algorithms and tools more accessible to researchers, developers, and practitioners, fostering rapid experimentation and application development.',
      },
      {
        category: 'Applications',
        title: 'Web-Scale Applications of Machine Learning',
        description:
          'Machine learning became integral to web-scale applications, powering services like spam filtering, recommendation systems, search engines, online advertising, and fraud detection, impacting billions of users daily.',
      },
    ],

    applicationsSection: [
      {
        title: 'Enhanced Email Spam Filters',
        description: `Machine learning algorithms revolutionized email spam filtering, moving beyond simple rule-based systems.  Sophisticated algorithms learned to identify spam patterns, protecting users from unwanted and harmful emails with greater accuracy and adaptability, significantly improving online communication security and efficiency.`,
        image: {
          src: '/img/seasons/the-rise-of-machine-learning/applications/1.jpg',
          alt: 'Email inbox with spam filter in action',
        },
      },
      {
        title: 'Personalized Recommendation Engines',
        description: `Recommendation systems powered by machine learning became ubiquitous in e-commerce and content platforms.  By analyzing user behavior and preferences at scale, these systems provided personalized suggestions for products, movies, and music, transforming online retail and media consumption through tailored experiences.`,
        image: {
          src: '/img/seasons/the-rise-of-machine-learning/applications/2.jpg',
          alt: 'E-commerce site with product recommendations',
        },
      },
      {
        title: 'Improved Web Search Relevance',
        description: `Search engines leveraged machine learning to drastically enhance the relevance and accuracy of search results. Algorithms learned to understand user intent and context, ranking web pages more intelligently and providing users with faster access to the information they sought amidst the vast and growing internet.`,
        image: {
          src: '/img/seasons/the-rise-of-machine-learning/applications/3.jpg',
          alt: 'Search engine results page',
        },
      },
    ],

    limitationsSection: [
      {
        title: 'Data Bias and Fairness Concerns',
        description: `Machine learning models are inherently susceptible to biases present in the data they are trained on. This could lead to unfair or discriminatory outcomes, particularly when applied to sensitive domains like hiring, lending, or criminal justice. Ensuring fairness and mitigating bias became a critical challenge as machine learning systems were deployed more widely.`,
      },
      {
        title: 'Need for Feature Engineering',
        description: `Traditional machine learning algorithms often required significant manual feature engineering – the process of selecting and transforming raw data into meaningful features that the model could learn from effectively. This process was time-consuming, domain-specific, and often relied on expert intuition, making it a bottleneck in developing and deploying ML solutions. While less pronounced than before, feature engineering remained an important step.`,
      },
      {
        title: 'Explainability and Interpretability Issues',
        description: `Many machine learning models, especially more complex ones, operated as "black boxes," making it difficult to understand why they made particular predictions or decisions. This lack of explainability posed challenges for debugging, trust-building, and deploying ML systems in applications where transparency and accountability were crucial, such as healthcare and finance, even if some algorithms like decision trees offered more interpretability.`,
      },
      {
        title: 'Computational Resources for Training',
        description: `While cloud computing helped democratize access, training complex machine learning models still demanded considerable computational resources, especially for large datasets. This requirement could be a barrier for smaller organizations or individual researchers without access to scalable infrastructure, limiting who could fully participate in and benefit from the machine learning revolution.`,
      },
      {
        title: 'Overfitting and Generalization Challenges',
        description: `Machine learning models, if not carefully designed and validated, were prone to overfitting the training data. Overfitted models performed well on training data but poorly on new, unseen data, limiting their real-world applicability. Ensuring good generalization—the ability to perform well on unseen data—remained a critical challenge, requiring techniques like cross-validation and regularization.`,
      },
    ],
  },
  {
    title: 'The Deep Learning Era',
    slug: 'the-deep-learning-era',
    duration: {
      start: 2017,
      end: new Date().getFullYear(),
    },
    tailwindBgColorClasses: { bg: 'bg-blue-9', stroke: 'stroke-blue-9' },
    overview: `The deep learning revolution has propelled AI into a new era of capabilities. By leveraging artificial neural networks with multiple layers, AI systems can now tackle complex tasks like image recognition, natural language processing, and more with remarkable accuracy. This period has seen rapid advancements and widespread applications, but also raises important ethical and societal questions.`,

    slidingImgsSection: {
      leftImg: {
        src: '/img/seasons/the-deep-learning-era/sliding/1.jpg',
        alt: 'NVIDIA GPU Data Center',
        description:
          'A modern NVIDIA GPU data center, highlighting the hardware infrastructure powering the deep learning era.',
      },
      rightImg: {
        src: '/img/seasons/the-deep-learning-era/sliding/2.jpg',
        alt: 'Deep Learning in Medical Imaging',
        description:
          "A radiologist uses deep learning-powered software to analyze medical images, showcasing AI's impact on healthcare through advanced image recognition.",
      },
    },

    bigNumberSection: {
      numberValue: '1 800 000 000 000',
      numberDescription:
        'Parameters in GPT-4o, showcasing the scale of modern deep learning models.',
    },

    keyDevelopmentsSection: [
      {
        category: 'Algorithms & Frameworks',
        title: 'Deep Learning Frameworks (TensorFlow, PyTorch, Keras)',
        description:
          'User-friendly deep learning frameworks like TensorFlow (Google), PyTorch (Facebook), and Keras (François Chollet) democratized access to deep learning. They provided high-level APIs, automatic differentiation, and GPU support, accelerating research and application development.',
      },
      {
        category: 'Breakthrough Technologies',
        title: 'ImageNet Breakthrough',
        year: '2012',
        description:
          "The AlexNet deep learning model's breakthrough performance in the 2012 ImageNet competition demonstrated the power of deep convolutional neural networks for image recognition, sparking the deep learning revolution in computer vision and beyond.",
      },
      {
        category: 'Breakthrough Technologies',
        title: 'Large Language Models (LLMs) & Transformers',
        description:
          'The Transformer architecture and the development of massive Large Language Models (LLMs) like BERT, GPT, and others revolutionized Natural Language Processing. LLMs enabled unprecedented performance in text generation, translation, and understanding, driving applications like chatbots and content creation.',
      },
      {
        category: 'Hardware & Infrastructure',
        title: 'GPU Acceleration & Specialized Hardware',
        description:
          'The availability of powerful GPUs (Graphics Processing Units) and specialized hardware like TPUs (Tensor Processing Units) significantly accelerated the training and inference of deep learning models. GPUs enabled parallel computation necessary for deep neural networks.',
      },
      {
        category: 'Algorithms & Techniques',
        title: 'Generative Adversarial Networks (GANs)',
        year: '2014',
        description:
          'GANs, introduced by Ian Goodfellow, opened up new possibilities in generative modeling, allowing AI to generate realistic images, videos, and other forms of data, leading to applications in art, design, and simulation.',
      },
      {
        category: 'Breakthrough Technologies',
        title: 'Reinforcement Learning Advances (AlphaGo)',
        year: '2016',
        description:
          "Deep Reinforcement Learning achieved a major milestone with AlphaGo defeating a world champion Go player, demonstrating AI's capability in complex strategic games and driving advancements in robotics and autonomous systems.",
      },
      {
        category: 'AI Paradigms & Concepts',
        title: 'Self-Supervised Learning',
        description:
          'Self-supervised learning emerged as a promising paradigm to leverage unlabeled data for training powerful models, reducing the dependence on large labeled datasets, particularly impactful in NLP and computer vision.',
      },
      {
        category: 'Applications',
        title: 'Edge AI and Mobile Deep Learning',
        description:
          'Deep learning models started to be deployed on edge devices like smartphones and IoT sensors, enabling real-time AI processing at the edge, improving latency and privacy for various applications.',
      },
    ],

    applicationsSection: [
      {
        title: 'Revolutionizing Medical Imaging',
        description: `Deep learning has transformed medical imaging analysis, enabling AI to detect diseases like cancer in medical scans with higher accuracy and speed.  AI-powered tools assist radiologists in identifying subtle anomalies, improving diagnostic precision, reducing workload, and potentially leading to earlier and more effective treatments for patients across various medical fields.`,
        image: {
          src: '/img/seasons/the-deep-learning-era/applications/1.jpg',
          alt: 'Radiologist using AI for medical image analysis',
        },
      },
      {
        title: 'Advancing Natural Language Understanding',
        description: `Deep learning models, especially Large Language Models, have driven unprecedented advancements in natural language processing. AI can now understand and generate human language with remarkable fluency, powering applications like sophisticated chatbots, virtual assistants, and advanced machine translation, fundamentally changing human-computer interaction.`,
        image: {
          src: '/img/seasons/the-deep-learning-era/applications/2.jpg',
          alt: 'Person interacting with AI chatbot on smartphone',
        },
      },
      {
        title: 'Enabling Autonomous Driving',
        description: `Self-driving car technology relies heavily on deep learning to process sensor data and make real-time driving decisions. Deep neural networks enable vehicles to perceive their environment, recognize objects, and navigate roads without human intervention, promising to revolutionize transportation, improve safety, and reshape urban landscapes in the future.`,
        image: {
          src: '/img/seasons/the-deep-learning-era/applications/3.jpg',
          alt: 'Self-driving car navigating city street',
        },
      },
    ],

    limitationsSection: [
      {
        title: 'High Computational Demands',
        description: `Training state-of-the-art deep learning models requires massive computational resources, often necessitating specialized hardware like GPUs or TPUs and large-scale distributed computing infrastructure. This high computational cost limits accessibility for smaller organizations and researchers and raises concerns about the environmental impact due to energy consumption.`,
      },
      {
        title: 'Black Box Nature and Lack of Explainability',
        description: `Deep learning models are often criticized for their "black box" nature, as their decision-making processes are opaque and difficult to interpret. This lack of explainability poses significant challenges in applications where understanding and trusting AI's reasoning is crucial, such as healthcare, finance, and autonomous systems, hindering wider adoption in critical sectors.`,
      },
      {
        title: 'Data Dependency and Data Bias Amplification',
        description: `Deep learning models are heavily reliant on vast amounts of high-quality, labeled data for effective training. They are also prone to amplifying biases present in the training data, leading to unfair, discriminatory, or unreliable outcomes.  Addressing data bias and ensuring robustness across diverse datasets remains a major challenge for the responsible development and deployment of deep learning systems.`,
      },
      {
        title: 'Vulnerability to Adversarial Attacks',
        description: `Deep learning models are susceptible to adversarial attacks, where carefully crafted, imperceptible perturbations to input data can cause them to make incorrect predictions. This vulnerability raises security concerns, especially in safety-critical applications like autonomous driving and security systems, highlighting a need for more robust and secure deep learning architectures.`,
      },
      {
        title: 'Ethical and Societal Implications',
        description: `The increasing power and pervasiveness of deep learning raise profound ethical and societal implications. Concerns about job displacement due to automation, algorithmic bias perpetuating social inequalities, misuse of AI for surveillance and manipulation, and the potential for autonomous weapons systems demand careful consideration and proactive measures to ensure responsible AI development and deployment that benefits humanity.`,
      },
    ],
  },
];

export const seasonsData = {
  duration: {
    start: seasons[0].duration.start,
    end: seasons[seasons.length - 1].duration.end,
    length:
      seasons[seasons.length - 1].duration.end - seasons[0].duration.start,
  },
  numberOfSeasons: seasons.length,
  seasons: seasons,
  findSeasonBySlug: (slug: string) => {
    for (const season of seasons) {
      if (season.slug === slug) {
        return season;
      }
    }
    return null;
  },
};
