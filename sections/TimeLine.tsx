import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

  return <div class={`bg-${color}-200 p-8 rounded-md shadow-md`}>
    <h2 class="text-2xl font-semibold mb-4">{name}</h2>
    {
      timelineItems.map(i => (
        <div class="flex items-center justify-center mb-3">
          <span class="inline-block w-40 bg-blue-300">{i.time}</span>
          <Image
            class="ml-3 mr-3 bg-red-300"
            src={i.image || ""}
            width={100}
          />
          <p class="bg-green-300 w-[30vw]">
            {i.name}
          </p>
        </div>
      ))
    }
  </div>
}
