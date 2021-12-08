import { createUseStyles } from 'react-jss'

export const footerStyles = (theme) => {
  return {
    footer: {
      padding: '120px 104px',
      background: theme.color.bgFooter,
      color: '#FFFFFF',
      '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '64px',
        '& ul': {
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          '& li': {
            marginBottom: '24px',
            '& span': {
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '23px',
            },
            '& a': {
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: '20px',
              lineHeight: '23px',
              color: '#FFFFFF',
              '&:hover': {
                ...theme.actions.hover,
              },
            },
          },
        },
      },
    },
    footer__text: {
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
    },
  }
}

export default createUseStyles(footerStyles, { name: 'Footer' })
