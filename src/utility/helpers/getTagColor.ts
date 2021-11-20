export const getTagColor = (tech: string): string => {
  let color = "";

  switch (tech) {
    case "Firebase":
      return (color = "#D6CB7A");
    case "React-Native":
      return (color = "#00d8ff");
    case "NodeJS":
      return (color = "#6cc24a");
    case "MongoDB":
      return (color = "#589636");
    case "React":
      return (color = "#00d8ff");
    case "Gatsby":
      return (color = "#663399");
    case "Graphql":
      return (color = "#e10098");
    case "AsyncStorage":
      return (color = "#ef5b25");
    case "ChakraUI":
      return (color = "#319795");
    case "NodeJs":
      return (color = "#6cc24a");
  }

  return color;
};
