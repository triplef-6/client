export const validateNickname = (str: string): boolean => {
    return !/[а-яА-ЯёЁ]/.test(str);
}