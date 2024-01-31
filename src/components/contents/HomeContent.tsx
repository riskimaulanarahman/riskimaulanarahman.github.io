import React from 'react';
import ReactMarkdown from 'react-markdown';
import useReadme from '@/hooks/useGetLatestReadme';
import {
  Avatar,
  Card,
  Loader,
  createStyles,
  Grid,
  Text,
  Paper,
  Button,
  Center,
  Container,
} from '@mantine/core';
import { IconMail } from '@tabler/icons';
import { SocialIcon } from 'react-social-icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
  iconEmail: {
    marginTop: 2,
  },
  iconSocialMedia: {
    marginInline: 3,
  },
}));

interface SocialMedia {
  platform: string;
  link: string;
}

export function HomeContent() {
  const { classes } = useStyles();
  const { readme, loading, error } = useReadme();
  const socialMedia: SocialMedia[] = [
    {
      platform: 'instagram',
      link: 'https://instagram.com/_riskimr',
    },
    {
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/riskimaulanarahman/',
    },
  ];

  const socialMediaShow = socialMedia.map(({ link, platform }) => (
    <SocialIcon
      style={{ height: 25, width: 25 }}
      className={classes.iconSocialMedia}
      key={platform}
      url={link}
    />
  ));

  return (
    <>
      <Card p="xl" className={classes.card}>
        <Grid>
          <Grid.Col sm={12} lg={3}>
            <Paper>
              <Avatar
                size={120}
                radius={120}
                mx="auto"
                src="https://avatars.githubusercontent.com/u/61986465?v=4"
              />
              <Text align="center" size="lg" weight={800} mt="md">
                Riski Maulana Rahman
              </Text>
              <Text align="center" size="sm" mb={20}>
                Fullstack Developer
              </Text>

              <Center>{socialMediaShow}</Center>
              <Button
                leftIcon={<IconMail />}
                onClick={() => window.open('mailto:riskimaulanarahman@gmail.com')}
                fullWidth
                mt={20}
                size="sm"
                variant="outline"
              >
                Mail me!
              </Button>
            </Paper>
          </Grid.Col>
          <Grid.Col sm={12} lg={9}>
            {loading || (error && <Loader />)}
            {!loading && (
              <Container>
                <ReactMarkdown>{readme as string}</ReactMarkdown>
              </Container>
            )}
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}
