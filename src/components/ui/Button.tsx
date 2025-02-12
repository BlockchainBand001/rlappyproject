'use client';

import { Button as MuiButton, ButtonProps as MuiButtonProps, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 24px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textTransform: 'none',
  fontWeight: 600,
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    borderRadius: 'inherit',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 6px 20px rgba(0,0,0,0.1)'
      : '0 6px 20px rgba(0,0,0,0.2)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
}));

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const theme = useTheme();

  const getVariantStyles = () => {
    if (variant === 'gradient') {
      return {
        background: 'linear-gradient(45deg, #00b894 30%, #00cec9 90%)',
        color: theme.palette.common.white,
      };
    }
    return {};
  };

  return (
    <StyledButton
      variant={variant === 'outline' ? 'outlined' : 'contained'}
      color={variant === 'secondary' ? 'secondary' : 'primary'}
      sx={getVariantStyles()}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
