import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'white',
    tertiary: 'darkgrey',
    degrade: 'linear-gradient(180deg, rgba(0,89,255,1) 0%, rgba(0,89,255,1) 280px, rgba(255,255,255,1) 280px)'
  },
  tamanho: {
    primary: '30px',
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}