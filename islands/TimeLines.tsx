import type { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from 'preact/hooks';
import TimeLine from "./TimeLine.tsx";

/**
 * @title {{name}}
 */
interface ITimeline {
  name: string;
  timelineItems: TimelineItem[];
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
    <>
      <nav>
        <ul class="flex justify-center text-white bg-gray-950 space-x-4 mt-[40px]">
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
    </>
  )
}