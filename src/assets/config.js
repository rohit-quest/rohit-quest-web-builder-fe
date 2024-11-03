export const Config = {
    BACKEND_URL: 'http://localhost:8000/'
}



export const GeneralFunctions = {
    codeExtractor: (code) => {
    const iconMatches = code.match(/import\s+.*?\{(.*?)\}\s+from\s+['"]react-icons\/fa['"];/);
    const icons = iconMatches ? iconMatches[1].split(',').map(icon => icon.trim()) : [];

    const cleanedCode = code
        .replace(/import\s+.*?;\n?/g, '')
        .replace(/export\s+.*?;\n?/g, '')

    return {
        icons,
        cleanedCode: cleanedCode.trim()
    };
    }
}