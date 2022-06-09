import GlobalStyle from "../src/globalStyles";

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
