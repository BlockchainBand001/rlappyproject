'use client';

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 24px',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <StyledButton
      variant={variant === 'outline' ? 'outlined' : 'contained'}
      color={variant === 'secondary' ? 'secondary' : 'primary'}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
