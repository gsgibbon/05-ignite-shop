import { ScrollLeft } from "@/styles/components/scrollButton";
import { CaretLeft } from "@phosphor-icons/react";

export default function ScrollBack() {
  return(
      <ScrollLeft>
        <CaretLeft size={48} />
      </ScrollLeft>
  )
}