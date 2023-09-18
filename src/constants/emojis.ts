export const tags = [
    'happy',
    'sad',
    'laugh',
    'cool',
    'angry',
    'surprised',
    'confused',
    'love',
    'cry',
    'sleepy',
    'neutral',
    'excited',
    'bored',
    'unwitting',
    'mischievous',
    'bear',
    'running',
    'shy',
    'skeptical',
    'chill',
    'celebrating',
    'fighting',
    'sharing',
    'cheerful',
    'requesting',
    'strong',
] as const;

export type tag = (typeof tags)[number];

const unsaveEmojiList = {
    ':)': ['happy'],
    ':(': ['sad'],
    ':D': ['happy', 'laugh'],
    ':P': ['happy', 'laugh'],
    ':O': ['happy', 'laugh'],
    '(ﾉ◕ヮ◕)ﾉ': ['happy', 'laugh'],
    "(ง'̀-'́)ง,": ['angry', 'fighting'],
    "^( '-' )^": ['neutral'],
    '╍●‿●╍': ['cool'],
    '＼(●´ϖ`●)／': ['happy', 'excited'],
    'ヽ(´▽`)/': ['happy', 'excited'],
    'ヽ(´ー｀)ノ': ['neutral', 'bored'],
    '¯\\_(ツ)_/¯': ['happy', 'unwitting'],
    ಠ_ಠ: ['neutral', 'confused'],
    '( ͡° ͜ʖ ͡°)': ['neutral', 'mischievous'],
    'ᕕ( ᐛ )ᕗ': ['happy', 'excited', 'running'],
    'ʕ•ᴥ•ʔ': ['happy', 'bear'],
    'ᘳ´• ˕ •`ᘰ': ['happy'],
    '˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚': ['neutral', 'cry'],
    '¯\\(°_o)/¯': ['neutral', 'confused'],
    '(¬‿¬)': ['neutral', 'skeptical'],
    '∩(︶▽︶)∩': ['happy', 'chill'],
    '╰(°▽°)╯': ['happy', 'celebrating'],
    'ᕦ(ò_óˇ)ᕤ': ['angry', 'fighting', 'strong'],
    '⊂(◉‿◉)つ': ['happy', 'sharing'],
    '٩(◕‿◕｡)۶': ['happy', 'cheerful'],
    '༼ つ ◕_◕ ༽つ': ['neutral', 'requesting'],
} satisfies Record<string, tag[]>;

export type emojiType = keyof typeof unsaveEmojiList;

/**
 * List of emojis to be used in the app
 */
export const emojiList = unsaveEmojiList as Record<emojiType, tag[]>;
