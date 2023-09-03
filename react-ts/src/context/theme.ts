export type ThemeType = 'primary' | 'secondary' | 'tertiary'

export type ThemeProps = {
    main: string
    text: string
}
type Themes = {
    [index in ThemeType]: ThemeProps
}

export const theme: Themes = {
    primary: {
        main: '#3f51b5',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'
    },
    tertiary: {
        main: '#2b582d',
        text: '#fff'
    }
}