export function formatExcursionWord(count: number): string {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return "экскурсий";
    }

    if (lastDigit === 1) {
        return "экскурсия";
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return "экскурсии";
    }

    return "экскурсий";
}