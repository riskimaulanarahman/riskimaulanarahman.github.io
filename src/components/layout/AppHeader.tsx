import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Drawer,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub } from '@tabler/icons';

const useRouter = Router;

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      fontWeight: 500,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

interface AppHeaderProps {
  links: { link: string; label: string }[];
}

export default function AppHeader({ links }: AppHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { route } = useRouter;
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: route === link.link,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Drawer
          opened={opened}
          onClose={toggle}
          title="List Menu"
          padding="xl"
          size="xl"
        >
          {items}
        </Drawer>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            onClick={() => {
              window.open('https://github.com/riskimaulanarahman');
            }}
            size="lg"
          >
            <IconBrandGithub size={18} stroke={2} color="black" />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
