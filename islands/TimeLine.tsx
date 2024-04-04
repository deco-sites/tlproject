import type { ImageWidget } from "apps/admin/widgets.ts";
import { useState } from 'preact/hooks';
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
  category: "Filmes" | "Séries" | "Séries animadas" | "Animações";
  image?: ImageWidget;
}

export default function Section({ name = "Capy", color = "green", timelineItems }: Props) {

  const colorVariants = {
    blue: 'bg-red-200',
    red: 'bg-blue-200',
  }
  const categories = ["Filmes", "Séries", "Séries animadas", "Animações"];

  const [selectedCategories, setSelectedCategories] = useState(["Filmes"]);

  function handleCheckboxChange(categorie: string) {
    if (selectedCategories.includes(categorie)) {
      setSelectedCategories(selectedCategories.filter(i => i !== categorie));
    }
    else setSelectedCategories([...selectedCategories, categorie]);
  }

  return <div class={`bg-${color}-200 p-8 shadow-md  bg-gray-950 text-white min-h-[100vh]`}>
    <div class="flex items-center fixed top-0 left-0 w-full bg-blue-900 justify-center space-x-4 min-h-10">
      {
        categories.map(c => (
          <label>
            <input
              type="checkbox"
              onChange={ () => handleCheckboxChange(c) }
              checked={selectedCategories.includes(c)}
            />
            {c}
          </label>
        ))
      }
    </div>
    
    <h2 class="text-center text-2xl font-semibold mt-4 mb-4">{name}</h2>
    {
      timelineItems
      .filter(i => selectedCategories.includes(i.category))
      .map(i => (
        <TimelineItemComponent 
          name={i.name}
          time={i.time}
          image={i.image}
        />
      ))
    }
  </div>
}
