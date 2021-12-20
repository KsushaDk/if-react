import { createUseStyles } from 'react-jss'

export const signUpStyles = (theme) => {
  return {
    signup: {
      background: theme.color.bgHotels,
      margin: '105px 104px',
      padding: '24px 24px 52px',
      '& img': {
        float: 'right',
        '&:hover': {
          ...theme.actions.hover,
        },
      },
    },
    signup_item: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '26px',
      '& img': {
        marginRight: '25px',
        '&:hover': {
          ...theme.actions.hover,
        },
      },
      '& div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& p': {
          ...theme.typography.describtionName,
          color: `${theme.color.generalBlack}`,
          paddingBottom: '25px',
          margin: 0,
        },
        '& button': {
          border: `1px solid ${theme.color.primaryText}`,
          borderRadius: '8px',
          background: `${theme.color.generalWhite}`,
          color: `${theme.color.primaryText}`,
          padding: '12px 32px',
          width: '130px',
          height: '50px',
          '& a': {
            textDecoration: 'none',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '21px',
            color: `${theme.color.primaryText}`,
          },
          '&:hover': {
            ...theme.actions.hover,
          },
        },
      },
    },
    '@media (max-width: 1024px)': {
      signup: {
        display: 'none',
      },
    },
  }
}

export default createUseStyles(signUpStyles, { name: 'SignUp' })
