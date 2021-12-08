import { createUseStyles } from 'react-jss'

export const hotelsStyles = (theme) => {
  return {
    hotels: {
      margin: '0 auto',
      background: theme.color.bgHotels,
    },
    hotels__title: {
      ...theme.typography.h2,
    },
    hotels__carrousel: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingBottom: '120px',
      '& a': {
        ...theme.typography.a,
        color: `${theme.color.primaryText}`,
      },
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
    },
    hotels__carrousel_p_place: {
      color: `${theme.color.secondaryText}`,
      '& a': {
        ...theme.typography.a,
        color: `${theme.color.secondaryText}`,
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
      ...theme.typography.h3,
    },
    available_hotel_p_place: {
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '25px',
      color: `${theme.color.bgFooter}`,
      margin: 0,
    },
    available_hotel_img: {
      width: '400px',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    available_hotel__btn_back: {
      ...theme.typography.button,
      borderRadius: '8px',
      border: 'none',
      height: '50px',
      width: '130px',
      fontSize: '18px',
      lineHeight: '21px',
      boxSizing: 'border-box',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    available_hotel__btn_book: {
      position: 'absolute',
      borderRadius: '8px',
      border: `solid 1px ${theme.color.bgFooter}`,
      height: '50px',
      width: '130px',
      fontSize: '18px',
      lineHeight: '21px',
      boxSizing: 'border-box',
      cursor: 'pointer',
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
  }
}

export default createUseStyles(hotelsStyles, { name: 'Hotel' })
