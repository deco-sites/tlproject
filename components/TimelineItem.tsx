import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  name: string;
  time: string;
  image?: ImageWidget;
}

export default function TimelineItem ({time, image, name}: Props) {
  return <div class="flex items-center justify-center mb-3">
    <p class="w-[30vw] flex items-left items-center">
      <span class="mr-5">{time}</span>
      <span class="flex-grow border-b border-white mr-4"></span>
    </p>
    <Image
      class="ml-3 mr-3"
      src={image || ""}
      width={100}
    />
    <p class=" w-[30vw]">
      {name}
    </p>
  </div>
}