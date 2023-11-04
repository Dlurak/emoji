import { component$ } from "@builder.io/qwik";
import BaseButton from "./baseButton";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FaIcon } from "qwik-fontawesome";

interface CopyButtonProps {
  copyText: string;
}

export default component$((props: CopyButtonProps) => {
  return (
    <BaseButton
      onClick$={() => {
        navigator.clipboard.writeText(props.copyText);
      }}
    >
      <span class="flex items-center justify-center gap-2">
        <FaIcon icon={faCopy} class="h-4" />
        Copy
      </span>
    </BaseButton>
  );
});

export const isCopyEnabled = () => !!navigator.clipboard;
