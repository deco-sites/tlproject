import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TimelineItemComponent from "../components/TimelineItem.tsx";


interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
  /**
  * @description The description of color.
  */
  color?: string;
  timelineItems: TimelineItem[];
}

/**
* @title {{{name}}}
*/
interface TimelineItem {
  name: string;
  time: string;
  image?: ImageWidget;
}

export default function Section({ name = "Capy", color = "green", timelineItems }: Props) {

  const colorVariants = {
    blue: 'bg-red-200',
    red: 'bg-blue-200',
  }

  return <div class={`bg-${color}-200 p-8 rounded-md shadow-md  bg-black text-white`}>
    <h2 class="text-center text-2xl font-semibold mb-4">{name}</h2>
    {
      timelineItems.map(i => (
        <TimelineItemComponent 
          name={i.name}
          time={i.time}
          image={i.image}
        />
      ))
    }
  </div>
}
