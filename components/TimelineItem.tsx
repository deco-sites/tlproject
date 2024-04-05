import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  name: string;
  time: string;
  image?: ImageWidget;
}

export default function TimelineItem ({time, image, name}: Props) {
  return <div class="flex items-center justify-center mb-3 text-sm sm:text-base">
    <p class="w-[20vw] flex items-left items-center">
      <span class="mr-5">{time}</span>
      <span class="flex-grow border-b border-white mr-4"></span>
    </p>
    <Image
      class="ml-3 mr-3"
      src={image || ""}
      width={100}
    />
    <p class=" text-center w-[20vw]">
      {name}
    </p>
  </div>
}