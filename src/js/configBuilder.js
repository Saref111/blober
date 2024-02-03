const buildConfig = (formElement) => {
    const formData = new FormData(formElement);
    const config = {};
    
    for (const [key, value] of formData.entries()) {
        config[key] = value;
    }
    
    return config;
};
