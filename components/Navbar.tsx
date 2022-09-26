import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { TbBrandGithub, TbMenu2 } from 'react-icons/tb';
import Logo from './Logo';
import ThemeToggleButton from './ThemeToggleButton';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: ReactNode;
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        borderRadius='md'
        bg={active ? '#88ccca' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: { path: string }) => {
  const { path } = props;

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      backdropFilter='blur(10px)'
      bg={useColorModeValue('#F7FAFC80', '#17192380')}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        textAlign='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' ml={3} size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
        >
          <LinkItem href='/konovalov' path={path}>
            Konovalov
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign='right' mr={3}>
          <ThemeToggleButton />
          <IconButton
            as='a'
            href='https://github.com/idm1try/idm1try-blog'
            aria-label='Source Code'
            icon={<TbBrandGithub />}
            ml={3}
            display={{ base: 'none', md: 'inline-flex' }}
          />
        </Box>
        <Box display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id='navbar-menu'>
            <MenuButton as={IconButton} icon={<TbMenu2 />} aria-label='Options' />
            <MenuList>
              <NextLink href='/konovalov' passHref>
                <MenuItem as={Link}>Konovalov</MenuItem>
              </NextLink>
              <MenuItem as='a' href='https://github.com/idm1try/idm1try-blog'>
                Source Code
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
