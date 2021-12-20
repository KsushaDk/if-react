import { createUseStyles } from 'react-jss'

export const hotelsStyles = (theme) => {
  return {
    hotels: {
      margin: '0 auto',
      background: theme.color.bgHotels,
      padding: '7% 5%',
    },
    hotels__title: {
      ...theme.typography.h2,
      margin: 0,
      marginBottom: '10%',
    },
    hotels__carrousel: {
      '& a': {
        ...theme.typography.a,
      },
    },
    hotels__slider_div: {
      margin: '0 auto',
      width: '296px',
      height: '100%',
    },
    hotels__carrousel_img: {
      width: '296px',
      height: '296px',
      objectFit: 'cover',
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    hotels__carrousel_p_name: {
      color: `${theme.color.primaryText}`,
      '& a': {
        ...theme.typography.a,
        color: `${theme.color.primaryText}`,
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    hotels__carrousel_p_place: {
      color: `${theme.color.secondaryText}`,
      '& a': {
        ...theme.typography.a,
        color: `${theme.color.secondaryText}`,
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },

    available_hotels__carrousel: {
      display: 'flex',
      justifyContent: 'space-around',
      '& a': {
        ...theme.typography.a,
      },
    },
    available_hotel__item: {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '100px',
      background: theme.color.bgHotels,
    },
    available_hotel__info: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    available_hotel__description: {
      borderRadius: '8px',
      alignSelf: 'flex-end',
      padding: '20px 25px',
      background: `${theme.color.bgDescribtion}`,
    },
    available_hotel__title: {
      ...theme.typography.h2,
      paddingBottom: '10%',
      margin: 0,
    },
    available_hotel_p_place: {
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '25px',
      color: `${theme.color.bgFooter}`,
      margin: 0,
    },
    available_hotel_img: {
      width: '500px',
      height: '500px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    available_hotel__btn_back: {
      ...theme.typography.button,
      height: '50px',
      width: '140px',
      boxSizing: 'border-box',
      alignSelf: 'flex-start',
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    available_hotel__btn_book: {
      ...theme.typography.button,
      position: 'absolute',
      border: `solid 1px ${theme.color.bgFooter}`,
      height: '50px',
      width: '140px',
      boxSizing: 'border-box',
      color: `${theme.color.bgFooter}`,
      background: `${theme.color.generalWhite}`,
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    available_hotel__picture: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    '@media (max-width: 1024px)': {
      hotels: {
        margin: '0 auto',
        background: theme.color.bgHotels,
        padding: '5% 1%',
      },
      hotels__title: {
        ...theme.typography.mobile,
        marginBottom: '5%',
      },
      hotels__carrousel: {
        '& a': {
          fontWeight: 400,
          fontSize: '19px',
          lineHeight: '22px',
          textDecoration: 'none',
        },
      },
      hotels__slider_div: {
        margin: '0 auto',
        width: '156px',
        height: '100%',
      },
      hotels__carrousel_img: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        '&:hover': {
          ...theme.actions.hover,
        },
      },
      hotels__carrousel_p_name: {
        color: `${theme.color.primaryText}`,
        '& a': {
          textDecoration: 'none',
          fontSize: '12px',
          lineHeight: '14px',
          color: `${theme.color.primaryText}`,
        },
        '&:hover': {
          ...theme.actions.hover,
        },
      },
      hotels__carrousel_p_place: {
        color: `${theme.color.secondaryText}`,
        '& a': {
          textDecoration: 'none',
          fontSize: '12px',
          lineHeight: '14px',
          color: `${theme.color.secondaryText}`,
        },
        '&:hover': {
          ...theme.actions.hover,
        },
      },

      available_hotels__carrousel: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        '& a': {
          textDecoration: 'none',
          fontSize: '12px',
          lineHeight: '14px',
        },
      },
      available_hotel__item: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: '10%',
        background: theme.color.bgHotels,
      },
      available_hotel__info: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
      },
      available_hotel__description: {
        margin: {
          top: '5%',
          bottom: '5%',
        },
        borderRadius: '8px',
        alignSelf: 'center',
        padding: '5% 7%',
        background: `${theme.color.bgDescribtion}`,
      },
      available_hotel__title: {
        ...theme.typography.describtionName,
        paddingBottom: '10%',
        margin: 0,
      },
      available_hotel_p_place: {
        fontWeight: 500,
        fontSize: '25px',
        lineHeight: '25px',
        color: `${theme.color.bgFooter}`,
        margin: 0,
      },
      available_hotel_img: {
        width: '80%',
        height: '70%',
        objectFit: 'cover',
        borderRadius: '8px',
      },
      available_hotel__btn_back: {
        ...theme.typography.button,
        height: '50px',
        width: '140px',
        boxSizing: 'border-box',
        alignSelf: 'flex-start',
        '&:hover': {
          ...theme.actions.hover,
        },
      },
      available_hotel__btn_book: {
        display: 'none',
      },
      available_hotel__picture: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  }
}

export default createUseStyles(hotelsStyles, { name: 'Hotels' })
