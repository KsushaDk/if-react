import { createUseStyles } from 'react-jss'

const formInput = {
  width: '100%',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '21px',
  color: '#383838',
  border: '3px solid #f3f3f4',
  outline: 'none',
  height: '64px',
  boxSizing: 'border-box',
  '&:focus': {
    border: '3px solid #f5bd41',
  },
}

export const topSectionStyles = (theme) => {
  return {
    top_section: {
      ...theme.bgHeader,
    },
    top_section__navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10%',
    },
    navigation_logo: {
      width: '207px',
      height: '40px',
      background: {
        image: `${theme.logo.image}`,
        size: 'contain',
        repeat: 'no-repeat',
      },
    },
    navigation_group: {
      display: 'flex',
      alignItems: 'center',
    },
    navigation_div_text: {
      marginLeft: '25px',
      position: 'relative',
      '& a': {
        ...theme.typography.a,
        color: '#FFFFFF',
      },
      '&:hover': {
        '&::after': {
          background: ' #f5bd41',
          content: "''",
          width: '100%',
          height: '4px',
          position: 'absolute',
          top: '38px',
          left: '0px',
        },
      },
    },
    navigation_div_picture_night: {
      marginLeft: '48px',
      width: '30px',
      height: '30px',
      background: {
        image: 'url(/images/night.svg)',
        size: 'cover',
        repeat: 'no-repeat',
      },
      '&:hover': {
        filter: 'invert(43%) sepia(168%) hue-rotate(12deg) saturate(614%)',
      },
    },
    navigation_div_picture_user: {
      marginLeft: '24px',
      width: '40px',
      height: '40px',
      background: {
        image: 'url(/images/user.svg)',
        size: 'cover',
      },
      '&:hover': {
        filter: 'invert(43%) sepia(168%) hue-rotate(12deg) saturate(614%)',
      },
    },
    navigation_div_picture_menu: {
      display: 'none',
    },

    navigation_dropdowm_sign_out: {
      padding: '14px 57px 14px 16px',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: '10%',
      right: '7%',
      backgroundColor: '#f9f9f9',
      background: `${theme.color.generalWhite}`,
      border: '1px solid #cecece',
      borderRadius: '8px',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: '#f1f1f1de',
      },
      '& a': {
        ...theme.typography.a,
        textAlign: 'center',
        textDecoration: 'none',
      },
    },

    navigation_dropdowm_sign_out_btn: {
      paddingLeft: '16px',
    },
    navigation_dropdowm_sign_out_icon: {
      width: '23px',
      height: '20px',
      background: {
        image: 'url(/images/sign-out.svg)',
        size: 'cover',
      },
    },

    top_section__title: {
      ...theme.typography.h1,
      color: `${theme.color.generalWhite}`,
      marginBottom: '10%',
    },
    top_section__form: {
      display: 'flex',
      alignItems: 'flex-end',
      position: 'relative',
    },
    form__div_destination: {
      width: '35%',
      '& input': {
        ...formInput,
        borderRadius: '8px 0px 0px 8px',
        borderRight: 'none',
        paddingLeft: '24px',
      },
    },
    form__div_date: {
      width: '20%',
      '& input': {
        ...formInput,
        borderLeft: 'none',
        borderRight: 'none',
        paddingLeft: '24px',
      },
    },
    form__div_people: {
      width: '30%',
      display: 'flex',
      '& input': {
        ...formInput,
        borderRadius: '0px 8px 8px 0px',
        borderLeft: 'none',
        textAlign: 'center',
      },
    },
    form__div_btn: {
      width: '15%',
      '& input': {
        ...theme.typography.button,
        padding: '0px',
        height: '64px',
        width: '100%',
        boxSizing: 'border-box',
        '&:hover': {
          opacity: 0.9,
        },
      },
    },
    form__label: {
      ...theme.typography.label,
    },

    top_section__apps: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10%',
    },
    top_section__apps_apple: {
      width: '120px',
      height: '40px',
      marginLeft: '8px',
      background: {
        image: 'url(/images/app_store.svg)',
        size: 'cover',
      },
      '& a': {
        display: 'block',
        height: '100%',
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },
    top_section__apps_google: {
      width: '135px',
      height: '40px',
      marginRight: '8px',
      background: {
        image: 'url(/images/google_play.svg)',
        size: 'cover',
      },
      '& a': {
        display: 'block',
        height: '100%',
      },
      '&:hover': {
        ...theme.actions.hover,
      },
    },

    form__filter_people_focus: {
      marginTop: '15px',
      padding: '22px',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      right: '20%',
      top: '100%',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#333333',
      borderRadius: '8px',
      backgroundColor: `${theme.color.generalWhite}`,
    },
    form__filter_div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '6px',
      '& input': {
        width: '40px',
        border: 'none',
        textAlign: 'center',
      },
      '& button': {
        width: '30px',
        height: '30px',
        border: `1px solid ${theme.color.primaryText}`,
        color: `${theme.color.primaryText}`,
        backgroundColor: `${theme.color.generalWhite}`,
        '&:disabled': {
          border: '1px solid #cecece',
          color: '#cecece',
        },
      },
    },

    form__filter_people_focus_selector: {
      display: 'flex',
      flexDirection: 'column',
      '& label': {
        paddingTop: '16px',
        fontSize: '12px',
        lineHeight: '14px',
      },
      '& select': {
        marginTop: '12px',
        height: '30px',
        width: '100px',
        fontSize: '12px',
        lineHeight: '14px',
        outline: 'none',
        border: `1px solid ${theme.color.primaryText}`,
      },
    },

    wrapper__sign_in: {
      height: '100vh',
      ...theme.bgHeader,
    },
    top_section__sign_in: {
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      padding: '40px',
      margin: '0 auto',
      marginBottom: '197px',
      background: `${theme.color.generalWhite}`,
      border: '1px solid #cecece',
      boxSizing: 'border-box',
      borderRadius: '8px',
    },

    top_section__form_sign_in_title: {
      margin: '0px',
      paddingBottom: '40px',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '28px',
      textAlign: 'center',
      color: '#000000',
    },
    top_section__form_sign_in: {
      display: 'flex',
      flexDirection: 'column',
      '& label': {
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#333333',
        display: 'block',
        boxSizing: 'border-box',
      },
      '& input': {
        width: '100%',
        marginTop: '8px',
        marginBottom: '20px',
        paddingLeft: '10px',
        height: '41px',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '21px',
        background: `${theme.color.generalWhite}`,
        border: '2px solid #cecece',
        boxSizing: 'border-box',
        borderRadius: '8px',
        outline: 'none',
      },
    },

    form_sign_in__btn: {
      width: '100%',
      height: '48px',
      marginTop: '4px',
      marginBottom: '20px',
      boxSizing: 'border-box',
      ...theme.typography.button,
      backgroungColor: `${theme.color.primaryText}`,
      '&:focus': {
        border: 'none',
      },
    },
    form_sign_in__warning: {
      ...theme.typography.describtionName,
      width: '100%',
      textAlign: 'center',
      color: `${theme.color.primaryText}`,
    },

    '@media (max-width: 1024px)': {
      top_section: {
        ...theme.bgHeader,
        padding: '1% 2% 3%',
      },
      top_section__navigation: {
        marginBottom: '5%',
      },
      navigation_logo: {
        width: '122px',
        height: '24px',
      },
      navigation_group: {
        width: '20%',
        justifyContent: 'space-around',
      },
      navigation_div_text: {
        display: 'none',
      },
      navigation_div_picture_night: {
        marginLeft: 0,
        width: '16px',
        height: '16px',
      },
      navigation_div_picture_user: {
        marginLeft: 0,
        width: '24px',
        height: '24px',
      },
      navigation_div_picture_menu: {
        display: 'block',
        width: '24px',
        height: '16px',
        background: {
          image: 'url(/images/menu.svg)',
          size: 'contain',
          repeat: 'no-repeat',
        },
        '&:hover': {
          filter: 'invert(43%) sepia(168%) hue-rotate(12deg) saturate(614%)',
        },
      },

      navigation_dropdowm_sign_out: {
        top: '4%',
        right: '2%',
      },

      top_section__title: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '30px',
        lineHeight: '35px',
        color: `${theme.color.generalWhite}`,
        marginBottom: '5%',
      },
      top_section__form: {
        flexDirection: 'column',
        background: '#F5BD41',
        padding: '2%',
      },
      form__div_destination: {
        background: `${theme.color.generalWhite}`,
        borderRadius: '8px',
        width: '100%',
        marginBottom: '2%',
        '& input': {
          ...formInput,
          border: '1px solid #f3f3f4',
          borderRadius: '8px',
          borderRight: '1px solid #f3f3f4',
          '&:focus': {
            border: 'none',
          },
        },
      },
      form__div_date: {
        background: `${theme.color.generalWhite}`,
        width: '100%',
        borderRadius: '8px',
        marginBottom: '2%',
        '& input': {
          ...formInput,
          border: '1px solid #f3f3f4',
          borderRadius: '8px',
          borderLeft: '3px solid #f3f3f4',
          borderRight: '3px solid #f3f3f4',
          textAlign: 'center',
          '&:focus': {
            border: 'none',
          },
        },
      },
      form__div_people: {
        borderRadius: '8px',
        background: `${theme.color.generalWhite}`,
        width: '100%',
        display: 'flex',
        marginBottom: '2%',
        '& input': {
          ...formInput,
          border: '1px solid #f3f3f4',
          '&:focus': {
            border: 'none',
          },
        },
      },
      form__div_btn: {
        width: '100%',
      },
      form__label: {
        display: 'none',
      },
    },
  }
}

export default createUseStyles(topSectionStyles, { name: 'TopSection' })
