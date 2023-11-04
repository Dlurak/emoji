import { component$ } from "@builder.io/qwik";
import type { emojiType } from "~/constants/emoji";

interface EmojiProps {
  emoji: emojiType;
}

export default component$((props: EmojiProps) => {
  return (
    <button class="flex justify-between gap-2 rounded-md bg-slate-200 p-2 transition-colors duration-300 ease-in-out hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700">
      {props.emoji}
    </button>
  );
});
