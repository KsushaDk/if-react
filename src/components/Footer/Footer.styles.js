import { createUseStyles } from 'react-jss'

export const footerStyles = (theme) => {
  return {
    footer: {
      padding: '7% 5%',
      background: theme.color.bgFooter,
      color: '#FFFFFF',
      '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5%',
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
    footer__logo: {
      display: 'none',
    },
    '@media (max-width: 1024px)': {
      footer: {
        padding: '5% 10%',
        '& div': {
          justifyContent: 'space-around',
          '& ul': {
            '& li': {
              '& a': {
                display: 'none',
              },
            },
          },
        },
      },
      footer__logo: {
        margin: '0 auto',
        width: '98px',
        height: '19px',
        background: {
          image: 'url(/images/logo_mobile.svg)',
          size: 'contain',
          repeat: 'no-repeat',
        },
      },
    },
  }
}

export default createUseStyles(footerStyles, { name: 'Footer' })
