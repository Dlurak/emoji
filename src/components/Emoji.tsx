interface EmojiProps {
    emoji: string;
}

interface ShareProps {
    text: string;
}

const canShare = navigator.share !== undefined;

const ShareButton = (props: ShareProps) => {
    if (canShare) {
        return (
            <button
                class="border-l border-slate-300 dark:border-slate-700 pl-2"
                onClick={() => {
                    navigator.share({
                        text: props.text,
                    });
                }}
            >
                Share
            </button>
        );
    }

    return null;
};

export const Emoji = (props: EmojiProps) => {
    return (
        <button
            class="flex justify-between gap-2 p-2 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out"
            onClick={() => {
                navigator.clipboard.writeText(props.emoji);
            }}
        >
            <p class="inline">{props.emoji}</p>

            <ShareButton text={props.emoji} />
        </button>
    );
};
