import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Giscus from '@giscus/react';
import ChakraNextImage from 'components/ChakraNextImage';
import SocialLink from 'components/SocialLink';
import TableOfContent from 'components/TableOfContents';
import { ReactNode } from 'react';
import { TbBrandGithub, TbWorld } from 'react-icons/tb';
import Layout from './Article';

interface BlogLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  children: ReactNode;
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { frontmatter, children } = props;
  const commentsTheme = useColorModeValue('light', 'dark');

  if (!frontmatter) return <></>;

  const { publishedDate = {}, authorData: data = {}, headings = [] } = frontmatter;

  return (
    <>
      <Layout
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.thumbnail.url}
      >
        <HStack mt={8} mb={4}>
          <Box>
            <Popover isLazy trigger='hover' id='author-info'>
              <PopoverTrigger>
                <Avatar size='md' src={data.avatarUrl} />
              </PopoverTrigger>
              <PopoverContent maxW={{ base: 240, sm: 320 }}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Stack direction='row' spacing={6} align='flex-start'>
                    <Avatar src={data.avatar_url} size='xl' />
                    <Stack spacing={3}>
                      <Text fontWeight='bold'>{data.name}</Text>

                      <Stack isInline align='center' spacing={2}>
                        <SocialLink
                          href={`https://github.com/${data.name}`}
                          icon={TbBrandGithub}
                          label={`View ${data.name}'s Github`}
                        />
                        {data.url && data.url != `https://github.com/${data.name}` && (
                          <SocialLink
                            href={data.url}
                            icon={TbWorld}
                            label={`View ${data.name}'s website`}
                          />
                        )}
                      </Stack>
                      <Text fontSize='sm' color='gray.500'>
                        {data.bio}
                      </Text>
                    </Stack>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Text fontWeight='bold' fontSize='sm'>
              {data.name}
            </Text>
            <Text fontSize='xs' color='gray.500'>
              {publishedDate.text}
            </Text>
          </Box>
        </HStack>
        {frontmatter.thumbnail.raw && (
          <ChakraNextImage
            src={frontmatter.thumbnail.raw}
            alt={frontmatter.title}
            className='grid-item-thumbnail'
            height={350}
            width={750}
            objectFit='cover'
            borderRadius='lg'
            my={4}
          />
        )}
        <Heading fontSize='3xl' my={1}>
          {frontmatter.title}
        </Heading>
        <Text color='gray.500'>{frontmatter.description}</Text>
        <Divider my={4} />

        {children}

        <Box mt={8}>
          <Giscus
            id='comments'
            repo='idm1try/idm1try-blog'
            repoId='R_kgDOIEagqg'
            category='General'
            categoryId='DIC_kwDOIEagqs4CR4PJ'
            mapping='title'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='bottom'
            theme={commentsTheme}
            lang='en'
            loading='lazy'
          />
        </Box>
      </Layout>

      <TableOfContent
        visibility={headings.length === 0 ? 'hidden' : 'initial'}
        headings={headings}
      />
    </>
  );
}
