export const useData = () => {
    const navigation = [
        { name: "Landing", to: "landing" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
    ];

    return {
        navigation,
    }
}