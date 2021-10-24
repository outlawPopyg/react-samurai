export const requiredField = (value) => {
    if (value) return undefined;
    return "Required field";
};

// validator creator
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length ${maxLength}`;
    return undefined;
};