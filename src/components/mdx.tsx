import { useMDXComponent } from 'next-contentlayer/hooks'
import ScreenshotLink from './screenshot-link'

const components = {
  h1: ({ ...props }) => (
    <a href={`#${props.id}`}>
      <h1
        className='scroll-mt-8 decoration-surface2-200 underline-offset-4 hover:underline dark:decoration-surface1-100'
        {...props}
      />
    </a>
  ),
  h2: ({ ...props }) => (
    <a href={`#${props.id}`}>
      <h2
        className='scroll-mt-8 decoration-surface2-200 underline-offset-4 hover:underline dark:decoration-surface1-100'
        {...props}
      />
    </a>
  ),
  h3: ({ ...props }) => (
    <a href={`#${props.id}`}>
      <h3
        className='scroll-mt-8 decoration-surface2-200 underline-offset-4 hover:underline dark:decoration-surface1-100'
        {...props}
      />
    </a>
  ),
  h4: ({ ...props }) => (
    <a href={`#${props.id}`}>
      <h4
        className='scroll-mt-8 decoration-surface2-200 underline-offset-4 hover:underline dark:decoration-surface1-100'
        {...props}
      />
    </a>
  ),
  a: ({ ...props }) => <a className='border-underline-grow mt-0' {...props} />,
  ScreenshotLink: ScreenshotLink,
}

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export default Mdx