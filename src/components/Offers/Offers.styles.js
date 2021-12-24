import { createUseStyles } from 'react-jss'

export const offersStyles = (theme) => {
  return {
    offers: {
      padding: '10% 5%',
    },
    offers__title: {
      ...theme.typography.h2,
      paddingBottom: '5%',
      margin: 0,
      position: 'relative',
      '&:after': {
        content: "''",
        position: 'absolute',
        width: '100px',
        height: '4px',
        backgroundColor: '#f5bd41',
        margin: '0px auto',
        top: '67px',
        left: 0,
        right: 0,
      },
    },
    offers__items: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      marginTop: '7%',
    },
    offers__item: {
      textAlign: 'center',
      '& p': {
        ...theme.typography.describtionPlace,
        marginTop: '4%',
        '& a': {
          ...theme.typography.a,
          color: `${theme.color.generalBlack}`,
        },
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    '@media (max-width: 1024px)': {
      offers: {
        padding: '5% 3%',
      },
      offers__title: {
        paddingBottom: '2%',
        ...theme.typography.mobile,
        '&:after': {
          display: 'none',
        },
      },
      offers__items: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      offers__item: {
        '& p': {
          marginTop: '10%',
        },
      },
    },
  }
}

export default createUseStyles(offersStyles, { name: 'Offers' })
