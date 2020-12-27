import React, { useState, useContext } from 'react'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext({
  theme: themes.light,
  toggle() {},
})

export default () => {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle() {
          setTheme(theme =>
            theme === themes.light ? themes.dark : themes.light
          )
        },
      }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

const Toolbar = () => {
  return <ThemeButton />
}

const ThemeButton = () => {
  const context = useContext(ThemeContext)
  return (
    <button
      style={{
        fontSize: '32px',
        color: context.theme.foreground,
        background: context.theme.background,
      }}
      onClick={() => context.toggle()}>
      Click Me!
    </button>
  )
}
