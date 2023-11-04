import { component$ } from "@builder.io/qwik";
import { emojiList, type tag, type emojiType } from "~/constants/emoji";
import Emoji from "./emoji";

interface EmojiGridProps {
  tags: tag[];
}

export default component$((props: EmojiGridProps) => {
  const allEmoji = Object.keys(emojiList) as emojiType[];

  const filteredEmoji = allEmoji.filter((emoji) =>
    props.tags.every((tag) => emojiList[emoji as emojiType].includes(tag)),
  );

  return (
    <div class="flex flex-wrap gap-2">
      {filteredEmoji.map((emoji) => (
        <span key={emoji}>
          <Emoji emoji={emoji} />
        </span>
      ))}
    </div>
  );
});
