import { createUseStyles } from 'react-jss'

export const reviewsStyles = (theme) => {
  return {
    reviews: {
      padding: '7% 5%',
    },
    reviews__title: {
      ...theme.typography.h2,
      marginBottom: '5%',
      margin: 0,
    },
    reviews__items: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    reviews__item: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '30%',
    },
    description: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    description_name: {
      display: 'flex',
      justifyContent: 'space-between',
      '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      '& a': {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        textDecoration: 'none',
        color: `${theme.color.primaryText}`,
        '&:last-child': {
          fontWeight: 'normal',
        },
      },
      '& p': {
        marginBottom: 0,
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: `${theme.color.secondaryText}`,
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    describtion_rate: {
      width: '48px',
      height: '32px',
      background: `${theme.color.bgFooter}`,
      borderRadius: '8px',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '25px',
      color: `${theme.color.generalWhite}`,
      textAlign: 'center',
    },
    description_img: {
      width: '100%',
      objectFit: 'cover',
      marginBottom: '2%',

      '&:hover': {
        ...theme.actions.hover,
      },
    },
    describtion_comment: {
      marginTop: '7%',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '21px',
      color: `${theme.color.generalBlack}`,
      '& div': {
        display: 'flex',
      },
      '& span': {
        marginLeft: '5%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: `${theme.color.generalBlack}`,
      },
      '& p': {
        marginTop: '5%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: `${theme.color.generalBlack}`,
      },
    },
    '@media (max-width: 1024px)': {
      reviews: {
        padding: '5% 3%',
      },
      reviews__title: {
        ...theme.typography.mobile,
        margin: '0 auto 5%',
      },
      reviews__items: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      reviews__item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        '&:nth-child(2)': {
          display: 'none',
        },
        '&:nth-child(3)': {
          display: 'none',
        },
      },
      description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      description_name: {
        display: 'flex',
        justifyContent: 'space-between',
        '& div': {
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        },
        '& a': {
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '21px',
          textDecoration: 'none',
          color: `${theme.color.primaryText}`,
          '&:last-child': {
            fontWeight: 'normal',
          },
        },
        '& p': {
          marginBottom: 0,
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '16px',
          color: `${theme.color.secondaryText}`,
        },
      },
      describtion_rate: {
        width: '48px',
        height: '32px',
        background: `${theme.color.bgFooter}`,
        borderRadius: '8px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '25px',
        color: `${theme.color.generalWhite}`,
        textAlign: 'center',
      },
      description_img: {
        width: '100%',
        objectFit: 'cover',
        marginBottom: '2%',

        '&:hover': {
          ...theme.actions.hover,
        },
      },
      describtion_comment: {
        marginTop: '7%',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: `${theme.color.generalBlack}`,
        '& div': {
          display: 'flex',
        },
        '& span': {
          marginLeft: '5%',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '21px',
          color: `${theme.color.generalBlack}`,
        },
        '& p': {
          marginTop: '5%',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '21px',
          color: `${theme.color.generalBlack}`,
        },
      },
    },
  }
}

export default createUseStyles(reviewsStyles, { name: 'Reviews' })
