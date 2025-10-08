export const Header = ({lightMode, setLightMode}) => {
    console.log(`Header, light mode is set to ${lightMode}`)
  return (
    <header>
      <a href="https://google.com">google.com</a>
      <a href="foo">bar</a>
      <a href="baz">foo</a>
      <button onClick={() => {
        setLightMode(!lightMode)
      }}>toggle light mode</button>
    </header>
  );
};
