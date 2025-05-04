export const formatName = (name: string) => {
    const words: string[] = name.split(" ")
    if (words.length > 1) return `${words[0]} ${words[1][0]}.`
    return words[0]
}