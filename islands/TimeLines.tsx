import type { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from 'preact/hooks';
import TimeLine from "./TimeLine.tsx";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{name}}
 */
interface ITimeline {
  name: string;
  timelineItems: TimelineItem[];
  backgroundImage?: ImageWidget;
}

/**
 * @title {{name}}
 */
interface TimelineItem {
  name: string;
  date: string;
  category: "Filmes" | "Séries" | "Séries animadas" | "Animações";
  image?: ImageWidget;
}


export default function Section({ timelines }: { timelines: ITimeline[] } ) {
  const [selectedTimeline, setSelectedTimeline] = useState(0);
  return (
    <div className="relative h-screen w-full">
      
      <div className="fixed bottom-0 left-0 -z-50 bg-gray-950">
          <Image
            src={(timelines[selectedTimeline].backgroundImage || "")}
            width={2000}
            height={5000}
          />
      </div>
      <nav class="fixed top-0 left-0 w-full mt-10 z-50 bg-gray-900 border-b-1 border-white">
        <ul class="flex flex-wrap justify-center text-white space-x-4 min-h-[30px] mt-[10px]">
          {
            timelines.map((t, i) => (
              <li 
                key={i} 
                class= {`${i === selectedTimeline ? 'border-b-2 border-yellow-500' : ''} cursor-pointer`}
                onClick={ () => setSelectedTimeline(i) }
              >
                <button>{t.name}</button>
              </li>
            ))
          }
        </ul>
      </nav>
      {(timelines[selectedTimeline] && 
      <TimeLine 
        name={timelines[selectedTimeline].name} 
        timelineItems={timelines[selectedTimeline].timelineItems}
      />)}  
    </div>
  )
}