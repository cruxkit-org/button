import type { ButtonSize, ButtonVariant, ButtonColor } from '../types';

export const sizePaddingMap: Record<ButtonSize, { px: 3 | 4 | 6; py: 1 | 2 | 3 }> = {
    sm: { px: 3, py: 1 },
    md: { px: 4, py: 2 },
    lg: { px: 6, py: 3 }
};

export const sizeGapMap: Record<ButtonSize, 1 | 2> = {
    sm: 1,
    md: 2,
    lg: 2
};

export const labelSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

export const iconSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

export const variantClasses: Record<ButtonVariant, Record<ButtonColor, string[]>> = {
    solid: {
        brand:   ['bg-brand', 'text-inverse', 'border', 'border-transparent', 'hover:bg-brand-hover', 'active:bg-brand-active'],
        success: ['bg-success', 'text-inverse', 'border', 'border-transparent', 'hover:bg-success-hover', 'active:bg-success-active'],
        warning: ['bg-warning', 'text-inverse', 'border', 'border-transparent', 'hover:bg-warning-hover', 'active:bg-warning-active'],
        error:   ['bg-error', 'text-inverse', 'border', 'border-transparent', 'hover:bg-error-hover', 'active:bg-error-active'],
        neutral: ['bg-surface', 'text-1', 'border', 'border-1', 'hover:bg-raised', 'active:bg-tertiary'],
        info:    ['bg-info', 'text-inverse', 'border', 'border-transparent', 'hover:opacity-90']
    },
    outline: {
        brand:   ['bg-transparent', 'text-brand', 'border', 'border-brand', 'hover:bg-brand-subtle', 'active:bg-brand-subtle'],
        success: ['bg-transparent', 'text-success', 'border', 'border-success', 'hover:bg-success-subtle', 'active:bg-success-subtle'],
        warning: ['bg-transparent', 'text-warning', 'border', 'border-warning', 'hover:bg-warning-subtle', 'active:bg-warning-subtle'],
        error:   ['bg-transparent', 'text-error', 'border', 'border-error', 'hover:bg-error-subtle', 'active:bg-error-subtle'],
        neutral: ['bg-transparent', 'text-1', 'border', 'border-1', 'hover:bg-raised', 'active:bg-tertiary'],
        info:    ['bg-transparent', 'text-info', 'border', 'border-info', 'hover:opacity-90']
    },
    ghost: {
        brand:   ['bg-transparent', 'text-brand', 'border', 'border-transparent', 'hover:bg-brand-subtle', 'active:bg-brand-subtle'],
        success: ['bg-transparent', 'text-success', 'border', 'border-transparent', 'hover:bg-success-subtle', 'active:bg-success-subtle'],
        warning: ['bg-transparent', 'text-warning', 'border', 'border-transparent', 'hover:bg-warning-subtle', 'active:bg-warning-subtle'],
        error:   ['bg-transparent', 'text-error', 'border', 'border-transparent', 'hover:bg-error-subtle', 'active:bg-error-subtle'],
        neutral: ['bg-transparent', 'text-1', 'border', 'border-transparent', 'hover:bg-raised', 'active:bg-tertiary'],
        info:    ['bg-transparent', 'text-info', 'border', 'border-transparent', 'hover:opacity-90']
    },
    link: {
        brand:   ['bg-transparent', 'text-brand', 'border', 'border-transparent', 'px-1'],
        success: ['bg-transparent', 'text-success', 'border', 'border-transparent', 'px-1'],
        warning: ['bg-transparent', 'text-warning', 'border', 'border-transparent', 'px-1'],
        error:   ['bg-transparent', 'text-error', 'border', 'border-transparent', 'px-1'],
        neutral: ['bg-transparent', 'text-1', 'border', 'border-transparent', 'px-1'],
        info:    ['bg-transparent', 'text-info', 'border', 'border-transparent', 'px-1']
    },
    danger: {
        brand:   ['bg-error', 'text-inverse', 'border', 'border-transparent'],
        success: ['bg-error', 'text-inverse', 'border', 'border-transparent'],
        warning: ['bg-error', 'text-inverse', 'border', 'border-transparent'],
        error:   ['bg-error', 'text-inverse', 'border', 'border-transparent'],
        neutral: ['bg-error', 'text-inverse', 'border', 'border-transparent'],
        info:    ['bg-error', 'text-inverse', 'border', 'border-transparent']
    },
    primary: {
        brand:   ['bg-brand', 'text-inverse', 'border', 'border-transparent'],
        success: ['bg-brand', 'text-inverse', 'border', 'border-transparent'],
        warning: ['bg-brand', 'text-inverse', 'border', 'border-transparent'],
        error:   ['bg-brand', 'text-inverse', 'border', 'border-transparent'],
        neutral: ['bg-brand', 'text-inverse', 'border', 'border-transparent'],
        info:    ['bg-brand', 'text-inverse', 'border', 'border-transparent']
    },
    secondary: {
        brand:   ['bg-raised', 'text-1', 'border', 'border-transparent'],
        success: ['bg-raised', 'text-1', 'border', 'border-transparent'],
        warning: ['bg-raised', 'text-1', 'border', 'border-transparent'],
        error:   ['bg-raised', 'text-1', 'border', 'border-transparent'],
        neutral: ['bg-raised', 'text-1', 'border', 'border-transparent'],
        info:    ['bg-raised', 'text-1', 'border', 'border-transparent']
    },
    success: {
        brand:   ['bg-success', 'text-inverse', 'border', 'border-transparent'],
        success: ['bg-success', 'text-inverse', 'border', 'border-transparent'],
        warning: ['bg-success', 'text-inverse', 'border', 'border-transparent'],
        error:   ['bg-success', 'text-inverse', 'border', 'border-transparent'],
        neutral: ['bg-success', 'text-inverse', 'border', 'border-transparent'],
        info:    ['bg-success', 'text-inverse', 'border', 'border-transparent']
    },
    warning: {
        brand:   ['bg-warning', 'text-inverse', 'border', 'border-transparent'],
        success: ['bg-warning', 'text-inverse', 'border', 'border-transparent'],
        warning: ['bg-warning', 'text-inverse', 'border', 'border-transparent'],
        error:   ['bg-warning', 'text-inverse', 'border', 'border-transparent'],
        neutral: ['bg-warning', 'text-inverse', 'border', 'border-transparent'],
        info:    ['bg-warning', 'text-inverse', 'border', 'border-transparent']
    },
    info: {
        brand:   ['bg-info', 'text-inverse', 'border', 'border-transparent'],
        success: ['bg-info', 'text-inverse', 'border', 'border-transparent'],
        warning: ['bg-info', 'text-inverse', 'border', 'border-transparent'],
        error:   ['bg-info', 'text-inverse', 'border', 'border-transparent'],
        neutral: ['bg-info', 'text-inverse', 'border', 'border-transparent'],
        info:    ['bg-info', 'text-inverse', 'border', 'border-transparent']
    }
};
