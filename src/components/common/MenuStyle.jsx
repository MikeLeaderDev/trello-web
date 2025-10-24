const MenuStyle = {
  color: 'text.primary',
  bgcolor: 'secondary.main',
  border: 'none',
  paddingX: '5px',
  marginX: '4px',
  borderRadius: 1,
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  '& .MuiSvgIcon-root': { color: 'primary.main' },

  '&:hover': {
    bgcolor: 'secondary_2.main',
    color: 'text.primary'
  },

  // icon fade animation
  '& .icon1': {
    position: 'absolute',
    left: 8,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 1,
    transition: 'opacity 0.2s ease-in-out'
  },
  '& .icon2': {
    position: 'absolute',
    left: 8,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out'
  },
  '&:hover .icon1': { opacity: 0 },
  '&:hover .icon2': { opacity: 1 },
  '& .MuiChip-icon': {
    marginRight: '3px !important' // try 10px if you want a bit more
  }
}

export default MenuStyle
