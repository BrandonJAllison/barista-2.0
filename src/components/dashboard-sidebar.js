<<<<<<< HEAD
import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Selector as SelectorIcon } from '../icons/selector';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { User as UserIcon } from '../icons/user';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import  logo  from '../../public/static/images/iconlogo.png';
import Image from 'next/image'
import { NavItem } from './nav-item';


const items = [
  {
    href: '/dashboard',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<ContactsIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/leads',
    icon: (<PeopleIcon fontSize="small" />),
    title: 'Leads'
  },
  {
    href: '/tasks',
    icon: (<TaskAltIcon fontSize="small" />),
    title: 'Tasks'
  },
  {
    href: '/websites',
    icon: (<LanguageIcon fontSize="small" />),
    title: 'Websites'
  },
  {
    href: '/orders',
    icon: (<InventoryIcon fontSize="small"/>),
    title: 'Orders'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'My Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  
 
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            
            >
              <a>
                <div    style={{
              display: "flex",
              justifyContent: "center",
            }}>
                <Image 
                  src={logo}
                  height={75}
                  width={75}
                />
                
                </div>
              </a>
            
            </NextLink>
            
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Cup O Code 
                </Typography>
                {/* <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography> */}
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />

      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
=======
import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Selector as SelectorIcon } from '../icons/selector';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { User as UserIcon } from '../icons/user';
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import  logo  from '../../public/static/images/iconlogo.png';
import Image from 'next/image'
import { NavItem } from './nav-item';


const items = [
  {
    href: '/dashboard',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<ContactsIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/leads',
    icon: (<PeopleIcon fontSize="small" />),
    title: 'Leads'
  },
  {
    href: '/tasks',
    icon: (<TaskAltIcon fontSize="small" />),
    title: 'Tasks'
  },
  {
    href: '/websites',
    icon: (<LanguageIcon fontSize="small" />),
    title: 'Websites'
  },
  {
    href: '/orders',
    icon: (<InventoryIcon fontSize="small"/>),
    title: 'Orders'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'My Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  
 
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            
            >
              <a>
                <div    style={{
              display: "flex",
              justifyContent: "center",
            }}>
                <Image 
                  src={logo}
                  height={75}
                  width={75}
                />
                
                </div>
              </a>
            
            </NextLink>
            
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Cup O Code 
                </Typography>
                {/* <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography> */}
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />

      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
>>>>>>> 5916853dcfb47c3699343b26ef5debfe06a3fc8e
