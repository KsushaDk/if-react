import { createUseStyles } from 'react-jss'

export const destinationsStyles = (theme) => {
  return {
    destinations: {
      margin: '0 auto',
      padding: '7% 7% 6%',
    },
    destinations__title: {
      ...theme.typography.h2,
      margin: 0,
      marginBottom: '7%',
    },
    destinations__btns: {
      display: 'flex',
      justifyContent: 'flex-start',
      '& button': {
        ...theme.typography.button,
        background: '#f3f3f4',
        color: `${theme.color.generalBlack}`,
        padding: '2% 7%',
        '&:nth-child(1)': {
          borderRadius: '8px 0px 0px 8px',
          borderRight: 'none',
        },
        '&:nth-child(2)': {
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px 0px 0px 0px',
        },
        '&:nth-child(3)': {
          borderRadius: '0px 8px 8px 0px',
          borderLeft: 'none',
        },
        '& a': {
          ...theme.typography.a,
          color: `${theme.color.generalBlack}`,
        },
        '&:active': {
          ...theme.typography.button,
          '& a': {
            ...theme.typography.a,
            color: `${theme.color.generalWhite}`,
          },
        },
        '&:hover': {
          ...theme.actions.hover,
        },
      },
    },
    destinations__carrousel: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '5%',
      '& div': {
        width: '23%',
        '&:hover': {
          ...theme.actions.hover,
        },
      },
      '& p': {
        marginTop: '2%',
        '& a': {
          ...theme.typography.a,
          color: `${theme.color.primaryText}`,
        },
      },
    },
    destinations__carrousel_img: {
      width: '100%',
      height: '80%',
      objectFit: 'cover',
    },
    destinations__btn_book: {
      ...theme.typography.button,
      position: 'absolute',
      border: `solid 1px ${theme.color.bgFooter}`,
      height: '50px',
      width: '130px',
      boxSizing: 'border-box',
      color: `${theme.color.bgFooter}`,
      background: `${theme.color.generalWhite}`,
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    '@media (max-width: 1024px)': {
      destinations: {
        padding: '5% 1%',
      },
      destinations__title: {
        ...theme.typography.mobile,
        marginBottom: '5%',
      },
      destinations__btns: {
        justifyContent: 'space-around',
        '& button': {
          padding: '1% 3%',
          background: `${theme.color.generalWhite}`,
          border: '1px solid #F3F3F4',
          borderRadius: '4px',
          color: `${theme.color.generalBlack}`,
          textAlign: 'center',
          cursor: 'pointer',
          '&:nth-child(1)': {
            borderRadius: '8px 8px 8px 8px',
            borderRight: '1px solid #F3F3F4',
          },
          '&:nth-child(2)': {
            borderLeft: '1px solid #F3F3F4',
            borderRight: '1px solid #F3F3F4',
            borderRadius: '8px 8px 8px 8px',
          },
          '&:nth-child(3)': {
            borderRadius: '8px 8px 8px 8px',
            borderLeft: '1px solid #F3F3F4',
          },
          '& a': {
            fontWeight: 400,
            fontSize: '19px',
            lineHeight: '22px',
            textDecoration: 'none',
          },
          '&:active': {
            ...theme.typography.button,
            '& a': {
              fontWeight: 400,
              fontSize: '19px',
              lineHeight: '22px',
              textDecoration: 'none',
              color: `${theme.color.generalWhite}`,
            },
          },
        },
      },
      destinations__carrousel: {
        '& div': {
          width: '40%',
          '&:nth-child(3)': {
            display: 'none',
          },
          '&:nth-child(4)': {
            display: 'none',
          },
        },
        '& p': {
          '& a': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '14px',
            textDecoration: 'none',
          },
        },
      },
      destinations__btn_book: {
        display: 'none',
      },
    },
  }
}

export default createUseStyles(destinationsStyles, { name: 'Destinations' })
